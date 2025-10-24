import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const socials = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="text-primary">{">"}</span> Get In Touch
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          I'm always open to new opportunities and interesting projects. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="flex justify-center gap-4 flex-wrap mb-8">
          {socials.map((social, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
              asChild
            >
              <a href={social.href} aria-label={social.label}>
                <social.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>

        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
          asChild
        >
          <a href="mailto:contact@example.com">
            Send Me an Email
          </a>
        </Button>
      </div>
    </section>
  );
};
