import { Card, CardContent } from "@/components/ui/card";

const BeyondWorkSection = () => {
  const beyondProjects = [
    {
      id: 1,
      title: "organize events",
      description: "Planning events has taught me how to stay calm in chaos, adapt quickly, and always think about the person on the other end.",
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
    <section className="py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-center">Beyond these projects, I also ...</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-border/10 shadow-sm">
          {beyondProjects.map((project) => (
            <div key={project.id} className="space-y-6">
              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-center">{project.title}</h3>
                
                {/* Video Element */}
                <div className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-border/10 max-w-md mx-auto" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    src={`${getEmbedUrl(project.videoUrl)}?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playlist=${project.videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1]}&playsinline=1&iv_load_policy=3&fs=0&disablekb=1&start=0&end=0`}
                    className="w-full h-full"
                    title={project.title}
                    allow="autoplay; encrypted-media"
                    style={{ pointerEvents: 'none' }}
                  />
                </div>
                
                <div className="max-w-md mx-auto">
                  <p className="text-sm leading-relaxed text-muted-foreground text-center">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondWorkSection;