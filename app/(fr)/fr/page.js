import Logo from "@/components/Logo";
import HeroBackground from "@/components/HeroBackground";
import ChatDemo from "@/components/ChatDemo";
import LeadForm from "@/components/LeadForm";
import PageEffects from "@/components/PageEffects";
import { ServiceIcon } from "@/components/Icons";
import { services } from "@/lib/content.fr";

export default function HomeFr() {
  return (
    <div className="page" id="page">
      <PageEffects />
      <div className="progress" id="progress" aria-hidden="true"></div>

      <header className="top" id="top-bar">
        <div className="wrap top-in">
          <a className="brand" href="#top" aria-label="Mazaly Digital">
            <Logo />
            <span>Mazaly<span className="brand-sub"> Digital</span></span>
          </a>
          <nav className="nav" aria-label="Navigation principale">
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="/fr/plus">En savoir plus</a>
            <a className="lang-switch" href="/" hrefLang="he">HE</a>
            <span className="mag nav-cta-zone"><a className="btn btn-mag" href="#brief"><span className="btn-in">Parler du projet</span></a></span>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <HeroBackground />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-dot"></span>Agence digitale · Tel Aviv</p>
              <h1 className="hero-title">
                <span className="w" style={{ "--i": 0 }}>Transformons</span>{" "}
                <span className="w" style={{ "--i": 1 }}>votre</span>{" "}
                <span className="w" style={{ "--i": 2 }}>idée</span>{" "}
                <span className="w hl" style={{ "--i": 3 }}>en réalité.</span>
              </h1>
              <p className="hero-lead">Sites, CRM, automatisation, agents IA et contenu — sous une seule équipe.</p>
              <div className="hero-actions">
                <span className="mag"><a className="btn btn-mag" href="#brief"><span className="btn-in">Décrire mon projet</span></a></span>
                <a className="btn btn-quiet" href="/fr/plus"><span className="btn-in">En savoir plus</span></a>
              </div>
            </div>

            <div className="stage" id="stage">
              <span className="float f1" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--ok)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                Plateforme sur mesure
              </span>
              <span className="float f2" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg>
                Hébreu · Français
              </span>
              <div className="tilt" id="tilt">
                <ChatDemo lang="fr" />
              </div>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {Array.from({ length: 8 }).map((_, loop) => (
              <span key={loop} style={{ display: "contents" }}>
                <span className="mq fill">Sites</span><span className="mq-dot"></span>
                <span className="mq">CRM</span><span className="mq-dot"></span>
                <span className="mq fill">Automatisation</span><span className="mq-dot"></span>
                <span className="mq">Agent IA</span><span className="mq-dot"></span>
                <span className="mq fill">Contenu digital</span><span className="mq-dot"></span>
                <span className="mq">Applications</span><span className="mq-dot"></span>
              </span>
            ))}
          </div>
        </div>

        <section className="sec sec-first" id="services" aria-labelledby="t-services">
          <i className="orb orb-1" aria-hidden="true"></i>
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-services">Ce qu'on fait.</h2>
              <a className="sec-more" href="/fr/plus">Tous les détails →</a>
            </div>
            <div className="svc-list" data-stagger>
              {services.map((s) => (
                <article className="svc" key={s.name}>
                  <span className="ico"><ServiceIcon name={s.icon} /></span>
                  <h3 className="svc-name">{s.name}</h3>
                  <p className="svc-text">{s.text}</p>
                  <ul className="tags">
                    {s.tags.map((t) => <li className="tag" key={t}>{t}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sec sec-alt" id="brief" aria-labelledby="t-brief">
          <i className="orb orb-3" aria-hidden="true"></i>
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-brief">Prêt à commencer ?</h2>
              <p className="sec-lead">Quatre questions rapides, et recevez un devis gratuit.</p>
            </div>
            <LeadForm lang="fr" page="/fr" />
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-in">
          <a className="foot-brand" href="#top">Mazaly<span className="brand-sub"> Digital</span></a>
          <a className="foot-link" href="/fr/plus">En savoir plus, nos offres et la FAQ</a>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}
