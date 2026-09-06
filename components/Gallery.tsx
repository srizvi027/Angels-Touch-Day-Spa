"use client";

import { Reveal } from "./Reveal";

const items = [
  { type: "video", src: "/videos/hero-treatment.mp4", label: "Advanced Treatments", span: "row-span-2" },
  { type: "swatch", label: "Facials", span: "" },
  { type: "video", src: "/videos/mens-facial.mp4", label: "Men's Facial", span: "" },
  { type: "swatch", label: "Body Treatments", span: "row-span-2" },
  { type: "video", src: "/videos/rest-and-restore.mp4", label: "Rest & Restore", span: "" },
  { type: "swatch", label: "Pamper Parties", span: "" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-cream section-pad">
      <Reveal className="mx-auto mb-16 max-w-2xl text-center">
        <p className="eyebrow mb-4">Recent Work</p>
        <h2 className="heading-lg">A Glimpse Inside the Sanctuary</h2>
      </Reveal>

      <div className="mx-auto grid max-w-6xl auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-3">
        {items.map((it, i) => (
          <Reveal
            key={i}
            delay={i * 0.06}
            className={`group relative overflow-hidden rounded-2xl ${it.span}`}
          >
            {it.type === "video" ? (
              <video className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" autoPlay muted loop playsInline>
                <source src={it.src} type="video/mp4" />
              </video>
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-taupe/50 via-mauve/40 to-cocoa/30 transition-transform duration-700 group-hover:scale-105" />
            )}
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-espresso/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="font-body text-xs tracking-widest2 uppercase text-cream">
                {it.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-xl text-center font-body text-sm text-espresso/50 italic">
        Add more of your treatment and studio photography here to fill out the gallery
        with real client moments.
      </p>
    </section>
  );
}
