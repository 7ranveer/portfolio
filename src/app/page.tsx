import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ExperienceSection } from '@/components/sections/experience';
import { EducationSection } from '@/components/sections/education';
import { SkillsSection } from '@/components/sections/skills';
import { ProjectsSection } from '@/components/sections/projects';
import { ContactSection } from '@/components/sections/contact';
import { ElevatorPitchGeneratorSection } from '@/components/sections/elevator-pitch-generator';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection id="home" />
        <AboutSection id="about" />
        <ExperienceSection id="experience" />
        <EducationSection id="education" />
        <SkillsSection id="skills" />
        <ProjectsSection id="projects" />
        <ElevatorPitchGeneratorSection id="pitch-generator" />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
}
