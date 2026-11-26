"use client";

import { useState } from "react";
import Logo from "@/components/Logo";
import HeroBackground from "@/components/HeroBackground";
import PageEffects from "@/components/PageEffects";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import WhatsappFloat from "@/components/WhatsappFloat";
import PreviewCreations from "@/components/preview/PreviewCreations";
import { previewContent } from "@/lib/content.preview";
import { waLink } from "@/lib/site";

const UNIVERSE_ICONS = {
  digital: (
    <svg className="pr-universe-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  creation: (
    <svg className="pr-universe-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 19l7-7 2 2-7 7-2-2Z" />
      <path d="M16 6l2-2 2 2-2 2-2-2ZM4 20l1.5-5L13 7.5l4 4L9.5 19 4 20Z" />
    </svg>
  ),
  experiences: (
    <svg className="pr-universe-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  ),
};

export default function PreviewHome() {
  const [lang, setLang] = useState("fr");
  const t = previewContent[lang];
  const otherLang = lang === "fr" ? "he" : "fr";

  return (
    <div className="pr-root" dir={t.dir} lang={lang}>
      <PageEffects />
      <WhatsappFloat lang={lang} message={t.hero.ctaPrimaryMessage} />
      <div className="progress" id="progress"></div>

      <div className="pr-banner">
        <span>{t.banner.label}</span>
        <a href={t.banner.backHref}>{t.banner.backLabel}</a>
      </div>

      <header className="top" id="top-bar">
        <div className="wrap top-in">
          <a className="brand" href="#top" aria-label="Mazaly Digital">
            <Logo />
            <span>{t.brand.name}<span className="brand-sub"> {t.brand.sub}</span></span>
          </a>
          <nav className="nav" aria-label="Navigation">
            <a className="nav-link" href="#universes">{t.nav.universes}</a>
            <a className="nav-link" href="#creations">{t.nav.creations}</a>
            <a className="nav-link" href="#approach">{t.nav.approach}</a>
            <a className="nav-link" href="#contact">{t.nav.contact}</a>
            <button type="button" className="lang-switch pr-lang-btn" onClick={() => setLang(otherLang)} aria-label={t.nav.langSwitch}>
              {t.nav.langSwitch}
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <HeroBackground />
          <div className="wrap hero-grid">
            <div className="pr-hero-copy hero-copy">
              <div className="pr-mark pr-float">
                <div className="pr-mark-stage" id="stage">
                  <div className="pr-mark-tilt" id="tilt">
                    <Logo />
                  </div>
                </div>
              </div>
              <span className="eyebrow"><span className="eyebrow-dot"></span>{t.hero.eyebrow}</span>
              <h1 className="hero-title">
                {t.hero.title.split(" ").map((word, i, words) => (
                  <span key={i}>
                    <span className={i === words.length - 1 ? "w hl" : "w"} style={{ "--i": i }}>{word}</span>
                    {i < words.length - 1 ? " " : ""}
                  </span>
                ))}
              </h1>
              <p className="hero-lead">{t.hero.lead}</p>
              <div className="hero-actions">
                <span className="mag">
                  <a className="btn btn-mag" href={waLink(t.hero.ctaPrimaryMessage)}>
                    <span className="btn-in">{t.hero.ctaPrimary}</span>
                  </a>
                </span>
                <a className="btn btn-quiet" href="#creations">{t.hero.ctaSecondary}</a>
              </div>
            </div>
          </div>
        </section>

        <section className="sec" id="universes">
          <div className="wrap">
            <div className="sec-head rv in">
              <div>
                <span className="eyebrow"><span className="eyebrow-dot"></span>{t.universes.eyebrow}</span>
                <h2 className="sec-title">{t.universes.title}</h2>
              </div>
              <p className="sec-lead">{t.universes.lead}</p>
            </div>
            <div className="pr-universes-grid" data-stagger>
              {t.universes.items.map((item) => (
                <div className="svc-card" key={item.id}>
                  <span className="svc-icon">{UNIVERSE_ICONS[item.id]}</span>
                  <h3 className="svc-title">{item.title}</h3>
                  <p className="svc-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PreviewCreations content={t.creations} waHref={waLink(t.creations.next.message)} />

        <section className="sec sec-alt pr-light-zone" id="approach">
          <Process content={t.approach} />
        </section>

        <section className="sec" id="contact">
          <div className="wrap">
            <div className="statement-sec rv in">
              <span className="statement-eyebrow">{t.contact.eyebrow}</span>
              <h2 className="statement-title">{t.contact.title}</h2>
              <p className="hero-lead" style={{ marginInline: "auto", marginTop: 18 }}>{t.contact.lead}</p>
              <div className="hero-actions" style={{ justifyContent: "center", marginTop: 26 }}>
                <span className="mag">
                  <a className="btn btn-mag" href="#devis">
                    <span className="btn-in">{t.contact.ctaQuoteLabel}</span>
                  </a>
                </span>
                <a className="btn btn-quiet" href={waLink(t.contact.message)} target="_blank" rel="noopener">{t.contact.ctaLabel}</a>
              </div>
            </div>
            <div className="pr-light-zone" id="devis" style={{ maxWidth: 680, marginInline: "auto", marginTop: 56 }}>
              <ContactForm content={t.contact} lang={lang} page="/preview-refonte" />
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-in">
          <a className="foot-brand" href="#top">{t.brand.name}<span className="brand-sub"> {t.brand.sub}</span></a>
          <span>© 2026 {t.footer.tagline}</span>
        </div>
        <nav className="foot-legal" aria-label="Légal">
          {Object.values(t.footer.legal).map((item) => (
            <a className="foot-link" href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>
      </footer>
    </div>
  );
}
