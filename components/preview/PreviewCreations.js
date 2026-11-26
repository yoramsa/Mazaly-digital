"use client";

import { useState } from "react";
import VitrineCard from "@/components/VitrineCard";
import VitrineModal from "@/components/VitrineModal";

export default function PreviewCreations({ content, waHref }) {
  const [openItem, setOpenItem] = useState(null);
  const { flagship } = content;

  return (
    <section id="creations">
      <div className="mz-vitrines-wrap">
        <div className="mz-section-head mz-reveal">
          <div className="mz-section-head-main">
            <span className="mz-eyebrow-label">{content.eyebrow}</span>
            <h2 className="mz-vitrines-title mz-glitch">{content.title}</h2>
          </div>
          <p className="mz-section-lead">{content.lead}</p>
        </div>
        <div className="mz-grid-vitrines">
          <article className="mz-vitrine pr-flagship mz-reveal" aria-label={flagship.title}>
            <div className="pr-flagship-media">
              <span className="pr-flagship-icon" aria-hidden="true">🕎</span>
              <span className="pr-flagship-note">{flagship.note}</span>
            </div>
            <div className="mz-vitrine-body">
              <span className="mz-vitrine-badge" style={{ position: "static", display: "inline-flex", marginBottom: 4 }}>{flagship.badge}</span>
              <h3 className="mz-vitrine-title">{flagship.title}</h3>
              <p className="mz-vitrine-desc">{flagship.desc}</p>
              <div className="mz-tags">
                {flagship.tags.map((tag) => (
                  <span className="mz-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
          {content.items.map((item) => (
            <VitrineCard item={item} effectCta={content.effectCta} onOpen={setOpenItem} key={item.id} />
          ))}
          <a className="mz-vitrine mz-vitrine-next mz-reveal" href={waHref}>
            <span className="mz-vitrine-next-eyebrow">{content.next.eyebrow}</span>
            <span className="mz-vitrine-next-title">{content.next.title}</span>
            <span className="mz-vitrine-next-desc">{content.next.desc}</span>
            <span className="mz-vitrine-next-btn">{content.next.cta}</span>
          </a>
        </div>
      </div>
      {openItem && <VitrineModal item={openItem} closeLabel={content.closeLabel} onClose={() => setOpenItem(null)} />}
    </section>
  );
}
