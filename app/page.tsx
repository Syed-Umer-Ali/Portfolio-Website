import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Testimonials } from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Sparkles } from "@/components/Sparkles";

export default function Home() {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--bg)" }}>
      <Sparkles />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  );
}
