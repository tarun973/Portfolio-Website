import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Minimal E-Commerce",
    description: "A sleek online store with seamless checkout experience and modern design language.",
    tags: ["React", "TypeScript", "Stripe"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "Finance Dashboard",
    description: "Real-time analytics platform with intuitive data visualization and dark mode.",
    tags: ["Next.js", "D3.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "Travel Journal",
    description: "A personal travel diary app with location-based stories and photo galleries.",
    tags: ["React Native", "Firebase", "Maps API"],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
  },
  {
    title: "AI Writing Assistant",
    description: "Smart content generation tool powered by machine learning algorithms.",
    tags: ["Python", "OpenAI", "FastAPI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Selected Work
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
