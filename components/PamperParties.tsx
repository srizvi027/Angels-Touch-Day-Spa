"use client";

import { Reveal } from "./Reveal";
import { Check } from "lucide-react";

export default function PamperParties() {
  return (
    <section id="pamper-parties" className="relative bg-espresso section-pad overflow-hidden">
      <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-mauve/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-taupe/20 blur-3xl" />

      <Reveal className="relative mx-auto mb-16 max-w-2xl text-center">
        <p className="font-body text-xs tracking-widest2 uppercase text-cream/60 mb-4">
          Celebrate Together
        </p>
        <h2 className="font-heading text-3xl md:text-5xl text-cream">Pamper Parties</h2>
      </Reveal>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Hens Party */}
        <Reveal className="rounded-[2rem] bg-cream/95 p-10 md:p-12 flex flex-col">
          <p className="eyebrow mb-3">Hens Pamper Party</p>
          <h3 className="heading-md mb-4">The Ultimate Girls&rsquo; Day In</h3>
          <p className="body-text mb-6">
            Gather the bride tribe for an afternoon of relaxation, laughter, and
            celebration — all in the comfort of your own space.
          </p>
          <ul className="mb-8 space-y-3">
            {["Full setup", "Robes / gowns", "Pamper services", "Champagne", "Gift for the bride"].map(
              (item) => (
                <li key={item} className="flex items-center gap-3 font-body text-sm text-espresso/80">
                  <Check size={16} className="text-espresso shrink-0" /> {item}
                </li>
              )
            )}
          </ul>
          <p className="mb-8 font-body text-xs text-espresso/60 italic">
            Packages can be tailor-made to suit individual needs. Travel fees may apply
            depending on location.
          </p>
          <a href="#contact" className="btn-primary mt-auto self-start">
            Enquire Now
          </a>
        </Reveal>

        {/* Kids Party */}
        <Reveal delay={0.15} className="rounded-[2rem] bg-cream/95 p-10 md:p-12 flex flex-col">
          <p className="eyebrow mb-3">Kids Pamper Party</p>
          <h3 className="heading-md mb-4">Giggles, Glamour &amp; Unforgettable Memories</h3>
          <p className="body-text mb-6">
            A magical, gentle pamper experience designed especially for little ones
            celebrating a big day.
          </p>
          <ul className="mb-8 space-y-3">
            {["Decorative setup", "Party bags", "Gowns", "Pamper services"].map((item) => (
              <li key={item} className="flex items-center gap-3 font-body text-sm text-espresso/80">
                <Check size={16} className="text-espresso shrink-0" /> {item}
              </li>
            ))}
          </ul>
          <p className="mb-2 font-body text-xs text-espresso/60">Suitable for ages 5–12.</p>
          <p className="mb-8 font-body text-xs text-espresso/60 italic">
            Travel fees may apply depending on location.
          </p>
          <a href="#contact" className="btn-primary mt-auto self-start">
            Plan A Party
          </a>
        </Reveal>
      </div>
    </section>
  );
}
