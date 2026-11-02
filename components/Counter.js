"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ to = 20, suffix = "+", label }) {
  const ref = useRef(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (!el) return;
    if (reduce) { setValue(to); return; }
    setValue(0);
    let done = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !done) {
            done = true;
            const start = performance.now();
            const duration = 1400;
            function tick(now) {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(eased * to));
              if (p < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span className="hero-counter" ref={ref}>
      <strong>{value}{suffix}</strong>
      <span>{label}</span>
    </span>
  );
}
