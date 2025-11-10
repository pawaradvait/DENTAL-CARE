"use client";

import React from "react";
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

export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-[#f3f3ff]"
    >
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#221d67] tracking-tight">
          About HBS Dental Care
        </h2>

        {/* Main Card */}
        <div className="max-w-6xl mx-auto bg-white border border-[#221d67]/10 rounded-3xl shadow-2xl p-10 md:p-12 relative overflow-hidden">

          {/* Decorative Gradient Blob */}
          <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-[#221d67] to-[#6e67ff] blur-3xl"></div>

          <div className="relative space-y-6 text-gray-700 leading-relaxed">

            <p className="text-lg md:text-xl font-medium">
              Welcome to{" "}
              <span className="font-extrabold text-[#221d67]">
                HBS Dental Care, Jadhavwadi, Chikhali
              </span>
              — your trusted destination for complete dental solutions.
            </p>

            <p className="text-gray-700">
              From routine checkups and teeth cleaning to advanced procedures like
              implants, orthodontics, cosmetic dentistry, and smile makeovers —
              we bring modern technology and experienced hands together to give you
              the best care possible.
            </p>

            <p>
              Our clinic ensures pain-free treatments, flexible payment options,
              and personalized care for patients of all age groups — all in a warm
              and comfortable environment.
            </p>

            <p className="text-xl md:text-2xl font-semibold text-center italic text-[#221d67] py-4">
              "Your Smile, Our Priority."
            </p>

            {/* Services Section */}
            <div className="mt-14">
              <h3 className="text-3xl font-bold mb-8 text-[#221d67] text-center">
                Our Services
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 p-4 border border-[#221d67]/10 rounded-xl bg-white shadow-sm hover:shadow-lg hover:border-[#221d67]/30 transition-all duration-300"
                  >
                    <CheckCircle className="text-[#221d67] group-hover:scale-110 transition-transform" />
                    <span className="text-gray-800 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
