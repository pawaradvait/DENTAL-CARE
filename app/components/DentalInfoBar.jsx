"use client";
import React, { useState, useEffect } from "react";
import { MapPin, Star, ExternalLink, Award } from "lucide-react";

const DentalInfoBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => setIsVisible(true), []);

  const handleGoogleMapsClick = () => {
    window.open(
      "https://maps.google.com/?q=HBS+Dental+Care+Chikhali+Pune",
      "_blank"
    );
  };

  const handleVisitNow = () => {
    window.open(
      "https://maps.google.com/?q=Shop+No.+3+NEBC+Capital+Near+Gholap+Hospital+Chikhali+Pune+411062",
      "_blank"
    );
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-12 md:py-16">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgb(99, 102, 241) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }}></div>

      <div className="relative container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Location Card */}
          <div
            className={`transform transition-all duration-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            onMouseEnter={() => setHoveredCard("location")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`group relative bg-white rounded-2xl transition-all duration-300 overflow-hidden h-full
              ${
                hoveredCard === "location"
                  ? "shadow-2xl shadow-indigo-100"
                  : "shadow-lg shadow-slate-200"
              }`}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 ${hoveredCard === "location" ? "opacity-100" : ""}`}></div>
              <div className="absolute inset-[2px] bg-white rounded-2xl"></div>

              {/* Content */}
              <div className="relative p-8 flex flex-col h-full">
                <div className="flex items-start gap-5 flex-grow">
                  {/* Icon */}
                  <div className={`flex-shrink-0 transition-all duration-300 ${hoveredCard === "location" ? "scale-110" : ""}`}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        <MapPin className="w-8 h-8 text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-3 text-slate-900">
                      Visit Our Clinic
                    </h3>
                    <div className="space-y-1.5 text-slate-600 leading-relaxed">
                      <p className="font-semibold text-slate-800">Shop No. 3, NEBC Capital</p>
                      <p>Near Gholap Hospital</p>
                      <p>Chikhali, Pune 411062</p>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={handleVisitNow}
                  className={`mt-6 w-full group/btn inline-flex items-center justify-center gap-2 
                  bg-gradient-to-r from-slate-900 to-slate-800 text-white 
                  px-6 py-3.5 rounded-xl font-semibold text-base
                  transition-all duration-300 transform hover:scale-[1.02] 
                  hover:shadow-lg hover:shadow-slate-400/50
                  ${hoveredCard === "location" ? "from-indigo-600 to-purple-600" : ""}`}
                >
                  Get Directions
                  <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>

          {/* Google Reviews Card */}
          <div
            className={`transform transition-all duration-500 delay-100 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            onMouseEnter={() => setHoveredCard("reviews")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`group relative bg-white rounded-2xl transition-all duration-300 overflow-hidden h-full
              ${
                hoveredCard === "reviews"
                  ? "shadow-2xl shadow-amber-100"
                  : "shadow-lg shadow-slate-200"
              }`}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 opacity-0 transition-opacity duration-300 ${hoveredCard === "reviews" ? "opacity-100" : ""}`}></div>
              <div className="absolute inset-[2px] bg-white rounded-2xl"></div>

              {/* Content */}
              <div className="relative p-8 flex flex-col justify-between h-full">
                <div className="flex-grow flex flex-col justify-center">
                  {/* Badge */}
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <Award className="w-6 h-6 text-amber-500" strokeWidth={2.5} />
                    <span className="text-sm font-bold text-slate-600 uppercase tracking-wide">Google Verified</span>
                  </div>

                  {/* Main Stats */}
                  <div className="text-center mb-6">
                    <div className="mb-2">
                      <span className="text-5xl md:text-6xl font-black bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                        3 Lakh+
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-slate-700 mb-4">
                      Happy Customer Reviews
                    </p>

                    {/* Stars */}
                    <div className="flex items-center justify-center gap-1.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-8 h-8 transition-all duration-300 ${
                            hoveredCard === "reviews" ? "scale-110 rotate-12" : ""
                          }`}
                          style={{
                            transitionDelay: `${i * 50}ms`,
                            fill: "#f59e0b",
                            color: "#f59e0b",
                            strokeWidth: 0
                          }}
                        />
                      ))}
                    </div>

                    <div className="inline-block px-4 py-1.5 bg-amber-50 rounded-full">
                      <p className="text-sm font-bold text-amber-600">
                        Rated 5.0 / 5.0
                      </p>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={handleGoogleMapsClick}
                  className={`w-full group/btn inline-flex items-center justify-center gap-2 
                  bg-gradient-to-r from-blue-600 to-blue-700 text-white 
                  px-6 py-3.5 rounded-xl font-semibold text-base
                  transition-all duration-300 transform hover:scale-[1.02] 
                  hover:shadow-lg hover:shadow-blue-400/50
                  ${hoveredCard === "reviews" ? "from-amber-500 to-orange-500" : ""}`}
                >
                  View Google Reviews
                  <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalInfoBar;