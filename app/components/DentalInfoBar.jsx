"use client";
import React, { useState } from "react";
import { MapPin, Star } from "lucide-react";

const DentalInfoBar = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const handleVisitNow = () => {
    window.open(
      "https://maps.google.com/?q=HBS+Dental+Care+Chikhali+Pune",
      "_blank"
    );
  };

  const handleViewReviews = () => {
    window.open(
      "https://maps.google.com/?q=HBS+Dental+Care+Chikhali+Pune",
      "_blank"
    );
  };

  return (
    <div className="bg-gradient-to-r from-orange-50 via-orange-50 to-orange-50 py-6">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 flex-wrap">
          
          {/* Location Section */}
          <div
            className="flex flex-1 items-center gap-4 min-w-[250px]"
            onMouseEnter={() => setHoveredSection("location")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-full border-3 border-orange-500 flex items-center justify-center bg-white">
                <MapPin className="w-7 h-7 text-orange-500" strokeWidth={2.5} />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
              <h3 className="text-lg sm:text-xl font-bold text-orange-500">
                HBS Dental Care Chikhali Pune
              </h3>
              <button
                onClick={handleVisitNow}
                className={`px-4 sm:px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 w-full sm:w-auto text-center ${
                  hoveredSection === "location"
                    ? "bg-orange-600 text-white shadow-lg scale-105"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                Visit Now
              </button>
            </div>
          </div>

      

          

        </div>
      </div>
    </div>
  );
};

export default DentalInfoBar;
