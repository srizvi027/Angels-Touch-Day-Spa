"use client";

import { Reveal } from "./Reveal";
import { Instagram } from "lucide-react";

export default function InstagramShowcase() {
  return (
    <section className="relative bg-cream section-pad">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <p className="eyebrow mb-4">Follow Along</p>
        <h2 className="heading-lg mb-4">@angels__touchdayspa</h2>
      </Reveal>

      <div className="mx-auto flex min-h-[280px] max-w-5xl flex-col items-center justify-center rounded-2xl bg-white/40 px-6 py-12 text-center shadow-sm md:min-h-[360px]">
        <Instagram size={32} strokeWidth={1.5} className="mb-5 text-espresso" aria-hidden="true" />
        <p className="font-heading text-2xl text-espresso">A little more of Angel&rsquo;s Touch</p>
        <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-espresso/70">
          Visit us on Instagram for treatment highlights and updates from the spa.
        </p>
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://www.instagram.com/angels__touchdayspa/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          Follow Us
        </a>
      </div>
    </section>
  );
}
