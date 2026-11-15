import Image from "next/image";

export default function VitrineCard({ item, effectCta, onOpen }) {
  function onKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(item);
    }
  }

  return (
    <article
      className="mz-vitrine mz-reveal"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(item)}
      onKeyDown={onKeyDown}
      aria-label={effectCta}
    >
      <div className="mz-vitrine-media" data-cta={effectCta}>
        <Image className="mz-vitrine-img" src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 420px" />
        <span className="mz-vitrine-fade" aria-hidden="true"></span>
        <span className="mz-vitrine-badge">{item.badge}</span>
      </div>
      <div className="mz-vitrine-body">
        <h3 className="mz-vitrine-title">{item.title}</h3>
        <p className="mz-vitrine-desc">{item.desc}</p>
        <div className="mz-tags">
          {item.tags.map((tag) => (
            <span className="mz-tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
