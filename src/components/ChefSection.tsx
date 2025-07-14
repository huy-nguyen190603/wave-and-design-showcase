import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const ChefSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-6">From the Chef</h2>
          <p className="text-lg text-muted-foreground">
            A featured recommendation from my culinary of design experiences
          </p>
        </div>
        
        <Card className="testimonial-card border-0 shadow-xl">
          <CardContent className="p-12">
            <div className="text-center space-y-8">
              {/* Star Rating */}
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Testimonial Quote */}
              <blockquote className="text-xl md:text-2xl leading-relaxed font-light italic max-w-3xl mx-auto">
                "The attention to detail and user-centered approach brought our vision to life in ways we never imagined. Every interaction felt intuitive, every screen purposeful. This is design that truly understands both business needs and human behavior."
              </blockquote>
              
              {/* Attribution */}
              <div className="flex items-center justify-center gap-4 pt-6">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-lg font-medium">JD</span>
                </div>
                <div className="text-left">
                  <p className="font-medium">Jane Doe</p>
                  <p className="text-sm text-muted-foreground">Product Manager, TechCorp</p>
                </div>
                
                {/* Company Logo Placeholder */}
                <div className="ml-8 flex items-center">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold">
                    TECHCORP
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ChefSection;