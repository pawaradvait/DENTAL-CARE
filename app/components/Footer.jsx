"use client"; 
 
 import React from "react"; 
 import { 
   Instagram, 
   Facebook, 
   Twitter, 
   Linkedin, 
   Youtube, 
   Phone, 
   Mail, 
 } from "lucide-react"; 
 
 export default function Footer({ scrollToSection }) { 
   return ( 
     <footer className="bg-gray-900 text-white py-12"> 
       <div className="container mx-auto px-4"> 
         <div className="grid md:grid-cols-4 gap-8"> 
           {/* About */} 
           <div> 
             <h4 className="text-xl font-bold mb-4 text-orange-500"> 
               HBS Dental Care 
             </h4> 
             <p className="text-gray-400 text-sm"> 
               Jadhavwadi, Chikhali <br /> 
               Your dental health is our priority. 
             </p> 
           </div> 
 
           {/* Quick Links */} 
           <div> 
             <h4 className="text-lg font-bold mb-4">Quick Links</h4> 
             <ul className="space-y-2"> 
               <li> 
                 <button 
                   onClick={() => scrollToSection("home")} 
                   className="text-gray-400 hover:text-orange-500 transition" 
                 > 
                   Home 
                 </button> 
               </li> 
               <li> 
                 <button 
                   onClick={() => scrollToSection("treatments")} 
                   className="text-gray-400 hover:text-orange-500 transition" 
                 > 
                   Treatments 
                 </button> 
               </li> 
               <li> 
                 <button 
                   onClick={() => scrollToSection("about")} 
                   className="text-gray-400 hover:text-orange-500 transition" 
                 > 
                   About Us 
                 </button> 
               </li> 
               <li> 
                 <button 
                   onClick={() => scrollToSection("contact")} 
                   className="text-gray-400 hover:text-orange-500 transition" 
                 > 
                   Contact 
                 </button> 
               </li> 
             </ul> 
           </div> 
 
           {/* Contact Info */} 
           <div> 
             <h4 className="text-lg font-bold mb-4">Contact Info</h4> 
             <ul className="space-y-3 text-gray-400"> 
               <li className="flex items-start gap-2"> 
                 <Phone className="w-5 h-5 mt-1 text-orange-500" /> 
                 <div> 
                   <p>8500779000</p> 
                   <p>040 - 4142 0000</p> 
                 </div> 
               </li> 
 
               <li className="flex items-start gap-2"> 
                 <Mail className="w-5 h-5 mt-1 text-orange-500" /> 
                 <p>online@parthadental.com</p> 
               </li> 
             </ul> 
           </div> 
 
           {/* Socials */} 
           <div> 
             <h4 className="text-lg font-bold mb-4">Follow Us</h4> 
             <div className="flex gap-4"> 
               <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-500 cursor-pointer transition" /> 
               <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer transition" /> 
               <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition" /> 
               <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-600 cursor-pointer transition" /> 
               <Youtube className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition" /> 
             </div> 
           </div> 
         </div> 
 
         <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm"> 
           <p>&copy; 2025 HBS Dental Care. All rights reserved.</p> 
         </div> 
       </div> 
     </footer> 
   ); 
 }