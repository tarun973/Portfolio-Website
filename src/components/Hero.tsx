import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 bg-hero-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground font-body text-sm tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up">
          Computer Science Graduate Student
        </p>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-8 opacity-0 animate-fade-up animation-delay-200">
          Hello, I'm{" "}
          <span className="text-gradient">Tarun Ajitkumar</span>
        </h1>
        
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 opacity-0 animate-fade-up animation-delay-400">
          MS in Computer Science at Virginia Tech. Passionate about AI/ML, 
          full-stack development, and building data-driven solutions that make an impact.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up animation-delay-600">
          <a
            href="#projects"
            className="px-8 py-4 bg-primary text-primary-foreground font-body font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="/Tarun_Resume.pdf"
            download="Tarun_Ajitkumar_Resume.pdf"
            className="px-8 py-4 border border-border text-foreground font-body font-medium rounded-full hover:bg-secondary transition-colors inline-flex items-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
