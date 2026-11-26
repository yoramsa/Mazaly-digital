"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import VitrineModal from "@/components/VitrineModal";
import { effectById } from "@/components/vitrine-effects";
import { CarouselNav, useCarousel } from "@/components/preview/Carousel";
import { ArrowRight, ArrowUpRight } from "@/components/preview/PreviewIcons";

// Réutilise les vrais effets du portfolio (vidéos, canvas) : montés seulement quand la carte est
// visible, démontés quand elle sort de l'écran, et jamais si l'utilisateur limite les animations
// ou les données. Sans effet disponible (ex. Hanouka Party) ou sans IO : image statique.
function WorkMedia({ item, sizes, priority }) {
  const ref = useRef(null);
  const [live, setLive] = useState(false);
  const Effect = item.vitrine ? effectById[item.id] : null;

  useEffect(() => {
    const el = ref.current;
    if (!el || !Effect || !("IntersectionObserver" in window)) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const saveData = navigator.connection?.saveData;
    if (reduce || saveData) return;
    const io = new IntersectionObserver((entries) => setLive(entries[0].isIntersecting), { rootMargin: "0px", threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, [Effect]);

  return (
    <div className="pr-work-media" ref={ref}>
      {live && Effect ? (
        <Effect item={item.vitrine} />
      ) : (
        <Image src={item.image} alt={item.alt} fill sizes={sizes} loading={priority ? "eager" : "lazy"} />
      )}
      <span className="pr-work-badge">{item.category}</span>
    </div>
  );
}

export default function PreviewCreations({ content, a11y, dir }) {
  const [openItem, setOpenItem] = useState(null);
  const { trackRef, pages, page, goTo } = useCarousel(dir);

  return (
    <section className="pr-creations" id="creations" data-wa-hide>
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
                  <WorkMedia item={item} priority={i < 3} sizes="(max-width: 759px) 86vw, (max-width: 1023px) 46vw, 400px" />
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
