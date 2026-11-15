export default function FinalCta({ content, waHref }) {
  return (
    <section className="mz-final">
      <i className="mz-blob-a mz-final-blob" aria-hidden="true"></i>
      <div className="mz-final-inner mz-reveal">
        <h2 className="mz-final-title">{content.title}</h2>
        <p className="mz-final-lead">{content.lead}</p>
        <a className="mz-cta" href={waHref}>{content.ctaLabel}</a>
      </div>
    </section>
  );
}
