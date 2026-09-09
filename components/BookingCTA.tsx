"use client";

import { Reveal } from "./Reveal";
import ContactFormModal from "./ContactFormModal";

export default function BookingCTA() {
  return (
    <section id="booking" className="relative bg-espresso section-pad text-center overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-full -translate-x-1/2">
        <div className="absolute left-1/4 top-10 h-64 w-64 rounded-full bg-taupe/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-10 h-72 w-72 rounded-full bg-mauve/10 blur-3xl" />
      </div>

      <Reveal className="relative mx-auto max-w-2xl">
        <p className="font-body text-xs tracking-widest2 uppercase text-cream/60 mb-4">
          Book Your Experience
        </p>
        <h2 className="font-heading text-3xl md:text-5xl text-cream mb-6">
          Your Time To Relax Starts Here.
        </h2>
        <p className="font-body text-cream/75 mb-10 max-w-lg mx-auto">
          Choose your treatment and take the first step towards complete relaxation
          and renewal.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://www.fresha.com/a/angels-touch-day-spa-dapto-dapto-avondale-xs1t7vts"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !bg-cream !text-espresso hover:!bg-taupe"
          >
            Book Now
          </a>
          <ContactFormModal
            label="Contact Us"
            className="btn-outline !border-cream !text-cream hover:!bg-cream hover:!text-espresso"
          />
        </div>
      </Reveal>
    </section>
  );
}
