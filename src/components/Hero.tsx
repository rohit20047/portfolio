import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingText } from "./TypingText";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="text-primary text-sm md:text-base mb-4">
            {">"} Hello World
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Full Stack Developer
          </h1>
          <div className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            <TypingText 
              text="Building elegant solutions to complex problems. Passionate about clean code and great user experiences." 
              delay={30}
            />
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
