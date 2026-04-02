import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import HowItWorks from "@/components/HowItWorks";
import PlansSection from "@/components/PlansSection";
import ConsultorSection from "@/components/ConsultorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <HeroCarousel />
    <AboutSection />
    <HowItWorks />
    <PlansSection />
    <ConsultorSection />
    <TestimonialsSection />
    <FAQSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
