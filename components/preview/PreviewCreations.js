"use client";

import { useState } from "react";
import Image from "next/image";
import VitrineModal from "@/components/VitrineModal";
import { CarouselNav, useCarousel } from "@/components/preview/Carousel";
import { ArrowRight, ArrowUpRight } from "@/components/preview/PreviewIcons";

export default function PreviewCreations({ content, a11y, dir }) {
  const [openItem, setOpenItem] = useState(null);
  const { trackRef, pages, page, goTo } = useCarousel(dir);

  return (
    <section className="pr-creations" id="creations">
      <div className="pr-wrap">
        <div className="pr-head rv">
          <h2 className="pr-h2 pr-h2-light">{content.title}</h2>
          <a className="pr-aside pr-aside-light pr-only-desktop" href={content.seeAllHref}>
            <span>{content.aside}</span>
            <ArrowRight className="pr-aside-arrow" />
          </a>
          <a className="pr-seeall pr-only-mobile" href={content.seeAllHref}>
            {content.seeAll} <ArrowRight className="pr-seeall-arrow" />
          </a>
        </div>
      </div>

      <div className="pr-wrap pr-wrap-bleed">
        <ul className="pr-track" ref={trackRef} aria-label={content.title}>
          {content.items.map((item, i) => {
            const clickable = !!item.vitrine;
            const open = () => setOpenItem(item.vitrine);
            return (
              <li className="pr-slide" key={item.id}>
                <article
                  className={`pr-work${item.flagship ? " pr-work-flagship" : ""}${clickable ? " pr-work-clickable" : ""}`}
                  {...(clickable
                    ? {
                        role: "button",
                        tabIndex: 0,
                        onClick: open,
                        onKeyDown: (e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            open();
                          }
                        },
                      }
                    : {})}
                >
                  <div className="pr-work-media">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 759px) 86vw, (max-width: 1023px) 46vw, 400px"
                      loading={i < 3 ? "eager" : "lazy"}
                    />
                    <span className="pr-work-badge">{item.category}</span>
                  </div>
                  <div className="pr-work-body">
                    <h3 className="pr-work-title">{item.name}</h3>
                    <p className="pr-work-sub">
                      {item.sub}
                      {clickable && <ArrowUpRight className="pr-work-arrow" />}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="pr-wrap">
        <CarouselNav pages={pages} page={page} goTo={goTo} a11y={a11y} />
      </div>
      {openItem && <VitrineModal item={openItem} closeLabel={content.closeLabel} onClose={() => setOpenItem(null)} />}
    </section>
  );
}
