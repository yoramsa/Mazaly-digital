export default function Plans({ content }) {
  return (
    <section className="mz-section-alt" id="plans">
      <div className="mz-plans-wrap">
        <div className="mz-plans-head mz-reveal">
          <span className="mz-eyebrow-label">{content.eyebrow}</span>
          <h2 className="mz-section-title">{content.title}</h2>
          <p className="mz-section-lead mz-section-lead-center">{content.lead}</p>
        </div>
        <div className="mz-grid-plans">
          {content.items.map((plan) => (
            <div className="mz-service mz-plan mz-reveal" key={plan.id}>
              <h3 className="mz-plan-title">{plan.name}</h3>
              <p className="mz-plan-desc">{plan.desc}</p>
              <div className="mz-price-row">
                <span className="mz-price-label">
                  {content.setupLabel} <strong className="mz-price-value">{plan.setupPrice}</strong>
                </span>
                <span className="mz-price-label">
                  {content.monthlyLabel} <strong className="mz-price-value mz-price-value-lg">{plan.monthlyPrice}</strong>
                </span>
              </div>
              {plan.features.map((feature) => (
                <span className="mz-plan-feature" key={feature}>
                  <span className="mz-plan-feature-dot">✦</span>
                  {feature}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
