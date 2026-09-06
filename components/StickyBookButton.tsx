"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

export default function StickyBookButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex items-center gap-3 border-t border-espresso/10 bg-cream/95 p-3 backdrop-blur-md md:hidden">
      <a
        href="tel:+61413356910"
        aria-label="Call Angel's Touch Day Spa"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-espresso text-espresso"
      >
        <Phone size={18} />
      </a>
      <a
        href="#booking"
        className="flex-1 rounded-full bg-espresso py-3 text-center font-body text-xs tracking-widest2 uppercase text-cream"
      >
        Book Now
      </a>
    </div>
  );
}
