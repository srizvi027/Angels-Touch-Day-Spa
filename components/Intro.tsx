"use client";

import Image from "next/image";
import { Reveal, RevealMask } from "./Reveal";

export default function Intro() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream section-pad">
      {/* soft decorative texture */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-taupe/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-mauve/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-xl shadow-espresso/10">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/rest-and-restore.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute -bottom-8 -right-6 hidden h-40 w-40 items-center justify-center rounded-full border border-espresso/20 bg-cream/80 backdrop-blur-sm md:flex">
            <p className="text-center font-heading text-sm italic text-espresso/70 px-4">
              Rest is honored here
            </p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow mb-4">Your Moment To Pause</p>
          </Reveal>
          <RevealMask delay={0.1}>
            <h2 className="heading-lg mb-8">
              Seeking an intimate spa experience,
              <br className="hidden md:block" /> tailored to your needs?
            </h2>
          </RevealMask>
          <Reveal delay={0.2}>
            <div className="divider-line mb-8 ml-0" />
            <p className="body-text mb-5">
              Angel&rsquo;s Touch Day Spa is your haven for relaxation and rejuvenation.
              Indulge in personalised massage and facial treatments designed to restore
              balance and harmony to your body and mind.
            </p>
            <p className="body-text mb-5">
              Unwind in a tranquil ambiance as skilled therapists pamper you with their
              expertise, care, and attention to detail.
            </p>
            <p className="body-text font-heading italic text-xl text-espresso/90">
              Let Angel&rsquo;s Touch Day Spa be your sanctuary for inner peace and outer
              radiance.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
