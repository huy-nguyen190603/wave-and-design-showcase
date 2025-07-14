import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="hero-text">
              Crafting intuitive experiences that bridge the gap between 
              <span className="italic font-light"> human needs</span> and 
              <span className="font-medium"> digital possibilities</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              I'm a UX Designer passionate about creating meaningful digital experiences 
              that solve real problems. With a focus on user-centered design and innovative 
              solutions, I help transform complex challenges into simple, elegant interfaces 
              that users love.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="cursive-button">
              View My Work
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-3">
              Get in Touch
            </Button>
          </div>
        </div>
        
        {/* Right Content - GIF/Image */}
        <div className="relative">
          <div className="gif-container">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-4xl">👋</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  GIF of me waving and smiling
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;