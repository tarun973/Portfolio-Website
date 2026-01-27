import { Code2, Palette, Smartphone, Database, Zap, Users } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, and modern CSS frameworks for responsive web applications.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, design systems, and user-centered approaches for intuitive interfaces.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native and Flutter for cross-platform mobile experiences.",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description: "Node.js, PostgreSQL, and RESTful/GraphQL API design and implementation.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimization techniques for fast load times and smooth user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Agile methodologies and clear communication for effective teamwork.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Expertise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium">
            Skills & Services
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card-gradient border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="text-primary" size={28} />
              </div>
              
              <h3 className="font-display text-xl font-medium mb-3">
                {skill.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
