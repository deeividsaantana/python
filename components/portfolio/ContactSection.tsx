import { displayUrl, links, profile } from "@/content/profile";
import { PrintButton } from "./PrintButton";
import { SectionHeading } from "./SectionHeading";
import { GitHubIcon, LinkedInIcon } from "./icons";

export function ContactSection() {
  const linkList = [
    { label: "LinkedIn", href: links.linkedin },
    { label: "GitHub", href: links.github },
    { label: "Repositório do Sistema RENEA", href: links.repository },
  ];

  return (
    <section id="contato" className="section contact" aria-labelledby="contato-title">
      <div className="wrap contact-grid">
        <div>
          <SectionHeading marker="contato.sh" id="contato-title" title="Vamos conversar sobre uma oportunidade?" />
          <dl className="contact-info">
            <div>
              <dt>Status</dt>
              <dd>
                <span className="dot" aria-hidden="true" />
                {profile.availability.status}
              </dd>
            </div>
            <div>
              <dt>Local</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Modelo</dt>
              <dd>{profile.availability.workModes}</dd>
            </div>
          </dl>
          <div className="actions">
            <a className="btn btn-primary" href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
              Conectar no LinkedIn<span className="sr-only"> (abre em nova aba)</span>
            </a>
            <a className="btn btn-secondary" href={links.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
              Ver GitHub<span className="sr-only"> (abre em nova aba)</span>
            </a>
            <PrintButton documentTitle={`${profile.name} - Portfolio`} />
          </div>
          <p className="print-hint">O botão abre a janela de impressão do navegador; escolha “Salvar como PDF”.</p>
        </div>

        <ul className="link-list" aria-label="Links">
          {linkList.map((l) => (
            <li key={l.href}>
              <span className="link-label">{l.label}</span>
              <a href={l.href} target="_blank" rel="noopener noreferrer">
                {displayUrl(l.href)}
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
