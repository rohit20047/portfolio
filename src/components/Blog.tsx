import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Blog = () => {
  const posts = [
    {
      title: "Building Scalable Web Applications",
      excerpt: "Exploring best practices for creating applications that grow with your business needs.",
      date: "2024-03-15",
      readTime: "5 min read",
      tags: ["Architecture", "Best Practices"],
    },
    {
      title: "The Power of TypeScript",
      excerpt: "How TypeScript transforms JavaScript development and catches errors before runtime.",
      date: "2024-03-10",
      readTime: "4 min read",
      tags: ["TypeScript", "Development"],
    },
    {
      title: "Modern CSS Techniques",
      excerpt: "Leveraging CSS Grid, Flexbox, and modern properties for beautiful layouts.",
      date: "2024-03-05",
      readTime: "6 min read",
      tags: ["CSS", "Design"],
    },
  ];

  return (
    <section id="blog" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">{">"}</span> Blog
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-foreground transition-all hover:shadow-lg cursor-pointer"
            >
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
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
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
          ))}
        </div>
      </div>
    </section>
  );
};
