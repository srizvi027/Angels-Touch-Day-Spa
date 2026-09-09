import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pamper Parties", href: "#pamper-parties" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-espresso pt-20 pb-10 text-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="relative h-10 w-10">
                <Image src="/images/logo.png" alt="Angel's Touch Day Spa" fill className="object-contain" />
              </div>
              <span className="font-heading text-lg">Angel&rsquo;s Touch</span>
            </div>
            <p className="font-body text-sm text-cream/60 leading-relaxed">
              A sanctuary for your body, mind &amp; soul in Avondale, NSW.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-widest2 uppercase text-cream/50 mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-body text-sm text-cream/80 hover:text-cream">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-widest2 uppercase text-cream/50 mb-5">
              Contact
            </h4>
            <ul className="space-y-3 font-body text-sm text-cream/80">
              <li><a href="tel:+61413356910" className="hover:text-cream">+61 413 356 910</a></li>
              <li><a href="mailto:angelstouchdayspa22@gmail.com" className="hover:text-cream">angelstouchdayspa22@gmail.com</a></li>
              <li>Avondale NSW 2530</li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-widest2 uppercase text-cream/50 mb-5">
              Follow &amp; Book
            </h4>
            <div className="mb-5 flex gap-3">
              <a
                href="https://www.instagram.com/angels_touchdayspa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 hover:bg-cream hover:text-espresso transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 hover:bg-cream hover:text-espresso transition-colors"
              >
                <Facebook size={16} />
              </a>
            </div>
            <a href="https://www.fresha.com/a/angels-touch-day-spa-dapto-dapto-avondale-xs1t7vts" target="_blank" rel="noopener noreferrer" className="btn-primary !bg-cream !text-espresso hover:!bg-taupe !px-5 !py-3 text-xs">
              Book Online
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-cream/15 pt-8 text-center font-body text-xs text-cream/50">
          Copyright &copy; 2026 Angel&rsquo;s Touch Day Spa. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
