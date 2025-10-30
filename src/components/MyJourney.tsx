import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

export const MyJourney = () => {
  const milestones = [
    {
      year: "2024",
      title: "Senior Full Stack Developer",
      description: "Leading development of enterprise applications with modern tech stack.",
      position: "right",
    },
    {
      year: "2022",
      title: "Full Stack Developer",
      description: "Building scalable web applications and RESTful APIs for diverse clients.",
      position: "left",
    },
    {
      year: "2020",
      title: "Frontend Developer",
      description: "Creating responsive user interfaces with React and modern CSS.",
      position: "right",
    },
    {
      year: "2019",
      title: "Started Coding Journey",
      description: "Began learning web development and fell in love with building for the web.",
      position: "left",
    },
  ];

  return (
    <section id="journey" className="py-20 px-6 bg-secondary/30">
      <Reveal>
        <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">{">"}</span> My Journey
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />
            
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-16 ${
                  milestone.position === "left" ? "md:pr-1/2" : "md:pl-1/2"
                }`}
              >
                <div
                  className={`flex items-center gap-4 ${
                    milestone.position === "left"
                      ? "md:flex-row-reverse md:text-right"
                      : "md:flex-row"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-foreground rounded-full border-4 border-background z-10" />
                  
                  <div className={`flex-1 ${milestone.position === "left" ? "md:pr-8" : "md:pl-8"}`}>
                    <Card className="bg-card border-border hover:border-foreground transition-colors">
                      <CardContent className="pt-6">
                        <div className="text-sm font-bold text-primary mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </Reveal>
    </section>
  );
};
