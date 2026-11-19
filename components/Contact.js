import ContactForm from "@/components/ContactForm";

export default function Contact({ content, waHref, lang, page }) {
  return (
    <section className="mz-final" id="contact">
      <i className="mz-blob-a mz-final-blob" aria-hidden="true"></i>
      <div className="mz-final-inner mz-reveal">
        <span className="mz-eyebrow-label">{content.eyebrow}</span>
        <h2 className="mz-final-title">{content.title}</h2>
        <p className="mz-final-lead">{content.lead}</p>
        <a className="mz-cta" href={waHref}>{content.ctaLabel}</a>
      </div>
      <div className="mz-contact-form-wrap">
        <ContactForm content={content} lang={lang} page={page} />
      </div>
    </section>
  );
}
