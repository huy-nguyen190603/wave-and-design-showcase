import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const ChefSection = () => {
  return (
    <section className="py-12 px-6 bg-muted/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">Preference</h2>
          <p className="text-base text-muted-foreground">
            A featured recommendation from my design experiences
          </p>
        </div>
        
        <Card className="border border-border rounded-xl shadow-sm">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              {/* Testimonial Quote */}
              <blockquote className="text-lg md:text-xl leading-relaxed font-light italic max-w-2xl mx-auto">
                "The attention to detail and user-centered approach brought our vision to life in ways we never imagined. Every interaction felt intuitive, every screen purposeful. This is design that truly understands both business needs and human behavior."
              </blockquote>
              
              {/* Attribution */}
              <div className="flex items-center justify-center gap-4 pt-4">
                <div className="text-center">
                  <p className="font-medium">Jane Doe</p>
                  <p className="text-sm text-muted-foreground">Product Manager, TechCorp</p>
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