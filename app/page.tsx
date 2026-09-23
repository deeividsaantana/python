import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "./portfolio.css";

import { links, profile } from "@/content/profile";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { Hero } from "@/components/portfolio/Hero";
import { ProjectSection } from "@/components/portfolio/ProjectSection";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { SkillsSection } from "@/components/portfolio/SkillsSection";

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <div className="pf" id="topo">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <SiteHeader name={profile.name} initials={profile.initials} linkedin={links.linkedin} />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <ProjectSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <span>
            © {year} {profile.name}
          </span>
          <span>{profile.location}</span>
        </div>
      </footer>
    </div>
  );
}
