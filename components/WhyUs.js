export default function WhyUs({ content }) {
  return (
    <section id="why">
      <div className="mz-why-wrap">
        <div className="mz-section-head-simple mz-reveal">
          <span className="mz-eyebrow-label">{content.eyebrow}</span>
          <h2 className="mz-section-title mz-section-title-sm">{content.title}</h2>
        </div>
        <div className="mz-grid-why">
          {content.items.map((item) => (
            <div className="mz-why-item mz-reveal" key={item.title}>
              <h3 className="mz-why-title">{item.title}</h3>
              <p className="mz-why-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
