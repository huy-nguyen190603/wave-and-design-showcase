import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

const WorkSection = () => {
  const projects = [
    {
      id: 1,
      title: "IMPADY",
      subtitle: "My Journey as a Zero-to-One Designer",
      type: "B2B Product Design (Startup)",
      duration: "Since Feb 2024 (1.5+ years)",
      role: "Product Designer",
      description: "Helping B2B companies communicate product value clearly to drive more effective sales. IMPADY focuses on enabling teams to show ROI and value creation to their clients.",
      skills: ["User Research & Interviewing", "Qualitative Data Analysis", "Workshop Planning & Facilitation", "Sketching to High-Fidelity Design (Figma)"],
      coverImage: "/lovable-uploads/506ad88a-d966-4e29-b377-16c16405ae05.png",
      link: "https://impady.com"
    },
    {
      id: 2,
      title: "SNAPCARE",
      subtitle: "The Creation Story",
      type: "Independent UX Case Study",
      duration: "~6 months",
      role: "Solo Designer",
      description: "A mobile solution for booking doctor appointments without phone calls — designed to reduce language and scheduling barriers in healthcare access.",
      skills: ["User Research & Interviewing", "Data Analysis", "Sketching to High-Fidelity Design (Figma)", "Usability Testing"],
      coverImage: "/lovable-uploads/a6888a24-b0ad-4dd1-84c4-0121ebf7593b.png",
      link: "#"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects where design meets real-world impact
          </p>
        </div>
        
        <div className="space-y-16">
          {projects.map((project) => (
            <Card key={project.id} className="project-card border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Project Display - 2/3 */}
                  <div className="lg:col-span-2 p-8">
                    <div className="space-y-6">
                      {/* Project Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                          <FileText className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">{project.title}</span>
                      </div>
                      
                      {/* Cover Image */}
                      <div className="relative overflow-hidden rounded-xl bg-black">
                        <img 
                          src={project.coverImage} 
                          alt={`${project.title} cover`}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      
                    </div>
                  </div>
                  
                  {/* Project Info - 1/3 */}
                  <div className="bg-muted/30 p-8 space-y-6 h-full flex flex-col">
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <span className="text-sm font-bold text-muted-foreground">Type of Project:</span>
                        <span className="text-sm">{project.type}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <span className="text-sm font-bold text-muted-foreground">Time:</span>
                        <span className="text-sm">{project.duration}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <span className="text-sm font-bold text-muted-foreground">Role:</span>
                        <span className="text-sm">{project.role}</span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground mb-3">Description</p>
                      <p className="text-sm leading-relaxed">{project.description}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-3">Skills</p>
                      <div className="space-y-2">
                        {project.skills.map((skill, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <input type="checkbox" readOnly className="w-3 h-3" />
                            <span className="text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="pt-4">
                      <Button className="cursive-button text-sm w-full">
                        {project.id === 1 ? "Open IMPADY.com" : "Open Prototype in Figma"}
                      </Button>
                      
                      {/* Featured Links for SNAPCARE only */}
                      {project.id === 2 && (
                        <div className="mt-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-sm text-primary">✨</span>
                            <span className="text-sm font-medium">Featured In:</span>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="border rounded-lg p-3 hover:bg-muted/20 transition-colors">
                              <h4 className="text-sm font-medium mb-1">Europäische Uni als Fernziel</h4>
                              <p className="text-xs text-muted-foreground mb-1">
                                Die Hochschule Darmstadt ist im Verbund mit acht ausländischen Hochschulen. Sie wollen eine vereinte...
                              </p>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <span>📍</span>
                                <span>https://www.fr.de/rhein-main/darmstadt/europa...</span>
                              </div>
                            </div>
                            
                            <div className="border rounded-lg p-3 hover:bg-muted/20 transition-colors">
                              <h4 className="text-sm font-medium mb-1">Incubation Program – Impact das Wissenscha...</h4>
                              <p className="text-xs text-muted-foreground mb-1">
                                Shared vision, combined forces, concentrated innovations: More than 100 participants experienced...
                              </p>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <span>🔗</span>
                                <span>https://impact.h-da.de/en/incubation-program</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default WorkSection;