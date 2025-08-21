import { Code, Cpu, Globe, Palette } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: Globe,
      title: "Full-Stack Development",
      description: "End-to-end development from database design to responsive user interfaces."
    },
    {
      icon: Cpu,
      title: "Modern Technologies",
      description: "Leveraging cutting-edge frameworks and tools to build next-generation applications."
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating intuitive and beautiful user experiences that delight and engage users."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate software engineer with expertise in creating innovative digital solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a dedicated software engineer with a passion for transforming ideas into reality through code. 
                  My journey in technology began with curiosity and has evolved into expertise across multiple domains.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I specialize in building robust web applications, crafting seamless user experiences, and 
                  implementing scalable backend solutions. Every project I work on is an opportunity to push 
                  boundaries and deliver exceptional results.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>

              {/* Copyright Notice */}
              <div className="glass-card p-6 rounded-2xl border-accent/20">
                <p className="text-sm text-accent font-medium">
                  © 2024 Toheeb Abiodun Mustapha. All websites and projects showcased in this portfolio 
                  are original creations designed and developed by me.
                </p>
              </div>
            </div>

            {/* Right Content - Highlights */}
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-2xl hover-lift hover-glow group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{highlight.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;