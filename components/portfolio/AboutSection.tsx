import { about } from "@/content/profile";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section id="sobre" className="section" aria-labelledby="sobre-title">
      <div className="wrap">
        <SectionHeading marker="sobre.md" id="sobre-title" title="Sobre" />
        <div className="about">
          <p className="about-lead">{about.lead}</p>
          <div className="about-text">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <ol className="path" aria-label="Trajetória">
          {about.path.map((step) => (
            <li key={step.label}>
              <strong>{step.label}</strong>
              <span>{step.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
