import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const { toast } = useToast();
  
  const copyEmail = () => {
    navigator.clipboard.writeText('baohuy.nguyen@stud.h-da.de');
    toast({
      description: "Email address copied to clipboard!"
    });
  };

  return (
    <section className="h-[70vh] flex items-start px-8 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Left-aligned Content */}
        <div className="space-y-10 mt-10">
          <div className="space-y-8 mt-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-inter font-bold tracking-tight leading-[1.1] text-left pb-4">
              Crafting digital experiences <span className="text-muted-foreground">grounded in human behavior</span>
            </h1>
          </div>
          
          <div className="flex">
            <Button 
              className="bg-primary text-primary-foreground rounded-full px-10 py-4 text-base font-inter font-medium hover:opacity-90 transition-all duration-200 shadow-sm hover:shadow-md" 
              onClick={copyEmail}
            >
              Write me an email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;