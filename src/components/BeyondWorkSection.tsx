import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { useState } from "react";

const BeyondWorkSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const beyondProjects = [
    {
      id: 1,
      title: "Creative Photography",
      subtitle: "Capturing moments through a designer's lens",
      description: "Exploring visual storytelling through photography, focusing on composition, lighting, and human emotion. This personal project helps me understand visual hierarchy and user attention patterns in a different medium.",
      skills: ["Visual Composition", "Color Theory", "Storytelling", "Adobe Creative Suite"],
      gifPreview: "/lovable-uploads/a52cef44-474e-4de6-a36f-d2137a72ca63.png",
      images: [
        "/lovable-uploads/0e7b5832-eb71-4c95-bacc-422dadc89565.png"
      ]
    },
    {
      id: 2,
      title: "Design Experiments",
      subtitle: "Pushing boundaries in interface design",
      description: "A collection of experimental UI/UX concepts that explore new interaction patterns, micro-animations, and design systems. These experiments often inform my approach to client projects.",
      skills: ["Prototyping", "Animation", "Design Systems", "Creative Coding"],
      gifPreview: "/lovable-uploads/979b96d0-162d-4ca8-a3f8-09c56658df2c.png",
      images: []
    }
  ];

  const openProject = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const selectedProjectData = beyondProjects.find(p => p.id === selectedProject);

  return (
    <>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-6">Beyond Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Personal projects and creative explorations that fuel my design passion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beyondProjects.map((project) => (
              <Card key={project.id} className="project-card group cursor-pointer" onClick={() => openProject(project.id)}>
                <CardContent className="p-0">
                  {/* GIF Preview */}
                  <div className="gif-container relative overflow-hidden">
                    <img 
                      src={project.gifPreview} 
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-black ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground">{project.subtitle}</p>
                    </div>
                    
                    <Button variant="ghost" className="p-0 h-auto font-medium group">
                      Explore Project
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal/Lightbox for detailed view */}
      {selectedProject && selectedProjectData && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6" onClick={closeProject}>
          <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-8 space-y-8">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-semibold mb-2">{selectedProjectData.title}</h2>
                  <p className="text-xl text-muted-foreground">{selectedProjectData.subtitle}</p>
                </div>
                <Button variant="ghost" onClick={closeProject} className="text-2xl">
                  ×
                </Button>
              </div>
              
              {/* Description */}
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">{selectedProjectData.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-3">Skills & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProjectData.skills.map((skill, index) => (
                      <span key={index} className="bg-muted px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Project Images */}
              <div className="space-y-6">
                <div className="gif-container">
                  <img 
                    src={selectedProjectData.gifPreview} 
                    alt={`${selectedProjectData.title} main`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {selectedProjectData.images.map((image, index) => (
                  <div key={index} className="gif-container">
                    <img 
                      src={image} 
                      alt={`${selectedProjectData.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BeyondWorkSection;