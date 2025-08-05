import { Card, CardContent } from "@/components/ui/card";

const BeyondWorkSection = () => {
  const beyondProjects = [
    {
      id: 1,
      title: "organize events",
      description: "Planning events has taught me how to stay calm in chaos, adapt quickly, and always think about the person on the other end. It's UX—just without the Figma file.",
      videoUrl: "https://youtu.be/qKqNrn1Btto"
    },
    {
      id: 2,
      title: "create perfumes",
      description: "Perfumery is all about emotion, memory just like UX. Each layer of scent tells a story, and that's what I love: designing experiences people can not just see, but also feel.",
      videoUrl: "https://youtu.be/4rmHk-LHLhM"
    }
  ];

  const getEmbedUrl = (youtubeUrl: string) => {
    const videoId = youtubeUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : youtubeUrl;
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6 text-left">Beyond these projects, I also ...</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {beyondProjects.map((project) => (
            <div key={project.id} className="space-y-6">
              {/* Video Element */}
              <div className="w-full h-64 bg-muted/50 rounded-2xl overflow-hidden shadow-sm border border-border/10">
                <iframe
                  src={`${getEmbedUrl(project.videoUrl)}?autoplay=1&loop=1&mute=1&playlist=${project.videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1]}`}
                  className="w-full h-full"
                  title={project.title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
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