import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <Button 
          variant="ghost" 
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          Back to top
          <ArrowUp className="w-4 h-4" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;