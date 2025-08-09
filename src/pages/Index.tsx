import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import BeyondWorkSection from "@/components/BeyondWorkSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WorkSection />
      <BeyondWorkSection />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
