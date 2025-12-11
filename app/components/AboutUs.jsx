"use client";

import React from "react";

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

          </div>
        </div>
      </div>
    </section>
  );
}
