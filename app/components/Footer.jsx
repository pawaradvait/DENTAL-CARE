"use client";

import React, { useState } from "react";
import { Mail, Star } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const [hoveredReview, setHoveredReview] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id) => {
    if (id === "contact") {
      router.push("/contact");
      return;
    }

    if (pathname === "/") {
      // Already on home page, scroll directly
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home page with scrollTo query
      router.push(`/?scrollTo=${id}`);
    }
  };

  const handleViewReviews = () => {
    window.open("https://www.google.com/search?q=HBS+Dental+Care+reviews", "_blank");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919307795518", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:hbsdentalcare@gmail.com";
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">HBS Dental Care</h4>
            <p className="text-gray-400 text-sm">
              Jadhavwadi, Chikhali <br />
              Your dental health is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["home", "services", "about", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-gray-400 hover:text-orange-500 transition"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li
                className="flex items-start gap-2 cursor-pointer hover:text-green-500 transition"
                onClick={handleWhatsApp}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-green-600 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.373 0 0 5.373 0 12c0 2.12.555 4.096 1.518 5.832L0 24l6.336-1.518A11.939 11.939 0 0012 24c6.627 0 12-5.373 12-12a11.93 11.93 0 00-3.48-8.52zM12 22a10 10 0 01-5.398-1.56l-.387-.23-3.768.902.91-3.672-.25-.387A10 10 0 1122 12a10 10 0 01-10 10zm5.182-7.182c-.26-.13-1.54-.76-1.78-.84-.24-.09-.414-.13-.587.13-.172.26-.66.84-.81 1.01-.15.17-.3.19-.56.06-.26-.13-1.1-.41-2.1-1.3-.78-.7-1.3-1.57-1.45-1.83-.15-.26-.02-.4.12-.53.12-.12.26-.31.39-.46.13-.15.17-.26.26-.43.09-.17.05-.31-.03-.43-.09-.13-.79-1.9-1.08-2.62-.28-.69-.56-.6-.78-.61-.2-.01-.43-.01-.66-.01s-.43.06-.66.31c-.23.24-.87.85-.87 2.08 0 1.23.89 2.42 1.01 2.58.12.17 1.74 2.66 4.21 3.72.59.25 1.05.4 1.41.51.59.18 1.13.16 1.56.1.48-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.1-.26-.17-.55-.3z" />
                </svg>
                <p>+91 93077 95518</p>
              </li>
              <li
                className="flex items-start gap-2 cursor-pointer hover:text-orange-500 transition"
                onClick={handleEmail}
              >
                <Mail className="w-5 h-5 mt-1 text-orange-500" />
                <p>hbsdentalcare@gmail.com</p>
              </li>
            </ul>
          </div>

          {/* Google Reviews */}
          <div>
            <h4 className="text-lg font-bold mb-4">Google Reviews</h4>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-2">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-orange-500">100+</span>
                <span className="text-gray-300 font-semibold">Reviews</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-orange-500">1000+</span>
                <span className="text-gray-300 font-semibold">Customers</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-400">Rated 4.9/5</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 transition-all duration-300 ${
                      hoveredReview ? "scale-110" : ""
                    }`}
                    style={{ fill: "#f59e0b", color: "#f59e0b", strokeWidth: 0 }}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={handleViewReviews}
              onMouseEnter={() => setHoveredReview(true)}
              onMouseLeave={() => setHoveredReview(false)}
              className={`px-4 sm:px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 w-full sm:w-auto text-center ${
                hoveredReview
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              View Reviews
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 HBS Dental Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
