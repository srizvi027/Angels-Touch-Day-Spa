"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LfmcrUtAAAAAIbFQwk9n0FPOM-z3P9FzU-WUil3";

export default function RecaptchaProvider({ children }: { children: React.ReactNode }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      {children}
    </GoogleReCaptchaProvider>
  );
}
