import { Card, CardContent } from "@/components/ui/card";

const BeyondWorkSection = () => {
  const beyondProjects = [
    {
      id: 1,
      title: "organize events",
      description: "Planning events has taught me how to stay calm in chaos, adapt quickly, and always think about the person on the other end. It's UX—just without the Figma file.",
      videoUrl: "https://drive.google.com/file/d/1AEvSrFYbe6CQPaHIohowhB-3ctnUEq13/view?usp=drive_link"
    },
    {
      id: 2,
      title: "create perfumes",
      description: "Perfumery is all about emotion, memory just like UX. Each layer of scent tells a story, and that's what I love: designing experiences people can not just see, but also feel.",
      videoUrl: "https://drive.google.com/file/d/1tXtg5R8RL6d9InsP0i52HO91EXoS4Q-G/view?usp=drive_link"
    }
  ];

  const getEmbedUrl = (driveUrl: string) => {
    const fileId = driveUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : driveUrl;
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-left">Beyond these projects, I also ...</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {beyondProjects.map((project) => (
            <div key={project.id} className="space-y-6">
              {/* Video Element */}
              <div className="w-full h-64 bg-muted rounded-xl overflow-hidden">
                <iframe
                  src={`${getEmbedUrl(project.videoUrl)}&autoplay=1&loop=1&mute=1`}
                  className="w-full h-full"
                  title={project.title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
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