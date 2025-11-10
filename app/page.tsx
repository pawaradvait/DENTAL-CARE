
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import ContactInfoBar from "./components/ContactInfoBar";
import HeroSection from "./components/HeroSection";
import TreatmentsSection from "./components/TreatmentsSection";
import AboutSection from "./components/AboutUs";
import ContactSection from "./components/ContactUs";
import Footer from "./components/Footer";
import Services from "./components/Services";
import DentalInfoBar from "./components/DentalInfoBar";
export default function Home() {
  return (
     <div className="min-h-screen bg-white">
       <TopBar />
       <Header />
       <ContactInfoBar />
       <HeroSection />
       <DentalInfoBar />
       <TreatmentsSection />
       <Services />
       <AboutSection />
       <ContactSection />
       <Footer scrollToSection={undefined} />
     </div>
  );
}
