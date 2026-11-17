import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/site";

const title = "Privacy Policy";
const description =
  "How Angel's Touch Day Spa collects, uses, stores and protects personal information for massage, beauty and spa bookings in Australia.";
const canonicalUrl = `${siteUrl}/privacy-policy`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: `${title} | Angel's Touch Day Spa`,
    description,
    url: canonicalUrl,
    siteName: "Angel's Touch Day Spa",
    images: [{ url: `${siteUrl}/images/logo.png`, width: 512, height: 512 }],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Angel's Touch Day Spa`,
    description,
    images: [`${siteUrl}/images/logo.png`],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="min-h-screen bg-cream px-6 pb-20 pt-16 md:px-12">
        <article className="mx-auto max-w-4xl">
          <a href="/" className="font-heading text-lg text-espresso hover:underline">
            Angel&rsquo;s Touch Day Spa
          </a>
          <p className="eyebrow mb-4 mt-12">Your privacy matters</p>
          <h1 className="heading-lg mb-8">Privacy Policy</h1>
          <div className="space-y-10 font-body text-base leading-relaxed text-espresso/80">
            <section>
              <h2 className="heading-md mb-3">About this policy</h2>
              <p>
                This policy explains how Angel&rsquo;s Touch Day Spa handles personal
                information when you visit our website, make an enquiry, or book a
                mobile or in-studio massage, beauty, or spa treatment. The Privacy Act
                1988 (Cth) and Australian Privacy Principles apply to our business
                where required by law. Regardless of whether a small-business
                exemption applies, we aim to handle your information respectfully and
                only for the purposes described here.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3">Information we collect</h2>
              <p>
                We may collect your name, phone number, email address, preferred
                appointment date and time, chosen service, appointment type, and
                details you include in an enquiry. When you book through our booking
                platform, that platform may collect additional booking and payment
                information under its own privacy policy.
              </p>
              <p className="mt-3">
                You may choose to tell us about health conditions, allergies,
                sensitivities, injuries, pregnancy, or other treatment-related needs
                so we can consider whether a service is suitable. This can be
                sensitive health information. Please share only what is relevant to
                your care; we will seek your consent where required before collecting
                or using sensitive information.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3">How information is collected and used</h2>
              <p>
                We collect information directly from you through website enquiries,
                phone or email contact, and bookings made with our booking provider.
                We use it to respond to questions, arrange and manage appointments,
                understand treatment requirements, communicate changes, and
                administer our services.
              </p>
              <p className="mt-3">
                Enquiry-form information is sent to us through Web3Forms. Google
                reCAPTCHA is used to help protect the form from automated misuse.
                These providers may process information in accordance with their own
                privacy terms and may handle data outside Australia.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3">Booking platforms, payments and disclosure</h2>
              <p>
                Online appointment bookings are handled through Fresha. Any payment
                details you provide during that process are handled by Fresha or its
                payment providers, not collected by this website&rsquo;s enquiry form.
                Please review the relevant provider&rsquo;s privacy information before
                submitting details through its service.
              </p>
              <p className="mt-3">
                We may disclose information to providers that help us operate our
                website, enquiry and booking services, or where disclosure is
                authorised or required by law. We do not otherwise sell personal
                information.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3">Storage, protection and retention</h2>
              <p>
                Information may be held in our email and booking records and by the
                service providers described above. We take reasonable steps to limit
                access and protect information from misuse, loss, and unauthorised
                access or disclosure. We keep it only for as long as reasonably
                needed for the purposes described or as required by law, then take
                reasonable steps to delete or de-identify it.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3">Cookies, analytics and embedded services</h2>
              <p>
                This website does not currently use a separate website analytics
                platform. Google reCAPTCHA and embedded content such as Google Maps
                and Instagram may use cookies or similar technologies and collect
                technical information when loaded. If you follow a booking or social
                link, the destination service may also use its own cookies. You can
                manage cookies through your browser settings; disabling them may
                affect some third-party features.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3">Your choices and privacy enquiries</h2>
              <p>
                You may ask us for access to, or correction of, personal information
                we hold about you, or raise a concern about how it has been handled.
                We may need to verify your identity before responding. If you are not
                satisfied with our response, you may contact the Office of the
                Australian Information Commissioner (OAIC).
              </p>
              <p className="mt-3">
                For privacy enquiries, contact the business owner, Eylem Gurr, at{" "}
                <a className="underline" href="mailto:angelstouchdayspa22@gmail.com">
                  angelstouchdayspa22@gmail.com
                </a>{" "}
                or call{" "}
                <a className="underline" href="tel:+61413356910">
                  +61 413 356 910
                </a>
                . Our service area is Avondale, NSW 2530.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
