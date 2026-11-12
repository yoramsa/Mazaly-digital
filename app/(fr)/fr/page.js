import Logo from "@/components/Logo";
import HeroBackground from "@/components/HeroBackground";
import LeadForm from "@/components/LeadForm";
import PageEffects from "@/components/PageEffects";
import WhatsappFloat from "@/components/WhatsappFloat";
import { SiteIcon, AiIcon } from "@/components/Icons";
import { services } from "@/lib/content.fr";
import { waLink, siteUrl } from "@/lib/site";

const ICONS = { site: SiteIcon, ai: AiIcon };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/fr` }],
    },
    {
      "@type": "ItemList",
      itemListElement: services.map((s, i) => ({
        "@type": "Service",
        position: i + 1,
        name: s.title,
        description: s.text,
        provider: { "@id": `${siteUrl}/#organization` },
      })),
    },
  ],
};

export default function HomeFr() {
  return (
    <div className="page" id="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageEffects />
      <div className="progress" id="progress" aria-hidden="true"></div>
      <WhatsappFloat lang="fr" />

      <header className="top" id="top-bar">
        <div className="wrap top-in">
          <a className="brand" href="#top" aria-label="Mazaly Digital">
            <Logo />
            <span>Mazaly<span className="brand-sub"> Digital</span></span>
          </a>
          <nav className="nav" aria-label="Navigation principale">
            <a className="lang-switch" href="/" hrefLang="he">HE</a>
            <span className="mag nav-cta-zone"><a className="btn btn-mag" href="#brief"><span className="btn-in">Laisser mes coordonnées</span></a></span>
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
                <span className="w" style={{ "--i": 0 }}>Un</span>{" "}
                <span className="w" style={{ "--i": 1 }}>site</span>{" "}
                <span className="w" style={{ "--i": 2 }}>qui</span>{" "}
                <span className="w" style={{ "--i": 3 }}>travaille</span>{" "}
                <span className="w" style={{ "--i": 4 }}>pour</span>{" "}
                <span className="w" style={{ "--i": 5 }}>vous,</span>{" "}
                <span className="w hl" style={{ "--i": 6 }}>même quand vous dormez.</span>
              </h1>
              <p className="hero-lead">On vous construit un site rapide et un agent IA qui répond à vos clients sur WhatsApp, 24h/24.</p>
              <div className="hero-actions">
                <span className="mag"><a className="btn btn-mag" href="#brief"><span className="btn-in">Laisser mes coordonnées</span></a></span>
                <a
                  className="btn btn-quiet"
                  href={waLink("Bonjour, je voudrais des informations sur la création de site et l'agent IA.")}
                  target="_blank"
                  rel="noopener"
                >
                  <span className="btn-in">Parler sur WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="sec sec-first" id="services" aria-labelledby="t-services">
          <i className="orb orb-1" aria-hidden="true"></i>
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-services">Ce qu'on fait.</h2>
            </div>
            <div className="svc-grid" data-stagger>
              {services.map((s) => {
                const Icon = ICONS[s.icon];
                return (
                  <article className="svc-card" key={s.id}>
                    <span className="svc-icon"><Icon /></span>
                    <h3 className="svc-title">{s.title}</h3>
                    <p className="svc-text">{s.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="statement-sec rv">
          <span className="statement-eyebrow">Prêt à vous lancer ?</span>
          <p className="statement-title">On vous <span className="hl" style={{ "--i": 0 }}>le construit.</span></p>
        </section>

        <section className="sec sec-alt" id="brief" aria-labelledby="t-brief">
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-brief">Intéressé(e) ?</h2>
              <p className="sec-lead">Laissez votre nom et votre e-mail, on vous recontacte dans un jour ouvré.</p>
            </div>
            <LeadForm lang="fr" page="/fr" />
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <nav className="foot-legal" aria-label="Informations légales">
            <a className="foot-link" href="/fr/legal/mentions">Mentions légales</a>
            <a className="foot-link" href="/fr/legal/confidentialite">Confidentialité</a>
            <a className="foot-link" href="/fr/legal/abonnement">Conditions d'abonnement</a>
            <a className="foot-link" href="/fr/legal/accessibilite">Accessibilité</a>
          </nav>
          <div className="foot-in">
            <a className="foot-brand" href="#top">Mazaly<span className="brand-sub"> Digital</span></a>
            <span>Agence digitale · Tel Aviv</span>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
