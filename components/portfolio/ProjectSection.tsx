import { links, project } from "@/content/profile";
import { SectionHeading } from "./SectionHeading";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";

export function ProjectSection() {
  const { metrics } = project;
  return (
    <section id="projeto" className="section" aria-labelledby="projeto-title">
      <div className="wrap">
        <SectionHeading marker="projeto/README.md" id="projeto-title" title={project.name} />

        <div className="project-intro">
          <div>
            <p className="lead">{project.summary}</p>
            <div className="case">
              <div>
                <h3>Contexto</h3>
                <p>{project.context}</p>
              </div>
              <div>
                <h3>Minha participação</h3>
                <p>{project.participation}</p>
              </div>
            </div>
            <a className="btn btn-primary" href={links.repository} target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
              Explorar o código no GitHub
              <ArrowUpRightIcon />
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </div>

          <aside className="evidence" aria-labelledby="evidence-title">
            <h3 id="evidence-title">Retrato do repositório</h3>
            <dl className="metrics">
              {metrics.items.map((m) => (
                <div className="metric" key={m.label}>
                  <dt>{m.label}</dt>
                  <dd>{m.value}</dd>
                  <span className="metric-source">{m.source}</span>
                </div>
              ))}
            </dl>
            <p className="note">
              Situação em {metrics.asOf}. “Conferido” foi verificado no código do repositório; “informado” é um
              número que eu informei. Estes valores não são atualizados automaticamente.
            </p>
          </aside>
        </div>

        <div className="subsection">
          <h3>Funcionalidades</h3>
          <ol className="feature-list">
            {project.features.map((f, i) => (
              <li key={f.title}>
                <span className="feature-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="subsection">
          <h3>Decisões que orientam o projeto</h3>
          <ul className="decisions">
            {project.decisions.map((d) => (
              <li key={d.title}>
                <h4>{d.title}</h4>
                <p>{d.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="subsection">
          <h3>Stack aplicada</h3>
          <ul className="stack-list">
            {project.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
