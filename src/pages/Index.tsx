import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import Terminal from "@/components/Terminal";
import { Blog } from "@/components/Blog";
import { MyJourney } from "@/components/MyJourney";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Terminal />
      <Blog />
      <MyJourney />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
