import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import BackgroundLines from "@/components/BackgroundLines";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <BackgroundLines />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
