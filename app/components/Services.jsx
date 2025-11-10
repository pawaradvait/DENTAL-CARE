"use client";

import { CheckCircle } from "lucide-react";

const services = [
  "Checkup / Consultation",
  "Dental X Rays",
  "Teeth Cleaning",
  "Teeth Whitening",
  "Implants",
  "Veneers and Laminate",
  "Crowns & Bridges",
  "Denture",
  "Root Canal Treatment",
  "Wisdom Tooth Removal",
  "Tooth Extraction",
  "Dental / Oral Surgery",
  "Mouth Guards / Night Guards",
  "Orthodontic Treatment",
  "Aligners",
  "Crown Lengthening Treatment",
  "Gum Depigmentation",
  "Kids Dentistry (Pediatric)",
  "Laser Dentistry",
  "Periodontal Problems",
  "Full Mouth Reconstruction",
];

export default function Services() {
  return (
    <div className="bg-white min-h-screen pt-24">

      {/* Hero Section */}
      <section className="bg-[#221d67] py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Our Dental Services
        </h1>
        <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
          Complete, personalized, and pain-free dental treatments for all age groups.
        </p>
      </section>

      {/* Services List */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#221d67] mb-10 text-center">
            What We Offer
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 p-5 border border-[#221d67]/20 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all hover:border-[#221d67]/40"
              >
                <CheckCircle className="text-[#221d67] group-hover:scale-110 transition-transform" />
                <span className="text-gray-800 font-medium text-base">
                  {service}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
