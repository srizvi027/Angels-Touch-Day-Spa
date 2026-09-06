"use client";

import { Droplets, HeartHandshake, Sparkles, Wind } from "lucide-react";
import { Reveal } from "./Reveal";

const benefits = [
  { icon: Wind, title: "Relax", text: "Release tension and slow down." },
  { icon: Droplets, title: "Restore", text: "Give your body and skin the care they deserve." },
  { icon: HeartHandshake, title: "Rebalance", text: "Reconnect with your sense of wellbeing." },
  { icon: Sparkles, title: "Glow", text: "Leave feeling refreshed, radiant, and renewed." },
];

export default function WellnessBenefits() {
  return (
    <section className="relative bg-cream section-pad">
      <Reveal className="mx-auto mb-16 max-w-2xl text-center">
        <p className="eyebrow mb-4">More Than A Treatment</p>
        <h2 className="heading-lg">Wellness, In Every Sense</h2>
      </Reveal>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 md:grid-cols-4">
        {benefits.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.1} className="flex flex-col items-center text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-espresso/25 text-espresso transition-colors duration-500 hover:bg-espresso hover:text-cream">
              <b.icon size={26} strokeWidth={1.4} />
            </div>
            <h3 className="font-heading text-xl text-espresso mb-2">{b.title}</h3>
            <p className="font-body text-sm text-espresso/70 leading-relaxed">{b.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
