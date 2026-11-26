"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import PreviewShell from "@/components/preview/PreviewShell";
import PreviewCreations from "@/components/preview/PreviewCreations";
import { CarouselNav, useCarousel } from "@/components/preview/Carousel";
import { ArrowRight, ArrowUpRight, Play, WhatsApp, Monitor, Layers, Gamepad, Bulb, Bars } from "@/components/preview/PreviewIcons";
import { homePath, previewContent, shellContent } from "@/lib/content.preview";
import { track } from "@/lib/analytics";
import { waLink } from "@/lib/site";

const UNIVERSE_ICONS = { digital: Monitor, creation: Layers, experiences: Gamepad };
const STEP_ICONS = { imagine: Bulb, cree: Layers, grandir: Bars };
const delay = (i) => ({ "--d": `${i * 0.09}s` });

export default function PreviewHome({ lang }) {
  const t = previewContent[lang];
  const shell = shellContent(lang);
  const [formOpen, setFormOpen] = useState(false);
  const formRef = useRef(null);
  const univers = useCarousel(t.dir);

  useEffect(() => {
    if (formOpen) formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [formOpen]);

  return (
    <PreviewShell lang={lang} shell={shell} homeHref={homePath[lang]} switchHref={homePath} variant="home">
      <main>
        <section className="pr-hero" id="accueil">
          <div className="sparkles" id="sparkles" aria-hidden="true"></div>
          <div className="pr-wrap pr-hero-grid">
            <div className="pr-hero-visual" id="stage" aria-hidden="true">
              <div className="pr-hero-float">
                <div className="pr-hero-tilt" id="tilt">
                  <Image src="/images/refonte/hero-m.webp" alt="" width={940} height={720} priority sizes="(max-width: 899px) 76vw, 560px" />
                </div>
              </div>
            </div>
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
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="pr-ticker" aria-hidden="true">
          <div className="pr-ticker-track">
            {[...t.ticker, ...t.ticker].map((word, i) => (
              <span className="pr-ticker-item" key={i}>
                {word} <i>✦</i>
              </span>
            ))}
          </div>
        </div>

        <section className="pr-universes" id="univers">
          <div className="pr-wrap">
            <div className="pr-head rv">
              <h2 className="pr-h2">{t.universes.title}</h2>
              <a className="pr-aside pr-only-desktop" href="#contact">
                <span>{t.universes.aside}</span>
                <ArrowRight className="pr-aside-arrow" />
              </a>
            </div>
          </div>
          <div className="pr-wrap pr-wrap-bleed">
            <ul className="pr-cards" ref={univers.trackRef} aria-label={t.universes.title}>
              {t.universes.items.map((item, i) => {
                const Icon = UNIVERSE_ICONS[item.id];
                return (
                  <li className="pr-slide" key={item.id}>
                    <article className={`pr-card pr-card-${item.id} rv`} style={delay(i)}>
                      <div className="pr-card-art">
                        <Image src={item.image} alt="" width={488} height={266} sizes="(max-width: 899px) 80vw, 300px" />
                      </div>
                      <div className="pr-card-body">
                        <Icon className="pr-card-icon" />
                        <h3 className="pr-card-title">{item.title}</h3>
                        <p className="pr-card-text">{item.text}</p>
                      </div>
                      <a className="pr-card-go" href="#contact" aria-label={`${t.universes.cta} — ${item.title}`}>
                        <ArrowRight />
                      </a>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="pr-wrap">
            <CarouselNav pages={univers.pages} page={univers.page} goTo={univers.goTo} a11y={t.a11y} arrows={false} tone="light" />
          </div>
        </section>

        <PreviewCreations content={t.creations} a11y={t.a11y} dir={t.dir} />

        <section className="pr-approach" id="approche">
          <div className="pr-wrap pr-approach-grid">
            <h2 className="pr-statement rv">
              {t.approach.statement.map((line) => (
                <span key={line}>{line}</span>
              ))}
              <span>
                {t.approach.statementLast} <span className="pr-accent">{t.approach.statementAccent}</span>
              </span>
            </h2>
            <ol className="pr-steps">
              {t.approach.steps.map((step, i) => {
                const Icon = STEP_ICONS[step.id];
                return (
                  <li className="pr-step rv" key={step.id} style={delay(i + 1)}>
                    <span className="pr-step-icon-wrap"><Icon className="pr-step-icon" /></span>
                    <div className="pr-step-body">
                      <h3 className="pr-step-title">{step.title}</h3>
                      <p className="pr-step-text">{step.text}</p>
                    </div>
                    {i < t.approach.steps.length - 1 && <ArrowRight className="pr-step-arrow" />}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="pr-contact" id="contact">
          <div className="pr-wrap">
            <div className="pr-banner-card rv" data-wa-hide>
              <Image className="pr-banner-art pr-only-desktop" src="/images/refonte/contact-ribbon.webp" alt="" width={284} height={296} />
              <Image className="pr-banner-art pr-banner-rocket pr-only-mobile" src="/images/refonte/contact-rocket.webp" alt="" width={196} height={210} />
              <div className="pr-banner-copy">
                <h2 className="pr-banner-title">
                  <span>{t.contact.titleLine1}</span> <span>{t.contact.titleLine2}</span>
                </h2>
                <p className="pr-banner-lead">{t.contact.lead}</p>
              </div>
              <div className="pr-banner-actions">
                <button
                  type="button"
                  className="pr-btn pr-btn-primary pr-banner-btn"
                  onClick={() => setFormOpen((v) => !v)}
                  aria-expanded={formOpen}
                  aria-controls="pr-devis"
                >
                  {formOpen ? t.contact.closeForm : t.contact.ctaQuote} <ArrowUpRight className="pr-btn-icon" />
                </button>
                <a
                  className="pr-wa-round"
                  href={waLink(t.contact.message)}
                  target="_blank"
                  rel="noopener"
                  aria-label={t.a11y.whatsapp}
                  onClick={() => track("whatsapp_click", { lang, source: "contact" })}
                >
                  <WhatsApp />
                </a>
              </div>
            </div>

            <div className="pr-light-zone pr-form-wrap" id="pr-devis" ref={formRef} hidden={!formOpen} data-wa-hide>
              {formOpen && <ContactForm content={t.contact} lang={lang} page={homePath[lang]} />}
            </div>
          </div>
        </section>
      </main>
    </PreviewShell>
  );
}
