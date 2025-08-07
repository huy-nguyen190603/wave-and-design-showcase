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
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              Portfolio
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-medium">
              Hello, I'm Bao Huy Nguyen.
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              I'm a <strong>UX Designer</strong> with a degree in Business Psychology, helping create intuitive digital experiences grounded in human behavior and research.
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
        
        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-80 h-80 relative">
            <div className="w-full h-full rounded-full overflow-hidden bg-white shadow-lg flex items-center justify-center">
              <img 
                src="/lovable-uploads/94be2d95-59df-49ff-9aef-0e7ab1b5887e.png" 
                alt="Bao Huy Nguyen - UX Designer" 
                className="w-[70%] h-[70%] object-contain" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;