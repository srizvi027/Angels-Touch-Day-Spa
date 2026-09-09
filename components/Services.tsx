"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

const services = [
  {
    title: "Massage Therapy",
    image: "/images/massage.jpg",
    text: "Experience the touch of wellness, where every knead brings you closer to tranquility.",
  },
  {
    title: "Facial Treatment",
    image: "/images/Facial.jpg",
    text: "Unlock the secret to youthful, vibrant skin with expert facials — every session a step towards luminous beauty.",
  },
  {
    title: "Body Treatment",
    image: "/images/body.jpg",
    text: "Embark on a sensory journey with body treatments that restore balance and harmony.",
  },
  {
    title: "Ultimate Rituals",
    image: "/images/ultimate.png",
    text: "Indulge in the epitome of relaxation and renewal, where every detail caters to your utmost tranquility.",
  },
  {
    title: "Hair Treatments",
    image: "/images/hair.jpg",
    text: "Unlock the secret to lustrous locks — every strand tells a story of radiance.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-cream section-pad">
      <Reveal className="mx-auto mb-20 max-w-2xl text-center">
        <p className="eyebrow mb-4">What We Offer</p>
        <h2 className="heading-lg">Treatments, With Intention</h2>
        <div className="divider-line mt-6" />
      </Reveal>

      <div className="mx-auto max-w-7xl space-y-6">
        {services.map((s, i) => {
          const reverse = i % 2 === 1;
          return (
            <Reveal key={s.title} delay={i * 0.08}>
              <div
                className={`group grid grid-cols-1 items-center gap-8 rounded-[2rem] bg-white/40 p-6 transition-all duration-500 hover:bg-white/70 md:grid-cols-2 md:gap-0 md:p-0 ${
                  reverse ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] md:[direction:ltr]">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/25" />
                  <span className="absolute right-5 top-5 z-10 font-heading text-5xl text-white/90 drop-shadow-md transition-transform duration-500 group-hover:scale-110">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="p-8 md:p-14 md:[direction:ltr]">
                  <h3 className="font-heading text-3xl md:text-4xl text-espresso mb-4">
                    {s.title}
                  </h3>
                  <p className="body-text mb-6 max-w-md">{s.text}</p>
                  <a
                    href="https://www.fresha.com/a/angels-touch-day-spa-dapto-dapto-avondale-xs1t7vts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body text-xs tracking-widest2 uppercase text-espresso border-b border-espresso/40 pb-1 transition-all group-hover:gap-4 group-hover:border-espresso"
                  >
                    Discover More <span aria-hidden>&rarr;</span>
                  </a>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
