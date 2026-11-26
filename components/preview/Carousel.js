"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "@/components/preview/PreviewIcons";

// Carrousel à défilement natif (scroll-snap) : le doigt gère le swipe, le hook ne fait que
// mesurer la page courante et piloter flèches/points. Fonctionne en LTR et en RTL.
export function useCarousel(dir) {
  const trackRef = useRef(null);
  const geo = useRef({ step: 1, max: 0 });
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(0);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track || !track.firstElementChild) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const cardStep = track.firstElementChild.getBoundingClientRect().width + gap;
    const padding = parseFloat(getComputedStyle(track).paddingInlineStart) || 0;
    const visible = track.clientWidth - padding;
    const perPage = Math.max(1, Math.floor((visible + gap) / cardStep + 0.05));
    const max = track.scrollWidth - track.clientWidth;
    geo.current = { step: cardStep * perPage, max };
    const total = max > 2 ? Math.ceil(track.children.length / perPage) : 1;
    const pos = Math.abs(track.scrollLeft);
    setPages(total);
    setPage(pos >= max - 2 ? total - 1 : Math.min(total - 1, Math.round(pos / geo.current.step)));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    measure();
    track.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const ro = "ResizeObserver" in window ? new ResizeObserver(schedule) : null;
    ro?.observe(track);
    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      ro?.disconnect();
    };
  }, [measure, dir]);

  const goTo = useCallback(
    (index) => {
      const track = trackRef.current;
      if (!track) return;
      const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      const target = Math.min(Math.max(index, 0) * geo.current.step, geo.current.max);
      track.scrollTo({ left: dir === "rtl" ? -target : target, behavior: reduce ? "auto" : "smooth" });
    },
    [dir]
  );

  return { trackRef, pages, page, goTo };
}

export function CarouselNav({ pages, page, goTo, a11y, arrows = true, tone = "dark", className = "" }) {
  if (pages < 2) return null;
  return (
    <div className={`pr-carousel-nav pr-carousel-${tone} ${arrows ? "" : "pr-carousel-dots-only"} ${className}`}>
      {arrows && (
        <button type="button" className="pr-round-btn" onClick={() => goTo(page - 1)} disabled={page === 0} aria-label={a11y.prev}>
          <ArrowLeft />
        </button>
      )}
      <div className="pr-dots">
        {Array.from({ length: pages }, (_, i) => (
          <button
            type="button"
            key={i}
            className={`pr-dot${i === page ? " is-active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`${a11y.page} ${i + 1} / ${pages}`}
            aria-current={i === page ? "true" : undefined}
          />
        ))}
      </div>
      {arrows && (
        <button type="button" className="pr-round-btn" onClick={() => goTo(page + 1)} disabled={page === pages - 1} aria-label={a11y.next}>
          <ArrowRight />
        </button>
      )}
    </div>
  );
}
