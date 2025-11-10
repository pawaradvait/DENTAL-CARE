"use client";

 export default function TreatmentsSection() {
   const treatments = [
     { name: "Invisalign Aligners", icon: "🦷" },
     { name: "Dental Implants", icon: "🦷" },
     { name: "Partha Aligners", icon: "😁" },
     { name: "Kids Dentistry", icon: "👶" },
     { name: "Smile Makeover", icon: "😊" },
     { name: "Root Canal", icon: "🦷" },
     { name: "Laser Dentistry", icon: "✨" },
     { name: "Dental Crowns", icon: "👑" },
     { name: "Dentures", icon: "🦷" },
     { name: "Dental Braces", icon: "😬" },
     { name: "Teeth Whitening", icon: "✨" },
     { name: "Tooth Decay", icon: "🦷" },
   ];

   return (
     <section id="treatments" className="py-16 bg-white">
       <div className="container mx-auto px-4">
         <h2 className="text-4xl font-bold text-center mb-12" style={{ color: "#221d67" }}>
           Treatments at Partha Dental
         </h2>

         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
           {treatments.map((t, i) => (
             <div
               key={i}
               className="group bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-orange-500 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
             >
               <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                 {t.icon}
               </div>
               <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 }