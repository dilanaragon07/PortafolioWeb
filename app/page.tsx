import { ParticlesCanvas } from "@/components/effects/ParticlesCanvas";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg">
      <ParticlesCanvas />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <GitHubActivity />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
