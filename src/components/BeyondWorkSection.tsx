import { Card, CardContent } from "@/components/ui/card";

const BeyondWorkSection = () => {
  const beyondProjects = [
    {
      id: 1,
      title: "Event Orchestration",
      subtitle: "Designing seamless human experiences",
      description: "Organizing events has taught me the art of anticipating user needs, creating intuitive flow patterns, and managing multiple touchpoints. From registration to post-event follow-up, every detail mirrors the user journey mapping process in UX design.",
    },
    {
      id: 2,
      title: "Fragrance Creation",
      subtitle: "Crafting sensory narratives",
      description: "Making perfumes involves understanding how different notes evoke emotions and memories—much like how visual and interactive elements create user experiences. The layering process in fragrance mirrors the information architecture in digital products.",
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">Beyond Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Personal passions that enhance my design perspective
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {beyondProjects.map((project) => (
            <div key={project.id} className="space-y-6">
              {/* Visual Element */}
              <div className="w-full h-64 bg-muted rounded-xl"></div>
              
              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <h4 className="text-lg font-medium text-muted-foreground">{project.subtitle}</h4>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondWorkSection;