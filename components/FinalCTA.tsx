"use client";

import { Reveal } from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline>
        <source src="/videos/rest-and-restore.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-espresso/65" />

      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-3 w-2.5 rounded-tl-full rounded-br-full bg-cream/60 animate-floatPetal"
            style={{ left: `${15 + i * 18}%`, animationDelay: `${i * 1.8}s`, animationDuration: `${10 + i}s` }}
          />
        ))}
      </div>

      <Reveal className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-heading text-3xl md:text-5xl text-cream mb-5">
          You Deserve A Moment For Yourself.
        </h2>
        <p className="font-body text-cream/85 mb-10">Relax. Restore. Reconnect.</p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#booking" className="btn-primary !bg-cream !text-espresso hover:!bg-taupe">
            Book Your Appointment
          </a>
          <a href="#contact" className="btn-outline !border-cream !text-cream hover:!bg-cream hover:!text-espresso">
            Get In Touch
          </a>
        </div>
      </Reveal>
    </section>
  );
}
