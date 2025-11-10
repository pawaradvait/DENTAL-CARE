"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-[#221d67]"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">

          {/* ✅ Logo Section */}
          <div
            className={`flex items-center gap-3 rounded-full transition-all duration-300 
              ${scrolled ? "bg-[#221d67]" : "bg-white"} 
              px-5 py-2 shadow-md`}
          >
            {/* ✅ Logo (always visible) */}
            <img
              src={logo.src}
              alt="Logo"
              className="h-12 w-auto object-contain"
            />

            {/* ✅ Text visible only on DESKTOP */}
            <h1
              className={`text-xl font-bold tracking-wide hidden lg:block ${
                scrolled ? "text-white" : "text-[#221d67]"
              }`}
            >
              HBS Dental Care
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {["home", "services", "treatments", "about", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${
                  scrolled
                    ? "text-[#221d67] hover:text-[#221d67]/70"
                    : "text-white hover:text-white/80"
                } font-medium tracking-wide transition`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden ${scrolled ? "text-[#221d67]" : "text-white"}`}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-300">
            {["home", "services", "treatments", "about", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left py-3 font-medium text-lg px-2 ${
                  scrolled
                    ? "text-[#221d67] hover:text-[#221d67]/70"
                    : "text-white hover:text-white/80"
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
