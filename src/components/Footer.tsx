import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <Button 
          variant="ghost" 
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-base px-6 py-3"
        >
          Back to top
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;