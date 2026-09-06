"use client";

import { Reveal } from "./Reveal";
import { Instagram } from "lucide-react";

export default function InstagramShowcase() {
  return (
    <section className="relative bg-cream section-pad">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <p className="eyebrow mb-4">Follow Along</p>
        <h2 className="heading-lg mb-4">@angels_touchdayspa</h2>
      </Reveal>

      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-3 md:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Reveal
            key={i}
            delay={i * 0.05}
            className="group relative aspect-square overflow-hidden rounded-xl"
          >
            <div
              className={`h-full w-full bg-gradient-to-br transition-transform duration-500 group-hover:scale-110 ${
                i % 2 === 0 ? "from-taupe/50 to-mauve/40" : "from-mauve/40 to-cocoa/30"
              }`}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/30">
              <Instagram
                className="text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                size={22}
              />
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://www.instagram.com/angels_touchdayspa"
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
