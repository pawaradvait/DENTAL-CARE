import { MapPin, Phone, Mail } from "lucide-react";

 export default function ContactInfoBar() {
   return (
     <div className="bg-gray-50 py-4 border-b">
       <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
         <div className="flex items-center gap-3">
           <MapPin className="w-6 h-6 text-orange-600" />
           <div>
             <p className="font-semibold text-gray-800">Find Clinic Near You</p>
             <p className="text-sm text-gray-600">120+ Clinics</p>
           </div>
         </div>
         <div className="flex items-center gap-3">
           <Phone className="w-6 h-6 text-green-600" />
           <div>
             <p className="font-semibold text-gray-800">8500779000</p>
             <p className="text-sm text-gray-600">WhatsApp Now</p>
           </div>
         </div>
         <div className="flex items-center gap-3">
           <Phone className="w-6 h-6 text-orange-600" />
           <div>
             <p className="font-semibold text-gray-800">040 - 4142 0000</p>
             <p className="text-sm text-gray-600">Call Us Now</p>
           </div>
         </div>
         <div className="flex items-center gap-3">
           <Mail className="w-6 h-6 text-orange-600" />
           <div>
             <p className="font-semibold text-gray-800">Book Appointment</p>
             <p className="text-sm text-gray-600">online@parthadental.com</p>
           </div>
         </div>
       </div>
     </div>
   );
 }