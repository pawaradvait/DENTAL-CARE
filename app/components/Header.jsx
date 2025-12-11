"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import logo from "../assets/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);

    if (id === "contact") {
      router.push("/contact");
      return;
    }

    if (pathname === "/") {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/?scrollTo=${id}`);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white shadow-md py-2`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {/* Logo + Title */}
          <div
            onClick={() => scrollToSection("home")}
            className={`flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-2 lg:gap-4 transition-all duration-300 cursor-pointer ${
              scrolled ? "bg-[#221d67] scale-90" : "bg-white scale-100"
            } px-5 py-3 shadow-md rounded-full`}
          >
            {/* ✅ Logo stays visible */}
            <img
              src={logo.src}
              alt="Logo"
              className={`object-contain transition-all duration-300 ${
                scrolled ? "h-8" : "h-12"
              }`}
            />

            {/* ✅ Hide text on mobile */}
            <div className="hidden lg:flex flex-col items-start transition-all duration-300">
              <h1
                className={`font-bold tracking-wide transition-all duration-300 ${
                  scrolled
                    ? "text-white text-base md:text-lg"
                    : "text-[#221d67] text-lg md:text-xl"
                }`}
              >
                HBS Dental Care
              </h1>

              <p
                className={`font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-gray-200 text-xs"
                    : "text-gray-600 text-sm md:text-base"
                }`}
              >
                Your Dental Health is Our Priority
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {["home", "services", "about", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`font-medium tracking-wide text-[#221d67] hover:text-[#221d67]/70 transition-all cursor-pointer`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#221d67]"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-300">
            {["home", "services", "about", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-3 font-medium text-lg px-2 text-[#221d67] hover:text-[#221d67]/70 transition cursor-pointer"
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
