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
    <section className="h-[70vh] flex items-center justify-center px-8 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Centered Content */}
        <div className="space-y-8 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              Crafting digital experiences grounded in human behavior
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              I'm a UX Designer with a degree in Business Psychology—a blend that helps me understand not just what users do, but <em>why</em>. I enjoy using research, and design to create intuitive solutions that feel natural to use.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button 
              className="bg-primary text-primary-foreground rounded-full px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity" 
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