"use client";

import { Reveal } from "./Reveal";

export default function Location() {
  return (
    <section className="relative bg-taupe/20 section-pad">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <p className="eyebrow mb-4">Find Your Sanctuary</p>
        <h2 className="heading-lg">Avondale, NSW</h2>
      </Reveal>

      <Reveal delay={0.15} className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] shadow-lg shadow-espresso/10">
        <iframe
          title="Angel's Touch Day Spa location"
          src="https://www.google.com/maps?q=Avondale+NSW+2530+Australia&output=embed"
          width="100%"
          height="420"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Reveal>

      <div className="mt-8 text-center">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Avondale+NSW+2530+Australia"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
}
