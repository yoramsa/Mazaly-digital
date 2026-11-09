export default function PipelineMini({ steps, ariaLabel }) {
  return (
    <div className="pipe-hero" role="img" aria-label={ariaLabel}>
      {steps.map((s, i) => (
        <div className="pipe-hero-row" key={s.key}>
          <span className="pipe-hero-n">{s.n}</span>
          <div>
            <p className="pipe-hero-label">{s.label}</p>
            <p className="pipe-hero-text">{s.text}</p>
          </div>
          {i < steps.length - 1 && <span className="pipe-hero-line" aria-hidden="true"></span>}
        </div>
      ))}
    </div>
  );
}
