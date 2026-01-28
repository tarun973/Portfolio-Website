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
              Building intelligent solutions through code and data
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              I'm currently pursuing my Master of Engineering in Computer Science at 
              Virginia Tech, building on my foundation from NMIMS where I studied 
              Computer Science and Business Systems.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              My experience spans UI/UX design, data science, and full-stack development. 
              I've worked on everything from building machine learning models for business 
              forecasting to designing intuitive mobile applications.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              I'm passionate about leveraging AI and data analytics to solve real-world 
              problems—from food safety platforms to healthcare dashboards that drive 
              better decision-making.
            </p>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "3.90", label: "GPA at Virginia Tech" },
            { number: "2+", label: "Years Experience" },
            { number: "5+", label: "Projects Completed" },
            { number: "20+", label: "Technologies" },
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
