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
    <section className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
        {/* Left Content - Takes 2/3 */}
        <div className="lg:col-span-2 space-y-8 text-center lg:text-left">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              Crafting digital experiences grounded in human behavior
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I'm a UX Designer with a degree in Business Psychology—a blend that helps me understand not just what users do, but <em>why</em>. I enjoy using research, and design to create intuitive solutions that feel natural to use.
            </p>
          </div>
          
          <div className="flex justify-center lg:justify-start">
            <Button 
              className="bg-primary text-primary-foreground rounded-full px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity" 
              onClick={copyEmail}
            >
              Write me an email
            </Button>
          </div>
        </div>
        
        {/* Right Content - Profile Image - Takes 1/3 */}
        <div className="flex justify-center lg:justify-center">
          <div className="w-72 h-72 relative">
            <img 
              src="/lovable-uploads/94be2d95-59df-49ff-9aef-0e7ab1b5887e.png" 
              alt="Bao Huy Nguyen - UX Designer" 
              className="w-full h-full object-contain" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;