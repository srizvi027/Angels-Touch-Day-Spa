"use client";

import { Reveal } from "./Reveal";

export default function InstagramShowcase() {
  return (
    <section className="relative bg-cream section-pad">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <p className="eyebrow mb-4">Follow Along</p>
        <h2 className="heading-lg mb-4">@angels__touchdayspa</h2>
      </Reveal>

      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white/40 shadow-sm">
        <iframe
          src="https://www.instagram.com/angels__touchdayspa/embed"
          title="Recent posts from Angels Touch Day Spa on Instagram"
          className="h-[560px] w-full border-0"
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
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
