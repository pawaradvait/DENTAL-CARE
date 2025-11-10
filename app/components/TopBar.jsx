"use client";
 import { Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

 export default function TopBar() {
   return (
     <div className="bg-white py-2 px-4 text-center border-b">
       <p className="text-sm text-gray-700">
HBS DENTAL CARE .
"Your dental health is our priority."
       </p>
       <div className="flex justify-end gap-4 mt-2">
         <Instagram className="w-5 h-5 text-gray-700 cursor-pointer hover:text-pink-600 transition" />
         <Facebook className="w-5 h-5 text-gray-700 cursor-pointer hover:text-blue-600 transition" />
         <Twitter className="w-5 h-5 text-gray-700 cursor-pointer hover:text-blue-400 transition" />
         <Linkedin className="w-5 h-5 text-gray-700 cursor-pointer hover:text-blue-700 transition" />
         <Youtube className="w-5 h-5 text-gray-700 cursor-pointer hover:text-red-600 transition" />
       </div>
     </div>
   );
 }