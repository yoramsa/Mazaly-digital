"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PageEffects from "@/components/PageEffects";
import ContactForm from "@/components/ContactForm";
import WhatsappFloat from "@/components/WhatsappFloat";
import PreviewCreations from "@/components/preview/PreviewCreations";
import {
  RibbonLogo, ArrowRight, ArrowUpRight, Play, Chevron, Burger, Close,
  Monitor, Layers, Gamepad, Bulb, Bars,
} from "@/components/preview/PreviewIcons";
import { previewContent } from "@/lib/content.preview";
import { waLink } from "@/lib/site";

const UNIVERSE_ICONS = { digital: Monitor, creation: Layers, experiences: Gamepad };
const STEP_ICONS = { imagine: Bulb, cree: Layers, grandir: Bars };

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids]);
  return active;
}

const SECTION_IDS = ["accueil", "univers", "creations", "approche", "contact"];

export default function PreviewHome() {
  const [lang, setLang] = useState("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const formRef = useRef(null);
  const t = previewContent[lang];
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setLangOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (formOpen) formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [formOpen]);

  function chooseLang(code) {
    setLang(code);
    setLangOpen(false);
    setMenuOpen(false);
  }

  return (
    <div className="pr-root" dir={t.dir} lang={lang}>
      <PageEffects />
      <WhatsappFloat lang={lang} message={t.hero.ctaPrimaryMessage} />

      <div className="pr-pill" role="note">
        <span>{t.previewPill.label}</span>
        <a href={t.previewPill.backHref}>{t.previewPill.back}</a>
      </div>

      <header className="pr-header">
        <div className="pr-wrap pr-header-in">
          <a className="pr-brand" href="#accueil" aria-label="Mazaly Digital">
            <RibbonLogo className="pr-brand-mark" />
            <span className="pr-brand-name" dir="ltr">MAZALY<br />DIGITAL</span>
          </a>

          <nav className="pr-nav pr-only-desktop" aria-label={t.a11y.nav}>
            {t.nav.map((item, i) => (
              <a className={`pr-nav-link${active === item.id ? " is-active" : ""}`} href={`#${item.id}`} key={item.id}>
                <span className="pr-nav-num">{String(i + 1).padStart(2, "0")}</span> {item.label}
              </a>
            ))}
          </nav>

          <div className="pr-header-tools">
            <div className="pr-lang">
              <button
                type="button"
                className="pr-lang-btn"
                onClick={() => setLangOpen((v) => !v)}
                aria-expanded={langOpen}
                aria-haspopup="true"
                aria-label={t.a11y.language}
              >
                {t.langLabel} <Chevron className="pr-lang-chevron" />
              </button>
              {langOpen && (
                <ul className="pr-lang-menu">
                  {t.languages.map((l) => (
                    <li key={l.code}>
                      <button type="button" lang={l.code} className={l.code === lang ? "is-active" : ""} onClick={() => chooseLang(l.code)}>
                        {l.label}
                      </button>
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
              aria-label={menuOpen ? t.a11y.close : t.a11y.menu}
            >
              {menuOpen ? <Close /> : <Burger />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="pr-menu" id="pr-menu" aria-label={t.a11y.nav}>
            <div className="pr-wrap">
              {t.nav.map((item, i) => (
                <a className="pr-menu-link" href={`#${item.id}`} key={item.id} onClick={() => setMenuOpen(false)}>
                  <span className="pr-nav-num">{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </a>
              ))}
              <a className="pr-btn pr-btn-primary pr-menu-cta" href={waLink(t.hero.ctaPrimaryMessage)}>
                {t.hero.ctaPrimary} <ArrowUpRight className="pr-btn-icon" />
              </a>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="pr-hero" id="accueil">
          <div className="sparkles" id="sparkles" aria-hidden="true"></div>
          <div className="pr-wrap pr-hero-grid">
            <div className="pr-hero-copy">
              <p className="pr-eyebrow pr-in pr-in-1">{t.hero.eyebrow}</p>
              <h1 className="pr-hero-title pr-in pr-in-2">
                {t.hero.titleStart} <span className="pr-accent">{t.hero.titleAccent}</span>
              </h1>
              <p className="pr-hero-lead pr-in pr-in-3">{t.hero.lead}</p>
              <div className="pr-hero-actions pr-in pr-in-4">
                <a className="pr-btn pr-btn-primary" href={waLink(t.hero.ctaPrimaryMessage)}>
                  {t.hero.ctaPrimary} <ArrowUpRight className="pr-btn-icon" />
                </a>
                <a className="pr-play" href="#creations">
                  <span className="pr-play-circle"><Play /></span>
                  <span className="pr-only-desktop">{t.hero.ctaSecondary}</span>
                  <span className="pr-only-mobile">{t.hero.ctaSecondaryShort}</span>
                </a>
              </div>
            </div>
            <div className="pr-hero-visual" id="stage" aria-hidden="true">
              <div className="pr-hero-float">
                <div className="pr-hero-tilt" id="tilt">
                  <Image src="/images/refonte/hero-m.webp" alt="" width={940} height={720} priority sizes="(max-width: 760px) 70vw, 560px" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pr-universes" id="univers">
          <div className="pr-wrap">
            <div className="pr-head rv">
              <h2 className="pr-h2">{t.universes.title}</h2>
              <a className="pr-aside pr-only-desktop" href="#contact">
                <span>{t.universes.aside}</span>
                <ArrowRight className="pr-aside-arrow" />
              </a>
            </div>
            <div className="pr-cards">
              {t.universes.items.map((item) => {
                const Icon = UNIVERSE_ICONS[item.id];
                return (
                  <article className={`pr-card pr-card-${item.id} rv`} key={item.id}>
                    <div className="pr-card-art">
                      <Image src={item.image} alt="" width={488} height={266} sizes="(max-width: 760px) 60vw, 260px" />
                    </div>
                    <Icon className="pr-card-icon" />
                    <h3 className="pr-card-title">{item.title}</h3>
                    <p className="pr-card-text">{item.text}</p>
                    <a className="pr-card-go" href="#contact" aria-label={`${t.universes.cta} — ${item.title}`}>
                      <ArrowRight />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <PreviewCreations content={t.creations} a11y={t.a11y} dir={t.dir} />

        <section className="pr-approach" id="approche">
          <div className="pr-wrap pr-approach-grid">
            <p className="pr-statement rv">
              {t.approach.statement.map((line) => (
                <span key={line}>{line}</span>
              ))}
              <span>
                {t.approach.statementLast} <span className="pr-accent">{t.approach.statementAccent}</span>
              </span>
            </p>
            <ol className="pr-steps rv">
              {t.approach.steps.map((step, i) => {
                const Icon = STEP_ICONS[step.id];
                return (
                  <li className="pr-step" key={step.id}>
                    <Icon className="pr-step-icon" />
                    <h3 className="pr-step-title">{step.title}</h3>
                    <p className="pr-step-text">
                      <span className="pr-only-desktop">{step.text}</span>
                      <span className="pr-only-mobile">{step.short}</span>
                    </p>
                    {i < t.approach.steps.length - 1 && <ArrowRight className="pr-step-arrow" />}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="pr-contact" id="contact">
          <div className="pr-wrap">
            <div className="pr-banner-card rv">
              <Image className="pr-banner-ribbon pr-only-desktop" src="/images/refonte/contact-ribbon.webp" alt="" width={284} height={296} />
              <Image className="pr-banner-rocket pr-only-mobile" src="/images/refonte/contact-rocket.webp" alt="" width={196} height={210} />
              <div className="pr-banner-copy">
                <h2 className="pr-banner-title">
                  <span>{t.contact.titleLine1}</span> <span>{t.contact.titleLine2}</span>
                </h2>
                <p className="pr-banner-lead pr-only-desktop">{t.contact.lead}</p>
              </div>
              <button
                type="button"
                className="pr-btn pr-btn-primary pr-banner-btn"
                onClick={() => setFormOpen((v) => !v)}
                aria-expanded={formOpen}
                aria-controls="pr-devis"
              >
                {formOpen ? t.contact.closeForm : t.contact.ctaQuote} <ArrowUpRight className="pr-btn-icon" />
              </button>
            </div>

            <div className="pr-light-zone pr-form-wrap" id="pr-devis" ref={formRef} hidden={!formOpen}>
              {formOpen && <ContactForm content={t.contact} lang={lang} page="/preview-refonte" />}
            </div>
          </div>
        </section>
      </main>

      <footer className="pr-footer">
        <div className="pr-wrap pr-footer-in">
          <span dir="ltr">© 2026 Mazaly Digital</span>
          <nav className="pr-footer-legal" aria-label="Legal">
            {Object.values(t.footer.legal).map((item) => (
              <a href={item.href} key={item.href}>{item.label}</a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
