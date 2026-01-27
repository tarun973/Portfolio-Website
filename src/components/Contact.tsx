import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
          Get In Touch
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium mb-8">
          Let's work together
        </h2>
        <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or 
          opportunities to be part of your vision. Let's create something amazing.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href="mailto:hello@alexchen.dev"
            className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
          >
            <Mail size={20} />
            <span className="font-body">hello@alexchen.dev</span>
          </a>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin size={20} />
            <span className="font-body">San Francisco, CA</span>
          </div>
        </div>
        
        <div className="flex justify-center gap-6">
          {[
            { icon: Github, label: "GitHub", href: "#" },
            { icon: Linkedin, label: "LinkedIn", href: "#" },
            { icon: Twitter, label: "Twitter", href: "#" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
