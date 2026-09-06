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
      <div ref={ringRef} className="relative flex h-44 w-44 items-center justify-center rounded-full border border-taupe/35 opacity-0">
        <div className="absolute inset-3 rounded-full border border-taupe/20" />
        <div ref={logoRef} className="relative h-28 w-28 overflow-hidden rounded-full opacity-0">
          <Image src="/images/logo.png" alt="Angel's Touch Day Spa" fill className="object-contain" priority />
          <div
            ref={sheenRef}
            className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-cream/70 to-transparent"
          />
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="font-body text-[11px] tracking-widest2 uppercase text-espresso/60">
          A Moment of Calm
        </p>
        <div className="mx-auto mt-4 h-px w-12 overflow-hidden bg-taupe/25">
          <div className="h-full w-1/2 animate-pulse bg-espresso/60" />
        </div>
      </div>
    </div>
  );
}
