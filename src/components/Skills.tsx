import { Code, Database, Layout, Brain, Cloud, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["Python", "SQL", "C", "C++", "JavaScript", "R Language", "CSS"],
  },
  {
    icon: Brain,
    title: "ML/AI",
    skills: ["scikit-learn", "PyTorch", "TensorFlow", "Keras", "XGBoost", "Transformers", "OpenCV", "Feature Engineering", "Ensemble Learning", "LLM Integration", "Prompt Engineering", "LangChain", "LangGraph", "RAG", "MCP"],
  },
  {
    icon: Layout,
    title: "Data & Analytics",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Tableau", "Power BI", "Streamlit", "EDA", "ETL"],
  },
  {
    icon: Cloud,
    title: "Backend & Cloud",
    skills: ["FastAPI", "REST APIs", "JWT Auth", "Docker", "AWS (EC2, Lambda)", "Azure", "Kubernetes"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "Oracle", "DynamoDB"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["MS Office", "Git", "GitHub", "Jupyter", "VS Code", "PyCharm", "MATLAB", "R Studio"],
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
            Skills & Technologies
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card-gradient border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <category.icon className="text-primary" size={28} />
              </div>
              
              <h3 className="font-display text-xl font-medium mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-secondary text-muted-foreground text-sm font-body rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
