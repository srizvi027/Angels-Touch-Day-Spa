"use client";

import { Reveal } from "./Reveal";

export default function CelebrateBeautifully() {
  return (
    <section className="relative bg-taupe/20 section-pad">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-4">Group Experiences</p>
          <h2 className="heading-lg mb-6">Because Some Moments Are Better Shared.</h2>
          <p className="body-text mb-8 max-w-lg">
            From bridal celebrations to birthdays and reunions, we bring the spa to
            wherever your people are gathered. Friends, laughter, and a little luxury —
            it&rsquo;s a beautiful way to mark the occasions that matter.
          </p>
          <a href="#contact" className="btn-outline">
            Enquire About Group Bookings
          </a>
        </Reveal>
        <Reveal delay={0.15} className="grid grid-cols-2 gap-4">
          <div className="col-span-2 aspect-[16/9] rounded-2xl bg-gradient-to-br from-mauve/50 to-taupe/40" />
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-espresso/30 to-cocoa/30" />
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-taupe/50 to-mauve/40" />
        </Reveal>
      </div>
    </section>
  );
}
