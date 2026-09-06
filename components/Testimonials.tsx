"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    name: "Amber Cadeau",
    text: "I have very sensitive skin and was nervous trying somewhere new, but the facial was so gentle and personalised — my skin has never felt this calm and cared for.",
  },
  {
    name: "Vika McColl",
    text: "The massage was exactly what I needed, and my skin has genuinely been glowing ever since. I already can't wait for my next appointment.",
  },
  {
    name: "Rebecca May",
    text: "We booked the in-home Couples package for Valentine's Day and it was the most relaxing, romantic afternoon — better than any restaurant booking.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[index];

  return (
    <section id="testimonials" className="relative bg-mauve/15 section-pad overflow-hidden">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <p className="eyebrow mb-4">Loved By Our Clients</p>
        <h2 className="heading-lg">Real Words, Real Rest</h2>
      </Reveal>

      <div className="relative mx-auto max-w-3xl">
        <Quote className="mx-auto mb-6 text-espresso/20" size={56} strokeWidth={1} />

        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="font-heading text-2xl md:text-3xl italic text-espresso leading-snug mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-body text-sm tracking-widest2 uppercase text-espresso/60">
                {t.name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/30 text-espresso transition-colors hover:bg-espresso hover:text-cream"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-espresso" : "bg-espresso/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/30 text-espresso transition-colors hover:bg-espresso hover:text-cream"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
