"use client";

import { useEffect, useRef } from "react";

export default function VideoEffect({ item, video }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const reduce = !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
    if (reduce) {
      el.pause();
    } else {
      el.play().catch(() => {});
    }
  }, []);

  return (
    <video
      className="mz-fx-video"
      ref={videoRef}
      src={video}
      poster={item.image}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  );
}
