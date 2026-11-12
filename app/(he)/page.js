import Logo from "@/components/Logo";
import HeroBackground from "@/components/HeroBackground";
import LeadForm from "@/components/LeadForm";
import PageEffects from "@/components/PageEffects";
import WhatsappFloat from "@/components/WhatsappFloat";
import { SiteIcon, AiIcon } from "@/components/Icons";
import { services } from "@/lib/content.he";
import { waLink, siteUrl } from "@/lib/site";

const ICONS = { site: SiteIcon, ai: AiIcon };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "דף הבית", item: siteUrl }],
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

export default function Home() {
  return (
    <div className="page" id="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageEffects />
      <div className="progress" id="progress" aria-hidden="true"></div>
      <WhatsappFloat lang="he" />

      <header className="top" id="top-bar">
        <div className="wrap top-in">
          <a className="brand" href="#top" aria-label="Mazaly Digital">
            <Logo />
            <span>Mazaly<span className="brand-sub"> Digital</span></span>
          </a>
          <nav className="nav" aria-label="ניווט ראשי">
            <a className="lang-switch" href="/fr" hrefLang="fr">FR</a>
            <span className="mag nav-cta-zone"><a className="btn btn-mag" href="#brief"><span className="btn-in">להשאיר פרטים</span></a></span>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <HeroBackground />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-dot"></span>סוכנות דיגיטל · תל אביב</p>
              <h1 className="hero-title">
                <span className="w" style={{ "--i": 0 }}>אתר</span>{" "}
                <span className="w" style={{ "--i": 1 }}>שעובד</span>{" "}
                <span className="w" style={{ "--i": 2 }}>בשבילכם,</span>{" "}
                <span className="w hl" style={{ "--i": 3 }}>גם כשאתם ישנים.</span>
              </h1>
              <p className="hero-lead">בונים לכם אתר מהיר וסוכן בינה מלאכותית שעונה ללקוחות בוואטסאפ, 24/7.</p>
              <div className="hero-actions">
                <span className="mag"><a className="btn btn-mag" href="#brief"><span className="btn-in">להשאיר פרטים</span></a></span>
                <a
                  className="btn btn-quiet"
                  href={waLink("היי, אני רוצה לשמוע פרטים על בניית אתר וסוכן AI.")}
                  target="_blank"
                  rel="noopener"
                >
                  <span className="btn-in">לדבר בוואטסאפ</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="sec sec-first" id="services" aria-labelledby="t-services">
          <i className="orb orb-1" aria-hidden="true"></i>
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-services">מה אנחנו עושים.</h2>
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
          <span className="statement-eyebrow">מוכנים להתחיל?</span>
          <p className="statement-title">בואו <span className="hl" style={{ "--i": 0 }}>נעשה את זה.</span></p>
        </section>

        <section className="sec sec-alt" id="brief" aria-labelledby="t-brief">
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-brief">מתעניינים?</h2>
              <p className="sec-lead">השאירו שם ואימייל, ונחזור אליכם בתוך יום עסקים.</p>
            </div>
            <LeadForm lang="he" page="/" />
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <nav className="foot-legal" aria-label="מידע משפטי">
            <a className="foot-link" href="/legal/tnaim">תנאי שימוש</a>
            <a className="foot-link" href="/legal/pratiut">פרטיות</a>
            <a className="foot-link" href="/legal/manuy">תנאי מנוי</a>
            <a className="foot-link" href="/legal/hangasha">הנגשה</a>
          </nav>
          <div className="foot-in">
            <a className="foot-brand" href="#top">Mazaly<span className="brand-sub"> Digital</span></a>
            <span>סוכנות דיגיטל · תל אביב</span>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
