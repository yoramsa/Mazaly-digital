"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PreviewEffects from "@/components/preview/PreviewEffects";
import WhatsappFloat from "@/components/WhatsappFloat";
import { ArrowUpRight, Chevron, Burger, Close } from "@/components/preview/PreviewIcons";
import { waLink } from "@/lib/site";

const SECTION_IDS = ["accueil", "univers", "creations", "approche", "contact"];

function useActiveSection(enabled) {
  const [active, setActive] = useState(SECTION_IDS[0]);
  useEffect(() => {
    if (!enabled || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [enabled]);
  return active;
}

// Le bouton WhatsApp flottant s'efface quand une zone marquée data-wa-hide est visible
// (formulaire, bannière de contact, pied de page) pour ne jamais recouvrir de contenu utile.
function useHideFloatingButton() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const visible = new Set();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      setHidden(visible.size > 0);
    });
    document.querySelectorAll("[data-wa-hide]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return hidden;
}

// Le bouton s'efface quand on descend dans la page (lecture) et réapparaît dès qu'on remonte
// ou qu'on est en haut de page : il ne reste jamais posé sur le contenu que l'on lit.
function useScrollAway() {
  const [away, setAway] = useState(false);
  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const dy = y - last;
      if (Math.abs(dy) < 8) return;
      setAway(y > 360 && dy > 0);
      last = y;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return away;
}

export default function PreviewShell({ lang, shell, homeHref, switchHref, variant = "home", children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const active = useActiveSection(variant === "home");
  const inQuietZone = useHideFloatingButton();
  const scrolledAway = useScrollAway();
  const waHidden = inQuietZone || scrolledAway;
  const sectionHref = (id) => (variant === "home" ? `#${id}` : `${homeHref}#${id}`);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setLangOpen(false);
      }
    }
    function onClick(e) {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    }
    function onResize() {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className={`pr-root pr-${variant}${waHidden ? " pr-wa-hidden" : ""}`}>
      <PreviewEffects />
      <WhatsappFloat lang={lang} message={shell.whatsappMessage} />

      <div className="pr-bar" role="note">
        <span>{shell.previewPill.label}</span>
        <a href={shell.previewPill.backHref}>{shell.previewPill.back}</a>
      </div>

      <header className="pr-header">
        <div className="pr-wrap pr-header-in">
          <a className="pr-brand" href={sectionHref("accueil")} aria-label={shell.a11y.home}>
            <Image className="pr-brand-mark" src="/logo-mark.png" alt="" width={44} height={44} priority />
            <span className="pr-brand-name" dir="ltr">MAZALY<br />DIGITAL</span>
          </a>

          <nav className="pr-nav" aria-label={shell.a11y.nav}>
            {shell.nav.map((item, i) => (
              <a className={`pr-nav-link${active === item.id ? " is-active" : ""}`} href={sectionHref(item.id)} key={item.id}>
                <span className="pr-nav-num">{String(i + 1).padStart(2, "0")}</span> {item.label}
              </a>
            ))}
          </nav>

          <div className="pr-header-tools">
            <div className="pr-lang" ref={langRef}>
              <button
                type="button"
                className="pr-lang-btn"
                onClick={() => setLangOpen((v) => !v)}
                aria-expanded={langOpen}
                aria-haspopup="true"
                aria-label={shell.a11y.language}
              >
                {shell.langLabel} <Chevron className="pr-lang-chevron" />
              </button>
              {langOpen && (
                <ul className="pr-lang-menu">
                  {shell.languages.map((l) => (
                    <li key={l.code}>
                      <a href={switchHref[l.code]} lang={l.code} hrefLang={l.code} className={l.code === lang ? "is-active" : ""} aria-current={l.code === lang ? "true" : undefined}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              type="button"
              className="pr-burger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="pr-menu"
              aria-label={menuOpen ? shell.a11y.close : shell.a11y.menu}
            >
              {menuOpen ? <Close /> : <Burger />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="pr-menu" id="pr-menu" aria-label={shell.a11y.nav}>
            <div className="pr-wrap">
              {shell.nav.map((item, i) => (
                <a className="pr-menu-link" href={sectionHref(item.id)} key={item.id} onClick={() => setMenuOpen(false)}>
                  <span className="pr-nav-num">{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </a>
              ))}
              <a className="pr-btn pr-btn-primary pr-menu-cta" href={waLink(shell.whatsappMessage)}>
                {shell.ctaLabel} <ArrowUpRight className="pr-btn-icon" />
              </a>
            </div>
          </nav>
        )}
      </header>

      {children}

      <footer className="pr-footer" data-wa-hide>
        <div className="pr-wrap pr-footer-in">
          <a className="pr-footer-brand" href={sectionHref("accueil")} dir="ltr">© 2026 Mazaly Digital</a>
          <nav className="pr-footer-legal" aria-label={shell.a11y.legal}>
            {shell.links.map((link) => (
              <a href={link.href} key={link.key}>{link.label}</a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
