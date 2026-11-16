export default function Services({ content, items }) {
  return (
    <section className="mz-section-alt" id="services">
      <div className="mz-services-wrap">
        <div className="mz-section-head-simple mz-reveal">
          <span className="mz-eyebrow-label">{content.eyebrow}</span>
          <h2 className="mz-section-title">
            {content.titleMain} <span className="mz-title-accent">{content.titleHighlight}</span>
          </h2>
          {content.lead && <p className="mz-section-lead">{content.lead}</p>}
        </div>
        <div className="mz-grid-services">
          {items.map((item, i) => (
            <div className="mz-service mz-reveal" key={item.id}>
              <span className="mz-service-num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mz-service-title">{item.title}</h3>
              <p className="mz-service-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
