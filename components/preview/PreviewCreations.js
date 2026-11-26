"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import VitrineModal from "@/components/VitrineModal";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/preview/PreviewIcons";

function useCarousel(trackRef, dir) {
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(0);
  const geo = useRef({ step: 1, perPage: 1, max: 0 });

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track || !track.firstElementChild) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const cardStep = track.firstElementChild.getBoundingClientRect().width + gap;
    const perPage = Math.max(1, Math.round((track.clientWidth + gap) / cardStep));
    const count = track.children.length;
    const max = track.scrollWidth - track.clientWidth;
    geo.current = { step: cardStep * perPage, perPage, max };
    const total = max > 2 ? Math.ceil(count / perPage) : 1;
    setPages(total);
    const pos = Math.abs(track.scrollLeft);
    setPage(pos >= max - 2 ? total - 1 : Math.min(total - 1, Math.round(pos / geo.current.step)));
  }, [trackRef]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    measure();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [measure, trackRef, dir]);

  const goTo = useCallback(
    (index) => {
      const track = trackRef.current;
      if (!track) return;
      const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      const target = Math.min(index * geo.current.step, geo.current.max);
      track.scrollTo({ left: dir === "rtl" ? -target : target, behavior: reduce ? "auto" : "smooth" });
    },
    [dir, trackRef]
  );

  return { pages, page, goTo };
}

export default function PreviewCreations({ content, a11y, dir }) {
  const trackRef = useRef(null);
  const [openItem, setOpenItem] = useState(null);
  const { pages, page, goTo } = useCarousel(trackRef, dir);

  function open(item) {
    if (item.vitrine) setOpenItem(item.vitrine);
  }

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

        <div className="pr-track" ref={trackRef}>
          {content.items.map((item, i) => {
            const clickable = !!item.vitrine;
            return (
              <article
                className={`pr-work${item.flagship ? " pr-work-flagship" : ""}${clickable ? " pr-work-clickable" : ""}`}
                key={item.id}
                {...(clickable
                  ? {
                      role: "button",
                      tabIndex: 0,
                      onClick: () => open(item),
                      onKeyDown: (e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          open(item);
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
                    sizes="(max-width: 700px) 50vw, 400px"
                    loading={i < 3 ? "eager" : "lazy"}
                  />
                </div>
                <div className="pr-work-body">
                  <span className="pr-work-badge">{item.category}</span>
                  <h3 className="pr-work-title">{item.name}</h3>
                  <p className="pr-work-sub">
                    {item.sub}
                    {clickable && <ArrowUpRight className="pr-work-arrow" />}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {pages > 1 && (
          <div className="pr-carousel-nav">
            <button type="button" className="pr-round-btn" onClick={() => goTo(Math.max(0, page - 1))} disabled={page === 0} aria-label={a11y.prev}>
              <ArrowLeft />
            </button>
            <div className="pr-dots">
              {Array.from({ length: pages }, (_, i) => (
                <button
                  type="button"
                  key={i}
                  className={`pr-dot${i === page ? " is-active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`${a11y.page} ${i + 1}`}
                  aria-current={i === page ? "true" : undefined}
                />
              ))}
            </div>
            <button type="button" className="pr-round-btn" onClick={() => goTo(Math.min(pages - 1, page + 1))} disabled={page === pages - 1} aria-label={a11y.next}>
              <ArrowRight />
            </button>
          </div>
        )}
      </div>
      {openItem && <VitrineModal item={openItem} closeLabel={content.closeLabel} onClose={() => setOpenItem(null)} />}
    </section>
  );
}
