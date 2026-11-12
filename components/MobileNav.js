"use client";

import { useState } from "react";
import { MenuIcon, CrossIcon } from "@/components/Icons";

export default function MobileNav({ links, ctaHref, ctaLabel, menuLabel = "Menu" }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="menu-wrap">
      <button
        type="button"
        className="menu-btn"
        aria-label={menuLabel}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <CrossIcon /> : <MenuIcon />}
      </button>
      {open && (
        <div className="menu-panel">
          {links.map((l) => (
            <a key={l.href} className="menu-link" href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <span className="mag">
            <a className="btn btn-mag menu-cta" href={ctaHref} onClick={() => setOpen(false)}>
              <span className="btn-in">{ctaLabel}</span>
            </a>
          </span>
        </div>
      )}
    </div>
  );
}
