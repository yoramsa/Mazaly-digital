"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ParfumEffect({ item }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.getContext) return;
    const reduce = !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
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
      const n = Math.min(42, Math.floor((w * h) / 7000));
      for (let i = 0; i < n; i++) {
        pts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22, r: Math.random() * 1.8 + 0.6 });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        ctx.fillStyle = "rgba(216,196,255,0.85)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function onMove(e) {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function tick() {
      for (const p of pts) {
        const dx = mouse.x - p.x, dy = mouse.y - p.y, d = Math.hypot(dx, dy);
        if (d < 70) {
          p.vx -= (dx / d) * 0.05;
          p.vy -= (dy / d) * 0.05;
        }
        p.vx *= 0.97;
        p.vy *= 0.97;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }
      draw();
      raf = requestAnimationFrame(tick);
    }

    size();
    window.addEventListener("resize", size);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    if (reduce) {
      draw();
    } else {
      tick();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <Image className="mz-modal-img" src={item.image} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 720px" />
      <canvas className="mz-fx-canvas" ref={canvasRef} aria-hidden="true"></canvas>
    </>
  );
}
