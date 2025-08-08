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
    <section className="h-[70vh] flex items-start px-8 py-20 pb-32">
      <div className="max-w-5xl mx-auto">
        {/* Left-aligned Content */}
        <div className="space-y-10">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-inter font-bold tracking-tight leading-[1.1] text-left">
              Crafting digital experiences <span className="text-muted-foreground">grounded in human behavior</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl font-inter font-normal">
              I'm a UX Designer with a degree in Business Psychology—a blend that helps me understand not just what users do, but <em>why</em>. I enjoy using research, and design to create intuitive solutions that feel natural to use.
            </p>
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