import { certifications, education } from "@/content/profile";
import { CopyButton } from "./CopyButton";
import { SectionHeading } from "./SectionHeading";
import { ClockIcon } from "./icons";

export function EducationSection() {
  return (
    <section id="formacao" className="section" aria-labelledby="formacao-title">
      <div className="wrap">
        <SectionHeading marker="formacao.json" id="formacao-title" title="Formação e certificações" />

        <div className="degree">
          <div>
            <p className="degree-kind">Graduação</p>
            <h3>{education.course}</h3>
            <p>
              {education.institution} · {education.period}
            </p>
          </div>
          <p className="badge">{education.status}</p>
        </div>

        <h3 className="cert-title">Certificações</h3>
        <ul className="cert-list">
          {certifications.map((c, i) => {
            const codeId = `cert-id-${i}`;
            return (
              <li className="cert" key={c.id}>
                <div className="cert-info">
                  <h4>{c.name}</h4>
                  <p className="cert-issuer">{c.issuer}</p>
                  {c.topics && <p className="cert-topics">Temas: {c.topics}</p>}
                  {c.expired && (
                    <p className="expired">
                      <ClockIcon />
                      Expirada em {c.expired}
                    </p>
                  )}
                </div>
                <div className="cert-id">
                  <span className="cert-id-label">Identificador</span>
                  <code id={codeId}>{c.id}</code>
                  <CopyButton value={c.id} targetId={codeId} label={c.name} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
