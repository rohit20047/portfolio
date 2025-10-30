import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";

export const Projects = () => {
  const projects = [
    {
      title: "Contributed to Cipher (Byterover)",
      description: "Worked on Cipher, an open-source AI memory layer for AI agents. I made a few contributions and explored how AI retains context",
      tags: ["MCP", "TypeScript", "CLI", "Next.js"],
      github: "https://github.com/rohit20047/cipher",
      demo: "https://www.byterover.dev/",
    },
    {
      title: "2D floor plan to interactive 3D model",
      description: "Collaborative tool for converting 2D floor plans into interactive 3D models using Three.js and adding custom catalog items",
      tags: ["jquery", "Three.js", "node js ", "Grunt"],
      github: "#",
      demo: "#",
    },
    {
      title: "Multi step local RAG application",
      description: "A local RAG app using Ollama and Qdrant, with Docker for easy setup. It handles document processing, embedding, and querying in steps.",
      tags: ["Ollama", "Qdrant", "docker", "Next.js"]
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <Reveal>
        <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">{">"}</span> <span className="text-coffee">My </span>Work...
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.github && project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  ) : (
                    <Button variant="outline" size="sm" className="flex-1" disabled>
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  )}

                  {project.demo && project.demo !== "#" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </a>
                  ) : (
                    <Button size="sm" className="flex-1 bg-primary/90" disabled>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </Reveal>
    </section>
  );
};
