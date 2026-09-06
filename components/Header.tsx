"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pamper Parties", href: "#pamper-parties" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/95 backdrop-blur-md shadow-sm py-3" : "bg-espresso/20 backdrop-blur-[2px] py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <a href="#home" className="flex items-center gap-3">
          <div className="relative h-11 w-11 md:h-12 md:w-12">
            <Image src="/images/logo.png" alt="Angel's Touch Day Spa" fill className="object-contain" priority />
          </div>
          <span className={`font-heading text-lg md:text-xl tracking-wide ${scrolled ? "text-espresso" : "text-cream"}`}>
            Angel&rsquo;s Touch
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-body text-[13px] tracking-widest2 uppercase transition-colors ${
                scrolled ? "text-espresso/80 hover:text-espresso" : "text-cream/90 hover:text-cream"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#booking" className="hidden lg:inline-flex btn-primary !px-6 !py-3 text-xs">
          Book Now
        </a>

        <button
          className={`lg:hidden ${scrolled ? "text-espresso" : "text-cream"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-4 flex flex-col gap-5 border-t border-espresso/10 bg-cream/98 px-8 py-8 shadow-md">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-heading text-2xl text-espresso"
            >
              {l.label}
            </a>
          ))}
          <a href="#booking" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
