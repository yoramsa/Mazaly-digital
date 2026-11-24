"use client";

import { useRef } from "react";
import Image from "next/image";

export default function ModeEffect({ item }) {
  const imgRef = useRef(null);

  function onMove(e) {
    const el = imgRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = Math.min(Math.max((e.clientX - r.left) / r.width, 0), 1);
    el.style.filter = `hue-rotate(${Math.round(px * 80 - 40)}deg) saturate(1.15)`;
  }

  function onLeave() {
    const el = imgRef.current;
    if (!el) return;
    el.style.filter = "";
  }

  return (
    <div className="mz-fx-mode" onPointerMove={onMove} onPointerLeave={onLeave}>
      <Image className="mz-modal-img mz-fx-mode-img" ref={imgRef} src={item.image} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 720px" />
      <span className="mz-fx-neon" aria-hidden="true"></span>
    </div>
  );
}
