"use client";

import { useRef } from "react";
import Image from "next/image";

export default function RestaurantEffect({ item }) {
  const imgRef = useRef(null);

  function onMove(e) {
    const el = imgRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateX(${(-py * 14).toFixed(2)}deg) rotateY(${(px * 14).toFixed(2)}deg) scale(1.04)`;
  }

  function onLeave() {
    const el = imgRef.current;
    if (!el) return;
    el.style.transform = "";
  }

  return (
    <div className="mz-fx-restaurant-float">
      <div className="mz-fx-restaurant-tilt" onPointerMove={onMove} onPointerLeave={onLeave}>
        <Image className="mz-modal-img mz-fx-restaurant-img" ref={imgRef} src={item.image} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 720px" />
      </div>
    </div>
  );
}
