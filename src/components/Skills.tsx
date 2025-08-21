const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript", level: 94 },
        { name: "HTML/CSS", level: 96 },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "GraphQL", level: 78 },
        { name: "REST APIs", level: 90 },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git/GitHub", level: 92 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Vercel", level: 88 },
        { name: "Figma", level: 85 },
        { name: "VS Code", level: 95 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expertise across modern web technologies and development tools
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="glass-card p-8 rounded-2xl hover-lift"
              >
                <h3 className="text-xl font-bold mb-6 gradient-text">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Redux", "Zustand", "Prisma", "Supabase", "Firebase", "Jest", 
                "Cypress", "Webpack", "Vite", "Sass", "Material-UI", "Chakra UI",
                "Express.js", "FastAPI", "Linux", "Nginx", "CI/CD"
              ].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 glass-card rounded-full text-sm hover-lift hover-glow cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Copyright Notice */}
          <div className="mt-12 text-center">
            <div className="glass-card p-6 rounded-2xl border-accent/20 max-w-4xl mx-auto">
              <p className="text-sm text-accent">
                © 2024 Toheeb Abiodun Mustapha. All technical implementations and code architectures 
                demonstrated in my projects are original work developed through continuous learning and hands-on experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;