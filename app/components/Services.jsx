"use client";

import Image from "next/image";
import Link from "next/link";

// 🧩 Direct imports for local images in app/assets
import img1 from "../assets/Service_img1.jpeg";
import img2 from "../assets/Service_img2.jpeg";
import img3 from "../assets/Service_img3.jpeg";
import img4 from "../assets/Service_img4.jpeg";
import img5 from "../assets/Service_img5.jpeg";
import img6 from "../assets/Service_img6.jpeg";
import img7 from "../assets/Service_img7.jpeg";
import img8 from "../assets/Service_img8.jpeg";
import img9 from "../assets/Service_img9.jpeg";
import img10 from "../assets/Service_img10.jpeg";
import img11 from "../assets/Service_img11.jpeg";
import img12 from "../assets/Service_img12.jpeg";
import img13 from "../assets/Service_img13.jpeg";
import img14 from "../assets/Service_img14.jpeg";
import img15 from "../assets/Service_img15.jpeg";
import img16 from "../assets/Service_img16.jpeg";
import img17 from "../assets/Service_img17.jpeg";
import img18 from "../assets/Service_img18.jpeg";
import img19 from "../assets/Service_img19.jpeg";

const services = [
  {
    title: "HBS DENTAL CARE",
    description:
      "We provide advanced dental care solutions ensuring a healthy and bright smile with expert doctors and modern facilities.",
    img: img1,
  },
  {
    title: "HBS DENTAL CARE",
    description:
      "Modern and hygienic dental setup equipped with advanced instruments for comfortable and safe treatment.",
    img: img2,
  },
  {
    title: "PROSTHODONTICS",
    description:
      "Our Prosthodontists are experts in replacing teeth, placing implants, and providing high-quality crowns using modern technology.",
    img: img3,
  },
  {
    title: "DENTAL IMPLANTS",
    description:
      "Replacement of missing teeth — our Implantologists specialize in this field and have successfully placed numerous implants.",
    img: img4,
  },
  {
    title: "FULL MOUTH REHABILITATION",
    description:
      "We expertise in providing different solutions for replacing full teeth set. From removable like dentures to semi fixed and full fixed teeth using Implants.",
    img: img5,
  },
  {
    title: "COSMETIC DENTISTRY",
    description:
      "We thrive to provide beautiful smiles that will last longer and enhance your confidence. From teeth whitening to veneers, we have multiple options to make your smile - the best.",
    img: img6,
  },
  {
    title: "ROOT CANAL TREATMENT",
    description:
      "Root canal treatment removes infected pulp from a tooth, cleans, shapes, and seals the root canals, preventing further infection and preserving functionality.",
    img: img7,
  },
  {
    title: "ORAL SURGERY",
    description:
      "Our Oral Surgeons have performed so many Surgeries related to - Wisdom tooth removal, Dental cyst removal, Cancer treatment, Dental implants, Gum procedures, JAW deformity correction and Jaw fracture management, etc.",
    img: img8,
  },
  {
    title: "CROWNS AND BRIDGES",
    description:
      "Crowns and bridges are dental restorations. Crowns cover damaged teeth, and bridges replace missing teeth by anchoring artificial teeth to neighboring teeth or implants.",
    img: img9,
  },
  {
    title: "PAINLESS TOOTH REMOVAL",
    description:
      "Painless tooth removal involves using local anesthesia to numb the area, ensuring a pain-free experience during the tooth extraction procedure.",
    img: img10,
  },
  {
    title: "WISDOM TOOTH REMOVAL",
    description:
      "Wisdom tooth removal is a dental procedure to extract impacted or problematic third molars, often done under local or general anesthesia to prevent pain and complications.",
    img: img11,
  },
  {
    title: "TOOTH COLOURED FILLINGS",
    description:
      "We specialise in pain management caused due to deep cavities. Root canals and cavity fillings are done with highest grade equipments and materials.",
    img: img12,
  },
  {
    title: "TEETH CLEANING",
    description:
      "We provide services for scaling(cleaning) of your teeth with proper management of stains and deposits.",
    img: img13,
  },
  {
    title: "KIDS DENTISTRY",
    description:
      "We provide dental care of kids using pain free techniques and utmost care.",
    img: img14,
  },
  {
    title: "TEETH WHITENING",
    description:
      "Teeth whitening involves using bleaching agents to lighten the color of teeth, helping to remove stains and discoloration for a brighter, more attractive smile.",
    img: img15,
  },
  {
    title: "GUM DEPIGMENTATION",
    description:
      "Gum depigmentation is a cosmetic dental procedure that removes dark patches or spots on the gums, improving the appearance of the smile.",
    img: img16,
  },
  {
    title: "METAL BRACES",
    description:
      "Metal braces are orthodontic devices made of stainless steel, attached to teeth to straighten malaligned teeth using brackets, wires, and rubber bands.",
    img: img17,
  },
  {
    title: "CERAMIC BRACES",
    description:
      "Ceramic braces are orthodontic appliances similar to metal braces but use tooth-colored or clear materials for a less noticeable appearance.",
    img: img18,
  },
  {
    title: "SELF LIGATING BRACES",
    description:
      "Self Ligating Braces use a built in mechanism to hold the archwire in place without use of rubber bands. These braces provide great comfort, no ulcers, no bad breath and faster treatment.",
    img: img19,
  },
];

export default function Services() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Hero Section */}
      <section
        id="services"
        className="pt-20 pb-16 px-6 flex flex-col items-center justify-center text-center"
      >
        <div className="inline-block mb-4 px-4 py-1.5 bg-[#221d67]/5 rounded-full">
          <span className="text-[#221d67] text-sm font-semibold tracking-wide uppercase">
            Our Services
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#221d67] mb-6 tracking-tight leading-tight">
          Comprehensive Dental Care
        </h2>

        <p className="text-base md:text-lg text-gray-600 max-w-2xl mb-8 leading-relaxed">
          Experience world-class dental treatments with our team of expert specialists using state-of-the-art technology
        </p>

        <div className="w-20 h-1 bg-gradient-to-r from-[#ffb347] via-[#ffcc33] to-[#ffb347] rounded-full"></div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#221d67]/20 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-[#221d67] font-bold text-lg mb-3 leading-tight tracking-tight group-hover:text-[#3c3596] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                    {service.description}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href={{
                      pathname: "/contact",
                      query: { service: service.title },
                      hash: "contact-us",
                    }}
                    className="group/btn inline-flex items-center justify-center w-full bg-[#221d67] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-[#3c3596] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <span>Book Consultation</span>
                    <svg
                      className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}