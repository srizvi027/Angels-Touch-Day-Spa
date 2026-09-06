"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative flex h-screen min-h-[640px] w-full items-end overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/logo.png"
      >
        <source src="/videos/hero-treatment.mp4" type="video/mp4" />
      </video>

      {/* warm overlay for legibility, tuned to brand palette */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/30 to-espresso/10" />
      <div className="absolute inset-0 bg-espresso/10 mix-blend-multiply" />

      {/* floating petals */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-3 w-2.5 rounded-tl-full rounded-br-full bg-cream/70 animate-floatPetal"
            style={{ left: `${10 + i * 15}%`, animationDelay: `${i * 1.6}s`, animationDuration: `${9 + i}s` }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-24 pt-40 text-center md:px-12 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mb-5 font-body text-xs tracking-widest2 uppercase text-cream/80"
        >
          Avondale, NSW &middot; Mobile &amp; In-Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-4xl leading-[1.15] text-cream sm:text-5xl md:text-7xl"
        >
          A Sanctuary for Your
          <br className="hidden md:block" /> Body, Mind &amp; Soul.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mx-auto mt-6 max-w-xl font-body text-base text-cream/85 md:text-lg"
        >
          Escape the everyday and experience personalised treatments designed to restore
          balance, relaxation, and radiance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#booking" className="btn-primary !bg-cream !text-espresso hover:!bg-taupe">
            Book Your Experience
          </a>
          <a href="#services" className="btn-outline !border-cream !text-cream hover:!bg-cream hover:!text-espresso">
            Explore Treatments
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/70"
      >
        <div className="h-9 w-5 rounded-full border border-cream/50 p-1">
          <div className="h-1.5 w-1.5 rounded-full bg-cream/80" />
        </div>
      </motion.div>
    </section>
  );
}
