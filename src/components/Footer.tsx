import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Let's create something amazing together</h3>
              <p className="text-muted-foreground">
                Always open to discussing new opportunities, interesting projects, 
                or just chatting about design and user experience.
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button className="cursive-button">
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
              
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="text-center md:text-right space-y-4">
            <Button 
              variant="ghost" 
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              Back to top
              <ArrowUp className="w-4 h-4" />
            </Button>
            
            <div className="text-sm text-muted-foreground space-y-1">
              <p>© 2024 UX Design Portfolio</p>
              <p>Designed and built with attention to detail</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;