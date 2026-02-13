import { Mail, Phone, Github, Linkedin, Download } from "lucide-react";

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
          I'm always open to discussing new opportunities, research collaborations, 
          or interesting projects. Feel free to reach out!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href="mailto:tarun@vt.edu"
            className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
          >
            <Mail size={20} />
            <span className="font-body">tarun@vt.edu</span>
          </a>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
          <a
            href="tel:+15713371509"
            className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
          >
            <Phone size={20} />
            <span className="font-body">(571) 337-1509</span>
          </a>
        </div>
        
        <div className="flex flex-col items-center gap-8">
          <a
            href="/Tarun_Resume_DS.pdf"
            download="Tarun_Ajitkumar_Resume.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-body font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            <Download size={20} />
            Download Resume
          </a>
          
          <div className="flex justify-center gap-6">
            {[
              { icon: Github, label: "GitHub", href: "https://github.com/tarun973" },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/tarun-ajitkumar/" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
