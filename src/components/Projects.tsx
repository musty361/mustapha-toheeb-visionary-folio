import { ExternalLink, Github, Code, Globe, Database, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern technologies for optimal performance.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      github: "#",
      live: "#",
      icon: Globe,
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "TypeScript", "Prisma", "WebSockets"],
      github: "#",
      live: "#",
      icon: Code,
      featured: true
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics platform for social media management with data visualization, automated reporting, and multi-platform integration.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Python", "FastAPI", "Chart.js"],
      github: "#",
      live: "#",
      icon: Database,
      featured: false
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, transaction history, and real-time notifications.",
      image: "/api/placeholder/600/400",
      tags: ["React Native", "Node.js", "MongoDB", "JWT"],
      github: "#",
      live: "#",
      icon: Smartphone,
      featured: false
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course creation tools, progress tracking, interactive quizzes, and video streaming capabilities.",
      image: "/api/placeholder/600/400",
      tags: ["Vue.js", "Laravel", "MySQL", "AWS S3"],
      github: "#",
      live: "#",
      icon: Code,
      featured: false
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and management system with virtual tours, mortgage calculator, and advanced search filters.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Express.js", "PostgreSQL", "Mapbox"],
      github: "#",
      live: "#",
      icon: Globe,
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions and technical expertise through real-world applications
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl overflow-hidden hover-lift hover-glow group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-primary/60" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 hover-glow"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/80"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">More Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-2xl hover-lift hover-glow group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <project.icon className="w-8 h-8 text-primary" />
                    <div className="flex gap-2">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-secondary rounded-full transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-secondary rounded-full transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-muted-foreground text-xs">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Copyright Notice */}
          <div className="mt-16">
            <div className="glass-card p-6 rounded-2xl border-accent/20 text-center">
              <p className="text-sm text-accent">
                © 2024 Toheeb Abiodun Mustapha. All projects showcased above are original creations 
                developed independently. Each application demonstrates unique problem-solving approaches 
                and technical implementations designed and built from the ground up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
