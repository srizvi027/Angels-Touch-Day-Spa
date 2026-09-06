"use client";

import { Reveal } from "./Reveal";

export default function FeaturedTreatment() {
  return (
    <section className="relative grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
      <div className="relative min-h-[50vh] overflow-hidden">
        <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
          <source src="/videos/mens-facial.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-espresso/20" />
        <span className="absolute bottom-8 left-8 rounded-full bg-cream/90 px-5 py-2 font-body text-xs tracking-widest2 uppercase text-espresso">
          Signature Facial
        </span>
      </div>

      <div className="flex items-center bg-taupe/25 px-8 py-20 md:px-16">
        <Reveal>
          <p className="eyebrow mb-4">Featured Treatment</p>
          <h2 className="heading-lg mb-6">Your Skin. Your Body. Your Time.</h2>
          <p className="body-text mb-8 max-w-md">
            Every treatment at Angel&rsquo;s Touch is a considered ritual — from the
            products we choose to the pace we hold. This is skin care and self care,
            woven into one unhurried experience.
          </p>
          <a href="#booking" className="btn-primary">
            Book This Treatment
          </a>
        </Reveal>
      </div>
    </section>
  );
}
