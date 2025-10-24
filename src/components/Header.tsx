import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a 
          href="#home" 
          className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          &lt;/dev&gt;
        </a>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6">
            {["about", "projects", "skills", "blog", "journey", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors capitalize"
              >
                {section === "journey" ? "my journey" : section}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
