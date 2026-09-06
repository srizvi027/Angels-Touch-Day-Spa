"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import FeaturedTreatment from "@/components/FeaturedTreatment";
import WellnessBenefits from "@/components/WellnessBenefits";
import PamperParties from "@/components/PamperParties";
import CelebrateBeautifully from "@/components/CelebrateBeautifully";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import BookingCTA from "@/components/BookingCTA";
import Contact from "@/components/Contact";
import Location from "@/components/Location";
import InstagramShowcase from "@/components/InstagramShowcase";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <div style={{ opacity: loading ? 0 : 1, transition: "opacity 1s ease" }}>
        <Header />
        <main>
          <Hero />
          <Intro />
          <Experience />
          <Services />
          <FeaturedTreatment />
          <WellnessBenefits />
          <PamperParties />
          <CelebrateBeautifully />
          <Gallery />
          <Testimonials />
          <WhyChooseUs />
          <BookingCTA />
          <Contact />
          <Location />
          <InstagramShowcase />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
