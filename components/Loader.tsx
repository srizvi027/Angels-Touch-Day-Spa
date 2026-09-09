"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

/**
 * "A Moment of Calm" — the signature Angel's Touch loader.
 * The logo gently resolves inside a quiet, expanding ring before the page fades in.
 */
export default function Loader({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);
  const ringRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const sheenRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "sine.inOut" },
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1.1,
          ease: "power2.out",
          onComplete: () => {
            setVisible(false);
            onDone();
          },
        });
      },
    });

    tl.set(ringRef.current, { scale: 0.82, opacity: 0 })
      .fromTo(ringRef.current, { scale: 0.82, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2 })
      .fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.92, filter: "blur(5px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power2.out" },
        "-=0.7"
      )
      .fromTo(
        sheenRef.current,
        { xPercent: -150 },
        { xPercent: 150, duration: 1.6, ease: "power2.inOut" },
        "-=0.9"
      )
      .to({}, { duration: 0.9 });

    return () => {
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream overflow-hidden"
      aria-label="Loading Angel's Touch Day Spa"
    >
      <div ref={ringRef} className="relative flex h-60 w-60 items-center justify-center rounded-full border border-taupe/35 opacity-0">
        <div className="absolute inset-3 rounded-full border border-taupe/20 animate-pulse" />
        <div className="absolute inset-8 rounded-full border border-accent/25" />
        <div className="absolute inset-0 animate-spin rounded-full border border-transparent border-t-accent/80 border-r-primary/50 [animation-duration:5s]" />
        <div className="absolute -inset-3 animate-[spin_8s_linear_infinite_reverse] rounded-full border border-dashed border-primary/40" />
        <span className="absolute right-7 top-7 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_14px_rgba(191,160,106,0.8)]" />
        <span className="absolute bottom-10 left-5 h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(232,193,197,0.9)]" />
        <div ref={logoRef} className="relative h-40 w-40 overflow-hidden rounded-full bg-background/50 p-2 opacity-0 shadow-xl shadow-accent/10">
          <Image src="/images/logo.png" alt="Angel's Touch Day Spa" fill className="object-contain" priority />
          <div
            ref={sheenRef}
            className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-cream/70 to-transparent"
          />
        </div>
      </div>
      <div className="mt-10 text-center">
        <p className="font-body text-[11px] tracking-widest2 uppercase text-espresso/60">
          A Moment of Calm
        </p>
        <div className="mx-auto mt-4 h-1 w-20 overflow-hidden rounded-full bg-taupe/25">
          <div className="h-full w-1/2 animate-[loaderProgress_1.8s_ease-in-out_infinite] rounded-full bg-accent" />
        </div>
      </div>
    </div>
  );
}
