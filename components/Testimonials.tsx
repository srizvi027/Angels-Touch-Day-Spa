"use client";

import { useEffect, useState } from "react";
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
  const [direction, setDirection] = useState(1);
  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  };
  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };
  const t = testimonials[index];

  useEffect(() => {
    const timer = window.setInterval(next, 6500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative bg-mauve/15 section-pad overflow-hidden">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <p className="eyebrow mb-4">Loved By Our Clients</p>
        <h2 className="heading-lg">Real Words, Real Rest</h2>
      </Reveal>

      <div className="relative mx-auto max-w-4xl">
        <div className="relative mx-auto min-h-[360px] max-w-3xl px-4 sm:px-10">
          <div className="absolute inset-x-10 top-5 h-[290px] rotate-3 rounded-[2rem] border border-primary/40 bg-primary/20" />
          <div className="absolute inset-x-4 top-2 h-[290px] -rotate-2 rounded-[2rem] border border-accent/20 bg-secondary/70" />

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={{
                enter: (slideDirection: number) => ({ opacity: 0, x: slideDirection * 80, rotate: slideDirection * 3 }),
                center: { opacity: 1, x: 0, rotate: 0 },
                exit: (slideDirection: number) => ({ opacity: 0, x: slideDirection * -80, rotate: slideDirection * -3 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) next();
                if (info.offset.x > 60) prev();
              }}
              className="relative z-10 flex min-h-[290px] cursor-grab flex-col items-center justify-center rounded-[2rem] border border-white/80 bg-background px-7 py-12 text-center shadow-xl shadow-espresso/10 active:cursor-grabbing sm:px-16"
            >
              <Quote className="absolute left-7 top-7 text-accent/60" size={42} strokeWidth={1} />
              <span className="absolute right-7 top-7 font-body text-xs tracking-widest2 text-espresso/40">
                0{index + 1} / 0{testimonials.length}
              </span>
              <p className="max-w-2xl font-heading text-2xl italic leading-snug text-espresso md:text-3xl">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-7 font-body text-sm tracking-widest2 uppercase text-espresso/60">
                {t.name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mx-auto mt-2 h-1 w-32 overflow-hidden rounded-full bg-espresso/10">
          <motion.div
            key={index}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 6.5, ease: "linear" }}
            className="h-full rounded-full bg-accent"
          />
        </div>

        <div className="mt-7 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/30 text-espresso transition-colors hover:bg-primary hover:text-text"
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
                  i === index ? "w-6 bg-primary" : "bg-espresso/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/30 text-espresso transition-colors hover:bg-primary hover:text-text"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
