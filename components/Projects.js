const PLACEHOLDER = { he: "ויזואל בדרך", fr: "Visuel à venir" };

export default function Projects({ projects, lang = "he" }) {
  return (
    <div className="proj-grid" data-stagger>
      {projects.map((p, i) => (
        <article className="proj-card" key={i}>
          <div className="proj-media">{PLACEHOLDER[lang]}</div>
          <div className="proj-body">
            <p className="proj-sector">{p.sector}</p>
            <p className="proj-result">{p.result}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
