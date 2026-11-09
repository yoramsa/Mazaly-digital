export default function PipelineFull({ steps }) {
  return (
    <div className="chain-wrap">
      <svg className="chain-svg" viewBox="0 0 1000 240" preserveAspectRatio="none" aria-hidden="true">
        <path className="cs-base" pathLength="1" d="M1000 92H875C750 92 750 148 625 148S500 92 375 92 250 148 125 148H0" />
        <path className="cs-pulse" pathLength="1" d="M1000 92H875C750 92 750 148 625 148S500 92 375 92 250 148 125 148H0" />
      </svg>
      <div className="chain-track" aria-hidden="true"><span className="chain-pulse"></span></div>
      <ol className="chain" data-stagger>
        {steps.map((s) => (
          <li className="chain-node" key={s.key}>
            <span className="chain-n">{s.n}</span>
            <p className="chain-label">{s.label}</p>
            <p className="chain-text">{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
