"use client";

import { Reveal } from "./Reveal";

const items = [
  { src: "/videos/vid1.mp4", label: "Advanced Treatments" },
  { src: "/videos/vid2.mp4", label: "Facials" },
  { src: "/videos/vid3.mp4", label: "Body Treatments" },
  { src: "/videos/vid4.mp4", label: "Rest & Restore" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-cream section-pad">
      <Reveal className="mx-auto mb-16 max-w-2xl text-center">
        <p className="eyebrow mb-4">Recent Work</p>
        <h2 className="heading-lg">A Glimpse Inside the Sanctuary</h2>
      </Reveal>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal
            key={i}
            delay={i * 0.06}
            className="group relative aspect-[9/16] overflow-hidden rounded-2xl"
          >
            <video className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" autoPlay muted loop playsInline>
              <source src={it.src} type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-espresso/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="font-body text-xs tracking-widest2 uppercase text-cream">
                {it.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

    </section>
  );
}
