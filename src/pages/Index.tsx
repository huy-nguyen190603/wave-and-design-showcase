import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import ChefSection from "@/components/ChefSection";
import BeyondWorkSection from "@/components/BeyondWorkSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WorkSection />
      <ChefSection />
      <BeyondWorkSection />
      <Footer />
    </div>
  );
};

export default Index;
