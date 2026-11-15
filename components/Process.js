export default function Process({ content }) {
  return (
    <section id="process">
      <div className="mz-process-wrap">
        <div className="mz-section-head-simple mz-reveal">
          <span className="mz-eyebrow-label">{content.eyebrow}</span>
          <h2 className="mz-section-title">{content.title}</h2>
        </div>
        <div className="mz-grid-process">
          {content.steps.map((step) => (
            <div className="mz-process-step mz-reveal" key={step.label}>
              <span className="mz-step-label">{step.label}</span>
              <h3 className="mz-step-title">{step.title}</h3>
              <p className="mz-step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
