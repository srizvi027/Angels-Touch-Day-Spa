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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/95 backdrop-blur-md shadow-sm py-3" : "bg-espresso/20 backdrop-blur-[2px] py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <a href="#home" className="flex items-center gap-3">
          <div className="relative h-16 w-16 md:h-20 md:w-20">
            <Image src="/images/logo.png" alt="Angel's Touch Day Spa" fill className="object-contain" priority />
          </div>
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

        <a href="https://www.fresha.com/a/angels-touch-day-spa-dapto-dapto-avondale-xs1t7vts" target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex btn-primary !px-6 !py-3 text-xs">
          Book Now
        </a>

        <button
          className={`relative z-[70] flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 lg:hidden ${
            open
              ? "border-primary bg-primary text-text rotate-90"
              : scrolled
                ? "border-espresso/20 text-espresso hover:border-espresso hover:bg-espresso/5"
                : "border-cream/40 text-cream hover:border-cream hover:bg-cream/10"
          }`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={23} strokeWidth={1.5} /> : <Menu size={23} strokeWidth={1.5} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[60] bg-espresso/50 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed right-0 top-0 z-[65] flex h-dvh w-[70vw] max-w-sm flex-col bg-cream px-7 pb-8 pt-28 shadow-2xl transition-transform duration-500 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="mb-10 h-px w-12 bg-accent" />
        <nav className="flex flex-col gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-heading text-2xl text-espresso transition-colors hover:text-cocoa"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a href="https://www.fresha.com/a/angels-touch-day-spa-dapto-dapto-avondale-xs1t7vts" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn-primary mt-auto w-full">
            Book Now
        </a>
      </div>
    </header>
  );
}
