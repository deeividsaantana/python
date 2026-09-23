export function SectionHeading({ marker, id, title }: { marker: string; id: string; title: string }) {
  return (
    <div className="section-head">
      <p className="marker" aria-hidden="true">
        {marker}
      </p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}
