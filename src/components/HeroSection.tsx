import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
              Crafting intuitive experiences that bridge the gap between 
              <span className="italic font-light"> human needs</span> and 
              <span className="font-medium"> digital possibilities</span>
            </h1>
            
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
              I'm a UX Designer passionate about creating meaningful digital experiences 
              that solve real problems. With a focus on user-centered design and innovative 
              solutions, I help transform complex challenges into simple, elegant interfaces 
              that users love.
            </p>
          </div>
          
          <div className="flex justify-start">
            <Button className="cursive-button">
              Write me an email
            </Button>
          </div>
        </div>
        
        {/* Right Content - GIF/Image */}
        <div className="relative">
          <div className="w-full bg-gradient-to-br from-muted to-muted/50 rounded-xl flex items-center justify-center" style={{height: "calc(100% - 2rem)"}}>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">👋</span>
              </div>
              <p className="text-xs text-muted-foreground">
                GIF of me waving and smiling
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary/10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;