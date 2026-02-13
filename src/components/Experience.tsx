import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Research Assistant (NLP)",
    company: "Virginia Tech",
    period: "Jan 2026 – Present",
    description: "Evaluated systematic bias and reasoning patterns in LLMs (GPT-5 mini, Mistral 3 large, Gemini 3 flash, Claude Sonnet 3.5) using a uniform framework to analyze model-based decision logic. Benchmarked model performance using Zero-shot, Few-shot, and Chain-of-Thought (CoT) prompting to determine the impact of context and reasoning steps on annotation accuracy. Quantified model-human alignment by calculating Inter-Rater Agreement (IRA) scores between model-generated explanations and human-labeled gold-standard datasets.",
  },
  {
    type: "work",
    title: "UI/UX Intern",
    company: "Techmihirnaik Group",
    period: "May 2023 – Jul 2023",
    description: "Designed and developed the user interface and animations for the 'Service Box' application, optimized for both Android and iOS platforms. Created and refined user screens and interactive elements using Figma, enhancing the overall user experience and visual appeal. Improved user engagement by 30% through intuitive design and enhanced visual appeal.",
  },
  {
    type: "work",
    title: "Data Science Intern",
    company: "Solar Secure Solutions",
    period: "Dec 2022 – Feb 2023",
    description: "Built and evaluated machine learning models to solve business forecasting problems, improving decision accuracy by 25%. Performed exploratory data analysis and statistical modeling on structured datasets; created 20+ visualizations for stakeholder insights. Developed end-to-end predictive analytics pipelines using Python, leveraging scikit-learn, numpy, and pandas for data-driven decision-making.",
  },
];

const education = [
  {
    degree: "Master of Engineering",
    field: "Computer Science and Applications",
    school: "Virginia Tech",
    period: "Aug 2024 – Present",
    gpa: "3.90/4.00",
  },
  {
    degree: "Bachelor of Technology",
    field: "Computer Science and Business Systems",
    school: "NMIMS",
    period: "Aug 2020 – May 2024",
    gpa: "3.40/4.00",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Background
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium">
            Experience & Education
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="text-primary" size={20} />
              </div>
              <h3 className="font-display text-2xl font-medium">Work Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="p-6 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="font-display text-lg font-medium">{exp.title}</h4>
                    <span className="text-primary font-body text-sm">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground font-body text-sm mb-3">{exp.company}</p>
                  <p className="text-muted-foreground font-body leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <h3 className="font-display text-2xl font-medium">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="font-display text-lg font-medium">{edu.degree}</h4>
                    <span className="text-primary font-body text-sm">{edu.period}</span>
                  </div>
                  <p className="text-muted-foreground font-body text-sm mb-1">{edu.field}</p>
                  <p className="text-muted-foreground font-body text-sm mb-2">{edu.school}</p>
                  <p className="text-primary font-body text-sm font-medium">GPA: {edu.gpa}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
