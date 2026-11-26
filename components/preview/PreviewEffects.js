"use client";

import { useEffect } from "react";

// Effets légers de la preview : révélation au scroll, inclinaison 3D du logo (souris uniquement)
// et étincelles du hero. Tout est coupé avec prefers-reduced-motion ; aucune boucle JS en continu.
export default function PreviewEffects() {
  useEffect(() => {
    const reduce = !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const finePointer = !!window.matchMedia?.("(hover: hover) and (pointer: fine)").matches;
    const cleanups = [];

    const reveals = [...document.querySelectorAll(".rv")];
    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      reveals.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    const stage = document.getElementById("stage");
    const tilt = document.getElementById("tilt");
    if (stage && tilt && finePointer && !reduce) {
      let raf = 0;
      const onMove = (e) => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const r = stage.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          tilt.style.transform = `rotateY(${(px * -14).toFixed(2)}deg) rotateX(${(py * 10).toFixed(2)}deg)`;
        });
      };
      const onLeave = () => {
        cancelAnimationFrame(raf);
        tilt.style.transform = "";
      };
      const hero = stage.closest(".pr-hero") || stage;
      hero.addEventListener("pointermove", onMove);
      hero.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        cancelAnimationFrame(raf);
        hero.removeEventListener("pointermove", onMove);
        hero.removeEventListener("pointerleave", onLeave);
      });
    }

    const sparkles = document.getElementById("sparkles");
    if (sparkles && !reduce && !sparkles.childElementCount) {
      const count = finePointer ? 14 : 7;
      for (let i = 0; i < count; i++) {
        const s = document.createElement("span");
        s.className = "spark";
        s.style.left = `${Math.random() * 100}%`;
        s.style.top = `${Math.random() * 100}%`;
        s.style.animationDelay = `${(Math.random() * -3.2).toFixed(2)}s`;
        s.style.animationDuration = `${(2.6 + Math.random() * 2.4).toFixed(2)}s`;
        const size = 3 + Math.random() * 4;
        s.style.width = s.style.height = `${size.toFixed(1)}px`;
        if (i % 3 === 0) s.style.background = "var(--accent)";
        sparkles.appendChild(s);
      }
      cleanups.push(() => sparkles.replaceChildren());
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
