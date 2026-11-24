"use client";

import { useEffect, useRef, useState } from "react";

export default function SiteNav({ items, label }) {
  const navRef = useRef(null);
  const listRef = useRef(null);
  const indicatorRef = useRef(null);
  const [active, setActive] = useState(null);
  const [docked, setDocked] = useState(false);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const top = document.getElementById("top");
    const sections = items.map((it) => document.getElementById(it.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target === top ? null : e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    if (top) io.observe(top);
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  useEffect(() => {
    let ticking = false;
    function update() {
      ticking = false;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      navRef.current?.style.setProperty("--nav-progress", max > 0 ? Math.min(1, y / max).toFixed(4) : "0");
      setDocked(y > window.innerHeight * 0.5);
    }
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const isField = (el) => el instanceof Element && el.matches("input, textarea, select");
    const onIn = (e) => isField(e.target) && setTyping(true);
    const onOut = (e) => isField(e.target) && setTyping(false);
    document.addEventListener("focusin", onIn);
    document.addEventListener("focusout", onOut);
    return () => {
      document.removeEventListener("focusin", onIn);
      document.removeEventListener("focusout", onOut);
    };
  }, []);

  useEffect(() => {
    const list = listRef.current;
    const indicator = indicatorRef.current;
    if (!list || !indicator) return;
    function place() {
      const link = active && list.querySelector(`[data-id="${active}"]`);
      if (!link) {
        indicator.style.opacity = "0";
        return;
      }
      indicator.style.opacity = "1";
      indicator.style.width = `${link.offsetWidth}px`;
      indicator.style.transform = `translateX(${link.offsetLeft}px)`;
    }
    place();
    const ro = new ResizeObserver(place);
    list.querySelectorAll("a").forEach((a) => ro.observe(a));
    return () => ro.disconnect();
  }, [active]);

  return (
    <nav
      className={`mz-dock${docked ? " is-docked" : ""}${typing ? " is-hidden" : ""}`}
      aria-label={label}
      ref={navRef}
    >
      <ul className="mz-dock-list" ref={listRef}>
        <li className="mz-dock-indicator" ref={indicatorRef} aria-hidden="true" />
        {items.map((it) => {
          const isActive = active === it.id;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                data-id={it.id}
                className={`mz-dock-link${isActive ? " is-active" : ""}`}
                aria-current={isActive ? "location" : undefined}
                onClick={() => setActive(it.id)}
              >
                <span className="mz-dock-num" aria-hidden="true">{it.num}</span>
                <span className="mz-dock-label">
                  <span className="mz-dock-label-full">{it.label}</span>
                  <span className="mz-dock-label-short">{it.short}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
      <span className="mz-dock-progress" aria-hidden="true" />
    </nav>
  );
}
