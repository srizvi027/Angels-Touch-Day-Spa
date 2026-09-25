import { NextResponse } from "next/server";

const fallbackWeb3FormsAccessKey = "b6c859d1-8ab7-4d30-b126-77e39f7168c1";
const configuredWeb3FormsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
const web3FormsAccessKey = configuredWeb3FormsAccessKey && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(configuredWeb3FormsAccessKey)
  ? configuredWeb3FormsAccessKey
  : fallbackWeb3FormsAccessKey;
const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY?.trim();

type ContactRequest = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  date?: string;
  time?: string;
  message?: string;
  recaptchaToken?: string;
};

type RecaptchaResponse = {
  success?: boolean;
  score?: number;
  action?: string;
};

export async function POST(request: Request) {
  if (!web3FormsAccessKey || !recaptchaSecretKey) {
    return NextResponse.json({ message: "The enquiry form is not configured." }, { status: 500 });
  }

  try {
    const body = await request.json() as ContactRequest;
    if (!body.recaptchaToken) {
      return NextResponse.json({ message: "Please complete the security check and try again." }, { status: 400 });
    }

    const recaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: recaptchaSecretKey, response: body.recaptchaToken }),
    });
    const recaptchaResult = await recaptchaResponse.json() as RecaptchaResponse;

    if (!recaptchaResult.success || recaptchaResult.action !== "submit" || (recaptchaResult.score ?? 0) < 0.5) {
      return NextResponse.json({ message: "Security verification failed. Please try again." }, { status: 403 });
    }

    const formData = new FormData();
    formData.append("access_key", web3FormsAccessKey);
    formData.append("subject", "New service enquiry - Angel's Touch Day Spa");
    formData.append("from_name", "Angel's Touch Day Spa website");
    formData.append("name", body.name || "");
    formData.append("phone", body.phone || "");
    formData.append("email", body.email || "");
    formData.append("service", body.service || "");
    formData.append("date", body.date || "");
    formData.append("time", body.time || "");
    formData.append("message", body.message || "");

    const web3FormsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const web3FormsResult = await web3FormsResponse.json() as { success?: boolean; message?: string };

    if (!web3FormsResponse.ok || !web3FormsResult.success) {
      return NextResponse.json({ message: web3FormsResult.message || "Unable to send your enquiry." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ message: "Unable to send your enquiry. Please try again." }, { status: 500 });
  }
}
