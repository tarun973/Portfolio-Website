import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "FoodieSafety",
    description: "AI-powered food recall & safety platform delivering real-time alerts for U.S. grocery shoppers. Built with FastAPI, AWS Lambda, and LLM-based recipe recommendations.",
    tags: ["FastAPI", "AWS", "DynamoDB", "Docker", "LLM"],
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop",
  },
  {
    title: "Healthcare Analytics Dashboard",
    description: "Real-time healthcare analytics platform for stakeholders with role-based access, LLM-powered insights, and interactive visualizations for 500+ patient records.",
    tags: ["PostgreSQL", "Streamlit", "Python", "LLM"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
  },
  {
    title: "Smart Mirror with AI",
    description: "AI-powered smart mirror built on Raspberry Pi with face detection, voice control via Google Assistant, and integrated modules for weather, calendar, and news.",
    tags: ["Raspberry Pi", "OpenCV", "Google Assistant", "Python"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    title: "Service Box Mobile App",
    description: "Designed UI/UX for a cross-platform mobile app, improving user engagement by 30% through intuitive design and smooth animations.",
    tags: ["Figma", "UI/UX", "Android", "iOS"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium">
            Featured Projects
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group bg-card-gradient rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8">
                <h3 className="font-display text-2xl font-medium mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm font-body rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-primary font-body text-sm hover:opacity-80 transition-opacity">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                  <button className="flex items-center gap-2 text-muted-foreground font-body text-sm hover:text-primary transition-colors">
                    <Github size={16} />
                    Source
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
