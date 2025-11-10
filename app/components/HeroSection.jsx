"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// You can replace these URLs with actual dental-care banner images
const images = [
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1920&auto=format&fit=crop", // dentist tools
  "https://images.unsplash.com/photo-1588774060809-913a0b3161f3?q=80&w=1920&auto=format&fit=crop", // dental clinic
  "https://images.unsplash.com/photo-1581594549595-35f6edc7b76d?q=80&w=1920&auto=format&fit=crop" // patient & dentist
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            alt="Dental Care Banner"
            initial={{ opacity: 0 }}
            animate={{ opacity: current === idx ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold drop-shadow-lg"
        >
          Premium Dental Care for Your Perfect Smile
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow-lg"
        >
          We provide world‑class treatments with expert dentists and advanced equipment.
        </motion.p>

        <motion.a
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          href="#book-appointment"
          className="mt-6 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-blue-100 transition"
        >
          Book Appointment
        </motion.a>
      </div>
    </section>
  );
}
