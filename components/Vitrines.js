"use client";

import { useState } from "react";
import VitrineCard from "@/components/VitrineCard";
import VitrineModal from "@/components/VitrineModal";

export default function Vitrines({ content, waHref }) {
  const [openItem, setOpenItem] = useState(null);

  return (
    <section className="mz-section-alt" id="vitrines">
      <div className="mz-vitrines-wrap">
        <div className="mz-section-head mz-reveal">
          <div className="mz-section-head-main">
            <span className="mz-eyebrow-label">{content.eyebrow}</span>
            <h2 className="mz-vitrines-title mz-glitch">{content.title}</h2>
          </div>
          <p className="mz-section-lead">{content.lead}</p>
        </div>
        <div className="mz-grid-vitrines">
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
