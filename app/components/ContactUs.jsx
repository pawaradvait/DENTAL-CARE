"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import emailjs from "@emailjs/browser";

const services = [
  "HBS DENTAL CARE",
  "PROSTHODONTICS",
  "DENTAL IMPLANTS",
  "FULL MOUTH REHABILITATION",
  "COSMETIC DENTISTRY",
  "ROOT CANAL TREATMENT",
  "ORAL SURGERY",
  "CROWNS AND BRIDGES",
  "PAINLESS TOOTH REMOVAL",
  "WISDOM TOOTH REMOVAL",
  "TOOTH COLOURED FILLINGS",
  "TEETH CLEANING",
  "KIDS DENTISTRY",
  "TEETH WHITENING",
  "GUM DEPIGMENTATION",
  "METAL BRACES",
  "CERAMIC BRACES",
  "SELF LIGATING BRACES",
  "Checkup / Consultation",
  "Dental X Rays",
  "Veneers and Laminate",
  "Denture",
  "Tooth Extraction",
  "Mouth Guards / Night Guards",
  "Orthodontic Treatment",
  "Aligners",
  "Crown Lengthening Treatment",
  "Laser Dentistry",
  "Periodontal Problems",
  "Full Mouth Reconstruction",
];

export default function ContactUs() {
  const searchParams = useSearchParams();

  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const serviceFromQuery = searchParams.get("service");
    if (serviceFromQuery) {
      setSelectedService(serviceFromQuery);
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !selectedService) {
      alert("Please fill all required fields!");
      return;
    }

    const now = new Date().toLocaleString();

    const msg = `
  New Appointment Request

  👤 Name: ${name}
  📞 Phone: ${phone}
  🦷 Service: ${selectedService}
  ⏱️ Time: ${now}
    `.trim();

    const serviceId = "service_4qy9dgf";
    const templateId = "template_2ttid2v";
    const publicKey = "TFRCOon0kTCRqL4Ul";

    setIsSubmitting(true);
    setStatusMessage("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          phone,
          service: selectedService,
          time: now,
          message: msg,
        },
        publicKey
      );

      setStatusMessage("Appointment booked successfully!");
    } catch (error) {
      console.error("EmailJS error", error);
      setStatusMessage("Error sending email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#221d67]">
          Book Your Appointment
        </h2>

        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-[#221d67]/10">
          <h3 className="text-2xl font-semibold text-[#221d67] text-center mb-8">
            Contact Us
          </h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#221d67]">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 
                focus:outline-none focus:ring-2 focus:ring-[#221d67]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[#221d67]">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your 10-digit number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 
                focus:outline-none focus:ring-2 focus:ring-[#221d67]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[#221d67]">
                Select Dental Service <span className="text-red-500">*</span>
              </label>

              <select
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 
                border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#221d67]"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                <option value="">-- Select a Service --</option>
                {services.map((service, idx) => (
                  <option key={idx} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#221d67] hover:bg-[#1a1550] text-white font-semibold py-3 rounded-lg 
              transition-all duration-300 transform hover:scale-[1.03] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Book Appointment"}
            </button>

            {statusMessage && (
              <p className="text-center text-sm text-gray-700">
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
