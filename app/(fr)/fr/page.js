import Logo from "@/components/Logo";
import HeroBackground from "@/components/HeroBackground";
import { HeroVisual, BrowserMockup, ChatMockup } from "@/components/Mockups";
import LeadForm from "@/components/LeadForm";
import PageEffects from "@/components/PageEffects";
import WhatsappFloat from "@/components/WhatsappFloat";
import { SiteIcon, AiIcon, EcommerceIcon, CustomIcon, TargetIcon, ChatIcon, BoltIcon } from "@/components/Icons";
import { services, demos, whyUs, heroChat } from "@/lib/content.fr";
import { waLink, siteUrl, whatsappDisplay } from "@/lib/site";

const SVC_ICONS = { site: SiteIcon, shop: EcommerceIcon, ai: AiIcon, custom: CustomIcon };
const WHY_ICONS = { target: TargetIcon, chat: ChatIcon, bolt: BoltIcon };

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
            <div className="nav-links">
              <a className="nav-link" href="#services">Services</a>
              <a className="nav-link" href="#demos">Démos</a>
              <a className="nav-link" href="#why">Pourquoi nous</a>
            </div>
            <a className="lang-switch" href="/" hrefLang="he">HE</a>
            <span className="mag nav-cta-zone"><a className="btn btn-mag" href="#contact"><span className="btn-in">Parlons-en</span></a></span>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <HeroBackground />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-dot"></span>Studio digital · Israël</p>
              <h1 className="hero-title">
                <span className="hl-line">
                  <span className="w" style={{ "--i": 0 }}>Votre</span>{" "}
                  <span className="w" style={{ "--i": 1 }}>entreprise</span>{" "}
                  <span className="w" style={{ "--i": 2 }}>mérite</span>{" "}
                  <span className="w" style={{ "--i": 3 }}>mieux.</span>
                </span>
                <span className="hl-line">
                  <span className="w" style={{ "--i": 4 }}>On</span>{" "}
                  <span className="w" style={{ "--i": 5 }}>est</span>{" "}
                  <span className="w" style={{ "--i": 6 }}>là</span>{" "}
                  <span className="w hl" style={{ "--i": 7 }}>pour</span>{" "}
                  <span className="w hl" style={{ "--i": 8 }}>la</span>{" "}
                  <span className="w hl" style={{ "--i": 9 }}>construire.</span>
                </span>
              </h1>
              <p className="hero-lead">Sites internet, boutiques digitales et solutions intelligentes qui font avancer votre entreprise.</p>
              <div className="hero-actions">
                <span className="mag"><a className="btn btn-mag" href="#contact"><span className="btn-in">Parlons de votre entreprise</span></a></span>
                <a className="btn btn-quiet" href="#services"><span className="btn-in">Découvrez ce qu'on fait</span></a>
              </div>
            </div>
            <HeroVisual chips={{ chip1: "✓ Optimisé mobile", chip2: "🤖 IA incluse", chat: heroChat }} />
          </div>
        </section>

        <section className="sec sec-first" id="services" aria-labelledby="t-services">
          <i className="orb orb-1" aria-hidden="true"></i>
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-services">Ce qu'on fait pour vous.</h2>
            </div>
            <div className="svc-grid" data-stagger>
              {services.map((s) => {
                const Icon = SVC_ICONS[s.icon];
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

        <section className="sec sec-alt" id="demos" aria-labelledby="t-demos">
          <i className="orb orb-2" aria-hidden="true"></i>
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-demos">Un aperçu de ce qu'on peut créer.</h2>
              <p className="sec-lead">Des concepts de démonstration — pas des projets clients existants.</p>
            </div>
            <div className="demo-grid" data-stagger>
              {demos.map((d) => (
                <article className="demo-card" key={d.id}>
                  <span className="demo-badge">Concept de démonstration</span>
                  <div className="demo-visual">
                    {d.kind === "browser" ? <BrowserMockup variant={d.variant} /> : <ChatMockup lines={d.chat} />}
                  </div>
                  <h3 className="demo-title">{d.title}</h3>
                  <p className="demo-text">{d.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="why" aria-labelledby="t-why">
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-why">Pourquoi Mazaly Digital.</h2>
            </div>
            <div className="why-grid rv">
              {whyUs.map((w) => {
                const Icon = WHY_ICONS[w.icon];
                return (
                  <div className="why-item" key={w.id}>
                    <span className="why-icon"><Icon /></span>
                    <h3 className="why-title">{w.title}</h3>
                    <p className="why-text">{w.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="statement-sec rv">
          <span className="statement-eyebrow">Prêt à vous lancer ?</span>
          <p className="statement-title">On vous <span className="hl" style={{ "--i": 0 }}>le construit.</span></p>
        </section>

        <section className="sec sec-alt" id="contact" aria-labelledby="t-contact">
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-contact">Vous avez une idée ? Parlons-en.</h2>
              <p className="sec-lead">Laissez vos coordonnées, on vous recontacte rapidement.</p>
            </div>
            <div className="contact-grid">
              <LeadForm lang="fr" page="/fr" />
              <p className="contact-wa">
                Ou écrivez-nous directement :
                <span className="mag">
                  <a
                    className="btn btn-ghost btn-wa"
                    href={waLink("Bonjour, je voudrais des informations sur Mazaly Digital.")}
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="btn-in">Parlez-nous sur WhatsApp — {whatsappDisplay}</span>
                  </a>
                </span>
              </p>
            </div>
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
            <span>Studio digital · Israël</span>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
