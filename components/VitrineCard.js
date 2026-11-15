import Image from "next/image";

export default function VitrineCard({ item }) {
  return (
    <article className="mz-vitrine mz-reveal">
      <div className="mz-vitrine-media">
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
