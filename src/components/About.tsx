import { Code2, Terminal , Bug } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "I Code...",
      description: "I talk to machines… yeah, it’s kinda my thing.",
    },
    {
      icon: Bug,
      title: "I Debug...",
      description: "Still decoding what those red angry words on my screen really mean",
    },
    {
      icon: Terminal,
      title: "I deep Dive...",
      description: "I love this beautiful mess of the internet and talking to machines.",
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">{">"}</span> About <span className="text-coffee">Me...</span>
        </h2>
        
        <div className="max-w-5xl mx-auto mb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src="/rohit.jpg"
            alt="Rohit"
            className="w-36 h-36 md:w-48 md:h-48 object-cover rounded-lg flex-shrink-0"
          />

          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground mb-6">
              I’m 22 and working as a junior software developer. I built full-stack apps with Node.js and Next.js, and I’ve tinkered with adding AI into real projects too.
            </p>
            <p className="text-lg text-muted-foreground">
            I enjoy diving into complex codebases...they’re like big machines with tons of parts. I love breaking them down to see how everything works. Lately, I’ve been getting into Rust and low-level stuff...it’s challenging but super satisfying to learn.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <item.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-coffee">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
