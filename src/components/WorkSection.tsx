import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, ChevronLeft, ChevronRight, Copy } from "lucide-react";
import confetti from 'canvas-confetti';
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
const WorkSection = () => {
  const [clickedSkills, setClickedSkills] = useState<Set<string>>(new Set());
  const {
    toast
  } = useToast();
  const handleSkillClick = (skill: string, event: React.MouseEvent) => {
    const isCurrentlyClicked = clickedSkills.has(skill);

    // Only show confetti when adding (not removing)
    if (!isCurrentlyClicked) {
      const rect = (event.target as HTMLElement).getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: 6,
        spread: 10,
        origin: {
          x: x - 0.02,
          y
        },
        colors: ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b']
      });
    }
    setClickedSkills(prev => {
      const newSet = new Set(prev);
      if (newSet.has(skill)) {
        newSet.delete(skill);
      } else {
        newSet.add(skill);
      }
      return newSet;
    });
  };
  const copyEmail = () => {
    navigator.clipboard.writeText('baohuy.nguyen@stud.h-da.de');
    toast({
      description: "Email address copied to clipboard!"
    });
  };
  const projects = [{
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
  }, {
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
  }, {
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
  }];
  return <section className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-center">Selected UX Projects</h2>
        </div>
        
        <div className="space-y-8">
          {projects.map((project, index) => <div key={project.id} className="relative">
              <Card className="project-card border border-border/10 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="p-8">
                    {/* Project Header */}
                    <div className="flex items-center gap-4 mb-6">
                        <img src={project.id === 1 ? "/lovable-uploads/c2fae0fe-edf1-4926-9d19-dfae57c51058.png" : project.id === 2 ? "/lovable-uploads/8cb4848f-0c98-4459-b0f7-7d8a31f53de8.png" : "/lovable-uploads/a9e6f34f-f8d5-499f-9d5c-a9ce4c4624be.png"} alt={`${project.title} logo`} className="w-12 h-12 object-contain" />
                      <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                    </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Pitch Deck Preview - 16:9 Ratio - Takes 2/3 */}
                      <div className="lg:col-span-2 space-y-4">
                        <div className="relative overflow-hidden rounded-xl bg-muted border group" style={{
                      aspectRatio: '16/9'
                    }}>
                          <iframe src={project.canvaLink.replace('/edit', '/view').replace('utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton', 'embed')} className="w-full h-full" title={`${project.title} Pitch Deck`} allowFullScreen />
                        </div>
                      
                          {/* Featured In - Only for SNAPCARE */}
                        {project.id === 2 && <div>
                            <div className="flex items-center gap-1 mb-3">
                              <span className="text-xs text-primary">✨</span>
                              <span className="text-xs font-bold">Featured In:</span>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <a href="https://impact.h-da.de/en/incubation-program" target="_blank" rel="noopener noreferrer" className="border rounded-lg p-3 hover:opacity-90 transition-opacity">
                                <h4 className="text-xs font-medium mb-1">European fireworks of ideas</h4>
                                <p className="text-xs text-muted-foreground mb-2">
                                  Shared vision, combined forces, concentrated innovations: More than 100 participants experienced an...
                                </p>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                  <span>🔗</span>
                                  <span>impact.h-da.de/en/incubation-program</span>
                                </div>
                              </a>
                              
                              <a href="https://www.fr.de/rhein-main/darmstadt/europaeische-uni-als-fernziel-der-hochschule-darmstadt-93773945.html#google_vignette" target="_blank" rel="noopener noreferrer" className="border rounded-lg p-3 hover:opacity-90 transition-opacity">
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
                          </div>}
                    </div>
                    
                    {/* Project Info */}
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <span className="text-sm font-bold text-foreground">Type of Project:</span>
                          <span className="text-sm">{project.type}</span>
                        </div>
                        
                        <div className="flex gap-2">
                          <span className="text-sm font-bold text-foreground">Time:</span>
                          <span className="text-sm">{project.duration}</span>
                        </div>
                        
                        <div className="flex gap-2">
                          <span className="text-sm font-bold text-foreground">Role:</span>
                          <span className="text-sm">{project.role}</span>
                        </div>
                      </div>
                      
                        <div>
                          <p className="text-sm font-bold text-foreground mb-3">Description</p>
                          <p className="text-sm leading-relaxed">{project.description}</p>
                        </div>
                      
                        <div>
                          <p className="text-sm font-bold text-foreground mb-3">Skills</p>
                          <div className="space-y-2">
                            {project.skills.map((skill, index) => {
                          const skillKey = `${project.id}-${skill}`;
                          const isClicked = clickedSkills.has(skillKey);
                          return <div key={index} className={`flex items-center gap-2 cursor-pointer hover:bg-muted/20 rounded p-1 transition-colors`} onClick={e => handleSkillClick(skillKey, e)}>
                                  <input type="checkbox" checked={isClicked} readOnly className="w-3 h-3 pointer-events-none" />
                                  <span className="text-sm select-none">{skill}</span>
                                </div>;
                        })}
                          </div>
                        </div>
                      
                        {/* CTA Buttons */}
                        {project.id === 2 ? <div className="pt-4 flex justify-end">
                            <Button onClick={() => window.open('https://www.figma.com/proto/e71vytYcbY7rb760X9rvhU/Snapcare--Official-?page-id=0%3A1&node-id=439-5329&p=f&viewport=-1404%2C1316%2C0.26&t=Dt0YvonDz9FqjRZk-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=437%3A4608&show-proto-sidebar=1', '_blank')} className="text-xs flex items-center gap-2 hover:opacity-90 transition-opacity py-2 px-4 rounded-full bg-primary text-primary-foreground">
                              <img src="/lovable-uploads/5116d23a-ff42-4904-8e73-c0631215e58a.png" alt="Figma logo" className="w-3 h-3 object-contain" />
                              Open Prototype in Figma
                            </Button>
                          </div> : <div className="pt-4 flex justify-end">
                            <Button className="text-xs flex items-center gap-2 hover:opacity-90 transition-opacity py-2 px-4 rounded-full bg-primary text-primary-foreground" onClick={() => {
                        if (project.id === 1) {
                          window.open('https://impady.com/', '_blank');
                        } else {
                          // Research paper link for project 3
                          window.open('https://drive.google.com/file/d/1tgjnc7DH90MWXm68jvu2MOlsdklpf5-Z/view?usp=drive_link', '_blank');
                        }
                      }}>
                              {project.id === 1 ? <>
                                  <img src="/lovable-uploads/c2fae0fe-edf1-4926-9d19-dfae57c51058.png" alt="IMPADY logo" className="w-3 h-3 object-contain" />
                                  Open IMPADY.com
                                </> : <>
                                  <FileText className="w-3 h-3" />
                                  Open Research Paper
                                </>}
                            </Button>
                          </div>}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>)}
        </div>
      </div>
    </section>;
};
export default WorkSection;