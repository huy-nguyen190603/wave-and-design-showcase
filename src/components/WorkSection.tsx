import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import confetti from 'canvas-confetti';

const WorkSection = () => {
  const handleSkillClick = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b']
    });
  };

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
      link: "https://impady.com",
      canvaLink: "https://www.canva.com/design/DAGq092O1Ts/DXIcfzYoRuEsrWa6W1Nthw/edit?utm_content=DAGq092O1Ts&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
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
      link: "#",
      canvaLink: "https://www.canva.com/design/DAGm1_9HqFo/ZygNDfO1hx8-siJN3PmgKA/edit?utm_content=DAGm1_9HqFo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    {
      id: 3,
      title: "Psychological Refractory Period",
      subtitle: "Cognitive Research Study",
      type: "Empirical Research Project",
      duration: "~4 months",
      role: "Member in a team of 3",
      description: "A lab-based cognitive study exploring the Psychological Refractory Period — how people process two tasks in rapid succession using ANOVA and correlation.",
      skills: ["Research Design & Hypothesis Testing", "Experimental Setup (E-Prime)", "Quantitative Analysis (SPSS)", "Data Visualization"],
      coverImage: "/lovable-uploads/979b96d0-162d-4ca8-a3f8-09c56658df2c.png",
      link: "#",
      canvaLink: "https://www.canva.com/design/DAGths7jopE/BmKMiqVTFU8B63FBnuTlxg/edit?utm_content=DAGths7jopE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    }
  ];

  return (
    <section className="py-20 px-6 border-t border-border/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">Work</h2>
        </div>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={project.id} className={`${index > 0 ? 'border-t border-border/10 pt-16' : ''}`}>
              <Card className="project-card border-0 bg-background/50">
                <CardContent className="p-0">
                  <div className="p-8">
                    {/* Project Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <img 
                        src={
                          project.id === 1 ? "/lovable-uploads/c2fae0fe-edf1-4926-9d19-dfae57c51058.png" : 
                          project.id === 2 ? "/lovable-uploads/8cb4848f-0c98-4459-b0f7-7d8a31f53de8.png" :
                          "/lovable-uploads/0e7b5832-eb71-4c95-bacc-422dadc89565.png"
                        } 
                        alt={`${project.title} logo`}
                        className="w-12 h-12 object-contain"
                      />
                      <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                    </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Pitch Deck Preview - 16:9 Ratio - Takes 2/3 */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="relative overflow-hidden rounded-xl bg-muted border group cursor-pointer" style={{aspectRatio: '16/9'}}>
                        <a href={project.canvaLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center space-y-4">
                              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                                <FileText className="w-6 h-6 text-primary/60" />
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {project.title} Pitch Deck Preview
                              </p>
                            </div>
                          </div>
                        </a>
                        {/* Navigation buttons */}
                        <div className="absolute inset-y-0 left-0 w-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <a href={project.canvaLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-start pl-4 h-full">
                            <ChevronLeft className="w-8 h-8 text-white bg-black/50 rounded-full p-1" />
                          </a>
                        </div>
                        <div className="absolute inset-y-0 right-0 w-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <a href={project.canvaLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-end pr-4 h-full">
                            <ChevronRight className="w-8 h-8 text-white bg-black/50 rounded-full p-1" />
                          </a>
                        </div>
                      </div>
                      
                      {/* Featured In - Only for SNAPCARE */}
                      {project.id === 2 && (
                        <div>
                          <div className="flex items-center gap-1 mb-3">
                            <span className="text-xs text-primary">✨</span>
                            <span className="text-xs font-medium">Featured In:</span>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <a href="https://impact.h-da.de/en/incubation-program" target="_blank" rel="noopener noreferrer" className="border rounded-lg p-3 hover:bg-muted/20 transition-colors">
                              <h4 className="text-xs font-medium mb-1">European fireworks of ideas</h4>
                              <p className="text-xs text-muted-foreground mb-2">
                                Shared vision, combined forces, concentrated innovations: More than 100 participants experienced an...
                              </p>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <span>🔗</span>
                                <span>impact.h-da.de/en/incubation-program</span>
                              </div>
                            </a>
                            
                            <a href="https://www.fr.de/rhein-main/darmstadt/europaeische-uni-als-fernziel-der-hochschule-darmstadt-93773945.html#google_vignette" target="_blank" rel="noopener noreferrer" className="border rounded-lg p-3 hover:bg-muted/20 transition-colors">
                              <h4 className="text-xs font-medium mb-1">Europäische Uni als Fernziel</h4>
                              <p className="text-xs text-muted-foreground mb-2">
                                Die Hochschule Darmstadt ist im Verbund mit acht ausländischen Hochschulen...
                              </p>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <span>📍</span>
                                <span>fr.de/rhein-main/darmstadt</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Project Info */}
                    <div className="space-y-6">
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
                      
                      <div>
                        <p className="text-sm font-bold text-muted-foreground mb-3">Description</p>
                        <p className="text-sm leading-relaxed">{project.description}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-bold text-muted-foreground mb-3">Skills</p>
                        <div className="space-y-2">
                          {project.skills.map((skill, index) => (
                            <div key={index} className="flex items-center gap-2 cursor-pointer hover:bg-muted/20 rounded p-1 transition-colors" onClick={handleSkillClick}>
                              <input type="checkbox" readOnly className="w-3 h-3 pointer-events-none" />
                              <span className="text-sm select-none">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button className="text-sm w-full flex items-center gap-2 hover:opacity-20 transition-opacity">
                          {project.id === 1 ? (
                            <>
                              <img 
                                src="/lovable-uploads/c2fae0fe-edf1-4926-9d19-dfae57c51058.png" 
                                alt="IMPADY logo"
                                className="w-4 h-4 object-contain"
                              />
                              Open IMPADY.com
                            </>
                          ) : project.id === 2 ? (
                            <>
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.02s-1.354-3.02-3.019-3.02h-3.117v6.04z"/>
                                <path d="M8.235 0v8.981h4.588V0H8.235zM19.764 8.981H15.852c-2.476 0-4.49-2.015-4.49-4.491S13.376 0 15.852 0h3.912v8.981z"/>
                                <path d="M8.235 8.981H4.235C1.759 8.981-.255 6.966-.255 4.49S1.759 0 4.235 0h4.0v8.981z"/>
                                <path d="M8.235 24v-8.982h4.588V24H8.235z"/>
                                <path d="M8.235 15.018H4.235c-2.476 0-4.49 2.014-4.49 4.49s2.014 4.492 4.49 4.492h4.0v-8.982z"/>
                              </svg>
                              Open Prototype in Figma
                            </>
                          ) : (
                            <>
                              <FileText className="w-4 h-4" />
                              Open Research Paper (in German)
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;