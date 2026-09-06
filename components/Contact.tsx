"use client";

import { Reveal } from "./Reveal";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const hours = [
  ["Monday", "9:30 AM – 5:00 PM"],
  ["Tuesday", "9:30 AM – 5:00 PM"],
  ["Wednesday", "9:30 AM – 5:00 PM"],
  ["Thursday", "9:30 AM – 7:00 PM"],
  ["Friday", "9:30 AM – 5:00 PM"],
  ["Saturday", "10:00 AM – 3:00 PM"],
  ["Sunday", "Closed"],
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-cream section-pad">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-4">Get In Touch</p>
          <h2 className="heading-lg mb-8">We&rsquo;d Love To Welcome You</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-espresso" size={20} />
              <p className="body-text">Angel&rsquo;s Touch Day Spa<br />Avondale NSW, Australia 2530</p>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-1 text-espresso" size={20} />
              <a href="tel:+61413356910" className="body-text hover:text-espresso">
                +61 413 356 910
              </a>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-1 text-espresso" size={20} />
              <a href="mailto:angelstouchdayspa22@gmail.com" className="body-text hover:text-espresso">
                angelstouchdayspa22@gmail.com
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="rounded-[2rem] bg-white/50 p-10">
          <div className="mb-6 flex items-center gap-3">
            <Clock className="text-espresso" size={20} />
            <h3 className="font-heading text-2xl text-espresso">Opening Hours</h3>
          </div>
          <ul className="space-y-3">
            {hours.map(([day, time]) => (
              <li
                key={day}
                className="flex items-center justify-between border-b border-espresso/10 pb-3 font-body text-sm text-espresso/80"
              >
                <span>{day}</span>
                <span className={time === "Closed" ? "text-espresso/40" : ""}>{time}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
