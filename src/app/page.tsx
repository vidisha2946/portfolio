import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Education from "@/components/sections/Education";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Achievements />
      <Education />
    </main>
  );
}
