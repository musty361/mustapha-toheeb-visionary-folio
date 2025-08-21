import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 hero-bg"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full float stagger-1"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full float stagger-3"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary/50 rounded-full float stagger-2"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-accent/50 rounded-full float stagger-4"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 slide-up">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden glass-card p-1 glow">
              <img 
                src="/lovable-uploads/be350356-a6d2-4723-a72e-ab695869c199.png" 
                alt="Toheeb Abiodun Mustapha - Software Engineer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 slide-up stagger-1">
            <span className="gradient-text">Toheeb Abiodun</span>
            <br />
            <span className="text-foreground">Mustapha</span>
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 slide-up stagger-2">
            Software Engineer & Full-Stack Developer
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 slide-up stagger-3">
            Crafting exceptional digital experiences with modern technologies. 
            Passionate about creating scalable solutions and beautiful user interfaces.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 slide-up stagger-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-3 rounded-full hover-glow font-semibold"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-secondary px-8 py-3 rounded-full hover-lift"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 slide-up stagger-5">
            <a 
              href="https://www.linkedin.com/in/mustapha-toheeb-427a46216?trk=contact-info"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover-lift hover-glow transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/musty361"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover-lift hover-glow transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="mailto:mustytoh@gmail.com"
              className="p-3 glass-card rounded-full hover-lift hover-glow transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;