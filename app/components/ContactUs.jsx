"use client";

import React from "react";

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

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#221d67]">
          Book Your Appointment
        </h2>

        {/* CARD */}
        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-[#221d67]/10">
          <h3 className="text-2xl font-semibold text-[#221d67] text-center mb-8">
            Contact Us
          </h3>

          <form className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#221d67]">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 
                focus:outline-none focus:ring-2 focus:ring-[#221d67]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#221d67]">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your 10-digit number"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 
                focus:outline-none focus:ring-2 focus:ring-[#221d67]"
              />
            </div>

            {/* Service Dropdown */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#221d67]">
                Select Dental Service <span className="text-red-500">*</span>
              </label>

              <select
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 
                border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#221d67]"
              >
                <option value="">-- Select a Service --</option>
                {services.map((service, idx) => (
                  <option key={idx} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#221d67] hover:bg-[#1a1550] text-white font-semibold py-3 rounded-lg 
              transition-all duration-300 transform hover:scale-[1.03]"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
