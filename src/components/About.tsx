import { Code2, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code with best practices",
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating beautiful and intuitive user interfaces",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency",
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">{">"}</span> About Me
        </h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground mb-6">
            I'm a full-stack developer with a passion for creating elegant solutions 
            to complex problems. With expertise in modern web technologies, I focus on 
            building applications that are not only functional but also beautiful and 
            performant.
          </p>
          <p className="text-lg text-muted-foreground">
            When I'm not coding, you'll find me exploring new technologies, 
            contributing to open source, or sharing knowledge with the developer community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <item.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
