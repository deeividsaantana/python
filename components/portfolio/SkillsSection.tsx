import { skills } from "@/content/profile";
import { SectionHeading } from "./SectionHeading";

export function SkillsSection() {
  return (
    <section id="competencias" className="section" aria-labelledby="competencias-title">
      <div className="wrap">
        <SectionHeading marker="competencias.yml" id="competencias-title" title="Competências" />
        <p className="section-intro">
          Cada item indica de onde vem a prática: <span className="tag tag-renea">RENEA</span> usado no Sistema
          RENEA, <span className="tag">experiência</span> atuação profissional,{" "}
          <span className="tag">certificação</span> tema estudado em certificação.
        </p>
        <div className="skills">
          {skills.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name}>
                    <span>
                      {item.name}
                      {item.note && <span className="skill-note"> · {item.note}</span>}
                    </span>
                    {item.tag && (
                      <span className={item.tag === "RENEA" ? "tag tag-renea" : "tag"}>{item.tag}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
