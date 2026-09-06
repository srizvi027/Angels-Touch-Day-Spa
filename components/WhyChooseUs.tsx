"use client";

import { Reveal } from "./Reveal";
import { UserCheck, Leaf, Award, Sparkle } from "lucide-react";

const points = [
  { icon: UserCheck, title: "Personalised Care", text: "Every treatment is tailored to your individual needs." },
  { icon: Leaf, title: "Peaceful Experience", text: "A relaxing environment designed to help you unwind." },
  { icon: Award, title: "Professional Expertise", text: "Treatments delivered with care and experience." },
  { icon: Sparkle, title: "Beauty & Wellness", text: "A complete approach to feeling and looking your best." },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-cream section-pad">
      <Reveal className="mx-auto mb-16 max-w-2xl text-center">
        <p className="eyebrow mb-4">Why Choose Angel&rsquo;s Touch</p>
        <h2 className="heading-lg">Trusted, Personal, Restorative</h2>
      </Reveal>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((p, i) => (
          <Reveal
            key={p.title}
            delay={i * 0.1}
            className="rounded-2xl border border-espresso/10 bg-white/50 p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-espresso/10"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-espresso/10 text-espresso">
              <p.icon size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-lg text-espresso mb-2">{p.title}</h3>
            <p className="font-body text-sm text-espresso/70 leading-relaxed">{p.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
