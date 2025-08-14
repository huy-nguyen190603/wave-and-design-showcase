import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Linkedin, FileText } from "lucide-react";

const HeroSection = () => {
  const { toast } = useToast();
  
  const copyEmail = () => {
    navigator.clipboard.writeText('baohuy.nguyen@stud.h-da.de');
    toast({
      description: "Email address copied to clipboard!"
    });
  };

  return (
    <section className="min-h-[70vh] flex items-start px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto w-full">
        {/* Left-aligned Content */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10 mt-6 sm:mt-8 lg:mt-10">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-inter font-bold tracking-tight leading-[1.1] text-left pb-2 sm:pb-4">
              Crafting digital experiences <br /> <span className="text-muted-foreground animate-pulse">grounded in human behaviors</span>
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button 
              className="bg-primary text-primary-foreground rounded-full px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base font-inter font-medium hover:opacity-90 transition-all duration-200 shadow-sm hover:shadow-md w-full sm:w-auto" 
              onClick={copyEmail}
            >
              Write me an email
            </Button>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-10 h-10 border-muted-foreground/20 hover:border-primary hover:bg-primary/5"
                onClick={() => window.open('https://www.linkedin.com/in/huy-bao-nguyen/', '_blank')}
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-10 h-10 border-muted-foreground/20 hover:border-primary hover:bg-primary/5"
                onClick={() => window.open('https://drive.google.com/file/d/1PGcZcun864ewZrESfM49jZ9CDqsoTxGk/view?usp=sharing', '_blank')}
              >
                <FileText className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;