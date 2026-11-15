"use client";

import { useEffect, useRef } from "react";
import ParfumEffect from "@/components/vitrine-effects/ParfumEffect";
import SneakersEffect from "@/components/vitrine-effects/SneakersEffect";
import CafeEffect from "@/components/vitrine-effects/CafeEffect";
import BijouxEffect from "@/components/vitrine-effects/BijouxEffect";
import RestaurantEffect from "@/components/vitrine-effects/RestaurantEffect";
import ModeEffect from "@/components/vitrine-effects/ModeEffect";
import JudaicaEffect from "@/components/vitrine-effects/JudaicaEffect";

const effectById = {
  parfum: ParfumEffect,
  sneakers: SneakersEffect,
  cafe: CafeEffect,
  bijoux: BijouxEffect,
  restaurant: RestaurantEffect,
  mode: ModeEffect,
  judaica: JudaicaEffect,
};

export default function VitrineModal({ item, closeLabel, onClose }) {
  const closeRef = useRef(null);
  const Effect = effectById[item.id];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="mz-modal-overlay" onClick={onClose}>
      <div className="mz-modal" role="dialog" aria-modal="true" aria-label={item.title} onClick={(e) => e.stopPropagation()}>
        <button type="button" className="mz-modal-close" onClick={onClose} aria-label={closeLabel} ref={closeRef}>
          ×
        </button>
        <div className="mz-modal-stage">
          <Effect item={item} />
        </div>
        <div className="mz-modal-info">
          <span className="mz-modal-badge">{item.badge}</span>
          <h3 className="mz-modal-title">{item.title}</h3>
          <p className="mz-modal-desc">{item.desc}</p>
          <div className="mz-tags">
            {item.tags.map((tag) => (
              <span className="mz-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
