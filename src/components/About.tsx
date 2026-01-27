const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-8">
              Passionate about creating impactful digital solutions
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              With over 5 years of experience in web development and design, I've had 
              the privilege of working with startups and established companies alike, 
              helping them bring their visions to life.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              I believe in the power of simplicity. My approach combines minimalist 
              aesthetics with robust functionality, creating experiences that are 
              both beautiful and performant.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring photography, hiking 
              trails, or experimenting with new design tools.
            </p>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "5+", label: "Years Experience" },
            { number: "30+", label: "Happy Clients" },
            { number: "10+", label: "Awards Won" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-display text-4xl md:text-5xl text-gradient font-medium mb-2">
                {stat.number}
              </p>
              <p className="font-body text-muted-foreground text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
