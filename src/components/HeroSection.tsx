import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
const HeroSection = () => {
  const {
    toast
  } = useToast();
  const copyEmail = () => {
    navigator.clipboard.writeText('baohuy.nguyen@stud.h-da.de');
    toast({
      description: "Email address copied to clipboard!"
    });
  };
  return <section className="h-[60vh] flex items-center justify-center px-[40px] py-[100px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center lg:justify-items-center">
        {/* Left Content */}
        <div className="space-y-8 mx-0 px-0 lg:col-span-2 pl-4">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              Crafting digital experiences grounded in human behavior
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I'm a UX Designer with a degree in Business Psychology—a blend that helps me understand not just what users do, but <em>why</em>. I enjoy using research, and design to create intuitive solutions that feel natural to use.
            </p>
          </div>
          
          <div className="flex justify-start">
            <Button className="bg-primary text-primary-foreground rounded-full px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity" onClick={copyEmail}>
              Write me an email
            </Button>
          </div>
        </div>
        
        {/* Right Content - Profile Image */}
        <div className="w-64 h-64 relative flex justify-center lg:justify-center">
          <div className="w-full h-full rounded-full overflow-hidden bg-white shadow-lg flex items-center justify-center">
            <img src="/lovable-uploads/94be2d95-59df-49ff-9aef-0e7ab1b5887e.png" alt="Bao Huy Nguyen - UX Designer" className="w-[70%] h-[70%] object-contain" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;