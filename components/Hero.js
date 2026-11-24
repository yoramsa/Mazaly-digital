"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero({ content, waHref, secondaryHref, heroImageSrc }) {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas || !canvas.getContext) return;
    const reduce = !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);

    function onMove(e) {
      const r = section.getBoundingClientRect();
      section.style.setProperty("--mz-mx", `${e.clientX - r.left}px`);
      section.style.setProperty("--mz-my", `${e.clientY - r.top}px`);
    }
    section.addEventListener("pointermove", onMove);
    if (reduce) {
      return () => section.removeEventListener("pointermove", onMove);
    }

    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, raf = 0;
    const pts = [];
    const mouse = { x: -9999, y: -9999 };

    function size() {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      pts.length = 0;
      const n = Math.min(140, Math.floor((w * h) / 9000));
      for (let i = 0; i < n; i++) {
        pts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35, r: Math.random() * 1.6 + 0.4 });
      }
    }

    function onCanvasMove(e) {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const dx = mouse.x - p.x, dy = mouse.y - p.y, d = Math.hypot(dx, dy);
        if (d < 180) {
          p.vx -= (dx / d) * 0.04;
          p.vy -= (dy / d) * 0.04;
        }
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.x += p.vx + (Math.random() - 0.5) * 0.05;
        p.y += p.vy + (Math.random() - 0.5) * 0.05;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], ex = p.x - q.x, ey = p.y - q.y, e = ex * ex + ey * ey;
          if (e < 12000) {
            ctx.strokeStyle = `rgba(201,168,255,${(1 - e / 12000) * 0.22})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = d < 180 ? "rgba(34,211,238,.9)" : "rgba(216,196,255,.75)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    }

    size();
    tick();
    window.addEventListener("resize", size);
    canvas.addEventListener("pointermove", onCanvasMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
      canvas.removeEventListener("pointermove", onCanvasMove);
      canvas.removeEventListener("pointerleave", onLeave);
      section.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <section className="mz-hero" id="top" ref={sectionRef}>
      <div className="mz-hero-bg">
        <Image className="mz-hero-img" src={heroImageSrc} alt="" fill priority sizes="100vw" />
        <span className="mz-hero-overlay" aria-hidden="true"></span>
        <span className="mz-hero-fade" aria-hidden="true"></span>
      </div>
      <i className="mz-blob-a mz-hero-blob-a" aria-hidden="true"></i>
      <i className="mz-blob-b mz-hero-blob-b" aria-hidden="true"></i>
      <canvas className="mz-particles" ref={canvasRef} aria-hidden="true"></canvas>
      <span className="mz-glow" aria-hidden="true"></span>

      <div className="mz-wrap mz-hero-inner">
        <p className="mz-eyebrow mz-rise-1">
          <span className="mz-eyebrow-dot"></span>
          {content.eyebrow}
        </p>
        <h1 className="mz-hero-title">
          <span className="mz-hero-line-1 mz-rise-2">{content.line1}</span>
          <span className="mz-hero-line-2 mz-rise-3">{content.line2}</span>
        </h1>
        <p className="mz-hero-lead mz-rise-4">{content.lead}</p>
        <div className="mz-hero-actions mz-rise-4">
          <a className="mz-cta" href={waHref}>{content.ctaPrimary}</a>
          <a className="mz-ghost" href={secondaryHref}>{content.ctaSecondary}</a>
        </div>
      </div>

      <i className="mz-ring" aria-hidden="true">
        <span className="mz-ring-dot"></span>
      </i>
    </section>
  );
}
