"use client";

import { Reveal } from "./Reveal";

const steps = [
  { num: "01", title: "Arrive", text: "Leave the outside world behind." },
  { num: "02", title: "Unwind", text: "Relax in a peaceful environment." },
  { num: "03", title: "Restore", text: "Experience personalised treatments." },
  { num: "04", title: "Renew", text: "Leave feeling refreshed and restored." },
];

export default function Experience() {
  return (
    <section className="relative bg-espresso section-pad text-cream overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute left-1/4 top-0 h-full w-px bg-cream" />
        <div className="absolute left-2/4 top-0 h-full w-px bg-cream" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-cream" />
      </div>

      <Reveal className="relative mx-auto mb-20 max-w-2xl text-center">
        <p className="font-body text-xs tracking-widest2 uppercase text-cream/60 mb-4">
          The Angel&rsquo;s Touch Experience
        </p>
        <h2 className="font-heading text-3xl md:text-5xl text-cream leading-tight">
          A journey, not just a treatment
        </h2>
      </Reveal>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
        {steps.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.15} className="relative text-center lg:text-left">
            <span className="font-heading text-6xl text-cream/15">{s.num}</span>
            <h3 className="mt-2 font-heading text-2xl md:text-3xl text-cream">{s.title}</h3>
            <p className="mt-3 font-body text-sm text-cream/70 leading-relaxed max-w-[220px] mx-auto lg:mx-0">
              {s.text}
            </p>
            {i < steps.length - 1 && (
              <div className="mt-8 hidden h-px w-full bg-gradient-to-r from-cream/30 to-transparent lg:block" />
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
