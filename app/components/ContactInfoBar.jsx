import { MapPin, Mail } from "lucide-react";

export default function ContactInfoBar() {
  const mapUrl = "https://www.google.com/maps/place/HBS+Dental+Care/@18.6705908,73.8244529,21z/data=!4m12!1m5!3m4!2zMTjCsDQwJzEzLjEiTiA3M8KwNDknMjkuMCJF!8m2!3d18.6703056!4d73.8247222!3m5!1s0x3bc2b7456672eb69:0xe8228c9903ff56d6!8m2!3d18.670689!4d73.82439!16s%2Fg%2F11r_xrnxcd?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="bg-[#eef4ff] py-1.5 sm:py-2 border-b border-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">

          {/* Clinic Location */}
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:bg-blue-50 p-1.5 sm:p-2 rounded-md transition-all duration-300"
          >
            <MapPin className="w-5 h-5 text-blue-700" />
            <p className="font-medium text-gray-700 text-sm sm:text-base">
              Chikhali, Pune 411062
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919307795518"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:bg-green-50 p-1.5 sm:p-2 rounded-md transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-green-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.373 0 0 5.373 0 12c0 2.12.555 4.096 1.518 5.832L0 24l6.336-1.518A11.939 11.939 0 0012 24c6.627 0 12-5.373 12-12a11.93 11.93 0 00-3.48-8.52zM12 22a10 10 0 01-5.398-1.56l-.387-.23-3.768.902.91-3.672-.25-.387A10 10 0 1122 12a10 10 0 01-10 10zm5.182-7.182c-.26-.13-1.54-.76-1.78-.84-.24-.09-.414-.13-.587.13-.172.26-.66.84-.81 1.01-.15.17-.3.19-.56.06-.26-.13-1.1-.41-2.1-1.3-.78-.7-1.3-1.57-1.45-1.83-.15-.26-.02-.4.12-.53.12-.12.26-.31.39-.46.13-.15.17-.26.26-.43.09-.17.05-.31-.03-.43-.09-.13-.79-1.9-1.08-2.62-.28-.69-.56-.6-.78-.61-.2-.01-.43-.01-.66-.01s-.43.06-.66.31c-.23.24-.87.85-.87 2.08 0 1.23.89 2.42 1.01 2.58.12.17 1.74 2.66 4.21 3.72.59.25 1.05.4 1.41.51.59.18 1.13.16 1.56.1.48-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.1-.26-.17-.55-.3z"/>
            </svg>

            <p className="font-medium text-gray-700 text-sm sm:text-base">
              +91 93077 95518
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:hbsdentalcare@gmail.com"
            className="flex items-center gap-2 hover:bg-blue-50 p-1.5 sm:p-2 rounded-md transition-all duration-300"
          >
            <Mail className="w-5 h-5 text-blue-700" />
            <p className="font-medium text-gray-700 text-sm sm:text-base">
              hbsdentalcare@gmail.com
            </p>
          </a>

        </div>
      </div>
    </div>
  );
}
