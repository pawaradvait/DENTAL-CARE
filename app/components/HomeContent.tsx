"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ContactInfoBar from "./ContactInfoBar";
import HeroSection from "./HeroSection";
import DentalInfoBar from "./DentalInfoBar";
import Services from "./Services";
import AboutSection from "./AboutUs";
import Footer from "./Footer";
import Header from "./Header";

export default function HomeContent() {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scrollTo");

  useEffect(() => {
    if (scrollTo) {
      const section = document.getElementById(scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scrollTo]);

  return (
    <div className="min-h-screen bg-white">
      <ContactInfoBar />
      <Header />
      <HeroSection />
     
      <Services />
      <AboutSection />
      <Footer />
    </div>
  );
}