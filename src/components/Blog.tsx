import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Blog = () => {
  // NOTE: Update the `url` values to your actual Hashnode post URLs or profile.
  // Current default uses a placeholder that opens your Hashnode home — replace with exact post links if available.
  const posts = [
    {
      title: "Using Prisma with Cloudflare Workers and Hono to Connect to PostgreSQL",
      excerpt: "Exploring best practices for creating applications that grow with your business needs.",
      date: "2025-02-12",
      readTime: "3 min read",
      tags: ["Hono", "Prisma","Cloudflare Workers"],
      url: "https://mylearningindevelopment.hashnode.dev/connecting-cloudflare-workers-to-postgresql-using-prisma-accelerate-and-hono",
    },
    {
      title: "Fixing ‘ECONNREFUSED ::1’: IPv4, IPv6 & Port Binding Explained",
      excerpt: "How TypeScript transforms JavaScript development and catches errors before runtime.",
      date: "2024-01-26",
      readTime: "3 min read",
      tags: ["Port Binding", "IPv4", "IPv6","ollama"],
      url: "https://starting-my-langchain.hashnode.dev/understanding-and-resolving-the-econnrefused-1-error-a-beginners-guide-to-ipv4-ipv6-and-port-binding",
    },
    {
      title: "Coming Soon...",
      excerpt: "I’m committing to being more consistent and productive in writing blogs, sharing my ideas, and improving my skills.",
      date: "yyyy-mm-dd",
      readTime: "must read",
      tags: ["Rohit", "I_Will_Update"],
      url: "#",
    },
  ];

  return (
    <section id="blog" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">{">"}</span><span className="text-coffee">Blog</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-card border-border hover:border-foreground transition-all hover:shadow-lg cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl ">{post.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-coffee">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
