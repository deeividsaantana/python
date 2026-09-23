import { experience } from "@/content/profile";
import { SectionHeading } from "./SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="section" aria-labelledby="experiencia-title">
      <div className="wrap">
        <SectionHeading marker="experiencia.log" id="experiencia-title" title="Experiência" />
        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.company}>
              <p className="job-period">
                {job.period}
                {job.current && (
                  <span className="current">
                    <span className="dot" aria-hidden="true" />
                    Atual
                  </span>
                )}
              </p>
              <div>
                <h3>{job.role}</h3>
                <p className="job-company">
                  {job.company}
                  {job.location && <> · {job.location}</>}
                </p>
              </div>
              <ul className="job-activities">
                {job.activities.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
