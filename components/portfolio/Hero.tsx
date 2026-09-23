import { displayUrl, education, links, profile } from "@/content/profile";
import { ArrowDownIcon, GitHubIcon, LinkedInIcon } from "./icons";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-main">
          <p className="status">
            <span className="dot" aria-hidden="true" />
            {profile.availability.status} · {profile.location}
          </p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-intro">{profile.intro}</p>

          <div className="actions">
            <a className="btn btn-primary" href="#projeto">
              Conhecer o Sistema RENEA
              <ArrowDownIcon />
            </a>
            <a className="btn btn-secondary" href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
              Conectar no LinkedIn<span className="sr-only"> (abre em nova aba)</span>
            </a>
            <a className="text-link" href={links.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
              GitHub<span className="sr-only"> (abre em nova aba)</span>
            </a>
          </div>

          <p className="print-only">
            {displayUrl(links.linkedin)} · {displayUrl(links.github)}
          </p>
        </div>

        <aside className="profile-card" aria-label="Resumo profissional">
          <p className="marker card-marker" aria-hidden="true">
            perfil.txt
          </p>
          <dl>
            <div>
              <dt>Cargo atual</dt>
              <dd>{profile.currentPosition}</dd>
            </div>
            <div>
              <dt>Empresa</dt>
              <dd>{profile.currentCompany}</dd>
            </div>
            <div>
              <dt>Formação</dt>
              <dd>ADS · UMC · {education.status.toLowerCase()}</dd>
            </div>
            <div>
              <dt>Modelo de trabalho</dt>
              <dd>{profile.availability.workModes}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
