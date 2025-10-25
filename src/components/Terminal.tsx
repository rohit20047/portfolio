import { useState, useEffect } from "react";

const Terminal = () => {
  const [lines, setLines] = useState<string[]>([]);
  const commands = [
    { cmd: "cat about.txt", output: "Full-stack developer passionate about building elegant solutions" },
    { cmd: "ls skills/", output: "React  TypeScript  Node.js  Python  Docker  AWS" },
    { cmd: "whoami", output: "developer@portfolio:~$" },
    { cmd: "echo $PASSION", output: "Coffee + Code = ..." },
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < commands.length) {
        const { cmd, output } = commands[currentLine];
        setLines((prev) => [...prev, `$ ${cmd}`, output]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="terminal" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="border-b-2 border-coffee">$ Terminal</span>
        </h2>
        
        <div className="bg-card border-2 border-coffee rounded-lg overflow-hidden shadow-lg">
          <div className="bg-coffee px-4 py-2 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-coffee-light"></div>
              <div className="w-3 h-3 rounded-full bg-coffee-dark"></div>
            </div>
            <span className="text-primary-foreground text-sm ml-4">bash</span>
          </div>
          
          <div className="p-6 font-mono text-sm min-h-[300px] bg-background/95">
            {lines.map((line, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  line.startsWith("$")
                    ? "text-coffee font-semibold"
                    : "text-muted-foreground pl-2"
                } animate-fade-in`}
              >
                {line}
              </div>
            ))}
            {lines.length > 0 && lines.length === commands.length * 2 && (
              <div className="text-coffee font-semibold animate-pulse">
                $ _
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
