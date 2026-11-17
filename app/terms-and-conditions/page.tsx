import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/site";

const title = "Terms & Conditions";
const description =
  "Booking, cancellation, mobile appointment, payment and treatment terms for Angel's Touch Day Spa in Australia.";
const canonicalUrl = `${siteUrl}/terms-and-conditions`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms-and-conditions" },
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

export default function TermsAndConditionsPage() {
  return (
    <>
      <main className="min-h-screen bg-cream px-6 pb-20 pt-16 md:px-12">
        <article className="mx-auto max-w-4xl">
          <a href="/" className="font-heading text-lg text-espresso hover:underline">
            Angel&rsquo;s Touch Day Spa
          </a>
          <p className="eyebrow mb-4 mt-12">Before your appointment</p>
          <h1 className="heading-lg mb-8">Terms &amp; Conditions</h1>
          <p className="mb-10 font-body text-sm leading-relaxed text-espresso/65">
            Business-specific conditions that need confirmation are marked for the
            owner below. Complete these items before relying on or publishing a
            specific fee or time limit.
          </p>
          <div className="space-y-10 font-body text-base leading-relaxed text-espresso/80">
            <section>
              <h2 className="heading-md mb-3">Bookings and appointments</h2>
              <p>
                Appointments may be requested through our Fresha booking page or by
                contacting us. A booking is subject to availability and is confirmed
                when you receive confirmation from the booking platform or from us.
                When booking, select whether you need a mobile appointment or an
                in-studio treatment and check the service details before confirming.
                Contact us if the correct appointment type is not clear.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3">Cancellation and rescheduling</h2>
              <p>
                <span className="font-semibold text-espresso">24–48 Hours Notice:</span>{' '}
                Please give at least 48 hours&apos; notice for cancellations or
                rescheduling whenever possible, with an absolute minimum of 24 hours.
              </p>
              <p className="mt-3">
                <span className="font-semibold text-espresso">Late Cancellation Policy:</span>{' '}
                Cancellations made within 24 to 48 hours of the appointment will
                incur a 50% fee. Cancellations made under 24 hours before the
                appointment, or missed appointments, will incur a 100% fee.
              </p>
              <p className="mt-3">
                To cancel or reschedule, please use the Fresha booking page or
                contact us as soon as possible. This policy helps us offer open
                appointments to clients on our waitlist and continue providing
                unhurried, high-level care.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3">Late arrivals and missed appointments</h2>
              <p>
                If you expect to arrive late or cannot attend, please contact us
                promptly. A late arrival may reduce the time available for your
                treatment so that later appointments are not delayed. A missed
                appointment is subject to the 100% fee described in our late
                cancellation policy.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3">Mobile massage appointments</h2>
              <p>
                Mobile availability and travel fees depend on the requested
                location. Please provide your suburb when enquiring and confirm
                availability and any travel fee with us before completing your
                booking. No travel charge should be assumed unless it has been
                communicated and accepted.
              </p>
              <p className="mt-3 font-semibold text-espresso">
                [OWNER TO CONFIRM: mobile service areas and how travel fees are
                calculated or communicated.]
              </p>
              <p className="mt-3">
                For a mobile treatment, the client is responsible for arranging
                timely access to the agreed location, suitable parking where
                available, and a clean, private, safe space with enough room for the
                treatment setup. Please tell us in advance about access restrictions
                or other practical requirements. We may need to postpone or decline
                a treatment if the location is unsafe or unsuitable.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3">In-studio appointments</h2>
              <p>
                The studio location and arrival instructions will be provided or
                confirmed with your appointment. Please arrive at the agreed time
                and follow any instructions supplied for your visit. Contact us
                before your appointment if you need accessibility or arrival
                information.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3">Payment and deposits</h2>
              <p>
                Prices and available payment methods should be checked when
                selecting a service. Any deposit, payment timing, or other payment
                condition will be shown or communicated before you confirm. Online
                payments may be handled by the booking platform or its payment
                provider.
              </p>
              <p className="mt-3 font-semibold text-espresso">
                [OWNER TO CONFIRM: whether deposits are required, accepted payment
                methods, and any deposit or payment conditions.]
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3">Gift vouchers and promotions</h2>
              <p>
                Any expiry date, redemption instructions, exclusions, or other
                conditions for a gift voucher or promotional offer will be stated
                with that voucher or offer. Please check those details before
                purchase or booking. Nothing in these terms limits rights that
                cannot be excluded under the Australian Consumer Law.
              </p>
              <p className="mt-3 font-semibold text-espresso">
                [OWNER TO CONFIRM: voucher validity and redemption conditions, and
                any promotional offer restrictions.]
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3">Health and treatment suitability</h2>
              <p>
                Please tell us before treatment about relevant health conditions,
                injuries, allergies, sensitivities, pregnancy, or changes in your
                health. This helps us discuss whether a treatment is appropriate
                and whether it needs to be adjusted. We may recommend postponing,
                modifying, or not proceeding with a treatment where we have a
                reasonable concern about suitability. Our services are not a
                substitute for medical advice, diagnosis, or treatment.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3">Service limitations and consumer rights</h2>
              <p>
                Treatment experiences and results can vary between individuals. We
                do not guarantee a particular outcome. These terms do not exclude,
                restrict, or modify any consumer guarantee or other right that
                cannot lawfully be excluded under Australian law.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3">Contact</h2>
              <p>
                For questions about these terms or an appointment, contact the
                business owner, Eylem Gurr, at{" "}
                <a className="underline" href="mailto:angelstouchdayspa22@gmail.com">
                  angelstouchdayspa22@gmail.com
                </a>{" "}
                or{" "}
                <a className="underline" href="tel:+61413356910">
                  +61 413 356 910
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
