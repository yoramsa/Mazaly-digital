import Logo from "@/components/Logo";
import HeroBackground from "@/components/HeroBackground";
import { HeroVisual, BrowserMockup, ChatMockup } from "@/components/Mockups";
import LeadForm from "@/components/LeadForm";
import PageEffects from "@/components/PageEffects";
import WhatsappFloat from "@/components/WhatsappFloat";
import { SiteIcon, AiIcon, EcommerceIcon, CustomIcon, TargetIcon, ChatIcon, BoltIcon } from "@/components/Icons";
import { services, demos, whyUs, heroChat } from "@/lib/content.he";
import { waLink, siteUrl, whatsappDisplay } from "@/lib/site";

const SVC_ICONS = { site: SiteIcon, shop: EcommerceIcon, ai: AiIcon, custom: CustomIcon };
const WHY_ICONS = { target: TargetIcon, chat: ChatIcon, bolt: BoltIcon };

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
            <div className="nav-links">
              <a className="nav-link" href="#services">שירותים</a>
              <a className="nav-link" href="#demos">דוגמאות</a>
              <a className="nav-link" href="#why">למה אנחנו</a>
            </div>
            <a className="lang-switch" href="/fr" hrefLang="fr">FR</a>
            <span className="mag nav-cta-zone"><a className="btn btn-mag" href="#contact"><span className="btn-in">בואו נדבר</span></a></span>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <HeroBackground />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-dot"></span>סטודיו דיגיטלי · ישראל</p>
              <h1 className="hero-title">
                <span className="hl-line">
                  <span className="w" style={{ "--i": 0 }}>העסק</span>{" "}
                  <span className="w" style={{ "--i": 1 }}>שלכם</span>{" "}
                  <span className="w" style={{ "--i": 2 }}>ראוי</span>{" "}
                  <span className="w" style={{ "--i": 3 }}>ליותר.</span>
                </span>
                <span className="hl-line">
                  <span className="w" style={{ "--i": 4 }}>אנחנו</span>{" "}
                  <span className="w" style={{ "--i": 5 }}>כאן</span>{" "}
                  <span className="w" style={{ "--i": 6 }}>כדי</span>{" "}
                  <span className="w hl" style={{ "--i": 7 }}>לבנות</span>{" "}
                  <span className="w hl" style={{ "--i": 8 }}>את</span>{" "}
                  <span className="w hl" style={{ "--i": 9 }}>זה.</span>
                </span>
              </h1>
              <p className="hero-lead">אתרים, חנויות דיגיטליות ופתרונות חכמים שעוזרים לעסק שלכם להתקדם.</p>
              <div className="hero-actions">
                <span className="mag"><a className="btn btn-mag" href="#contact"><span className="btn-in">בואו נדבר על העסק שלכם</span></a></span>
                <a className="btn btn-quiet" href="#services"><span className="btn-in">גלו מה אנחנו עושים</span></a>
              </div>
            </div>
            <HeroVisual chips={{ chip1: "✓ מותאם למובייל", chip2: "🤖 AI כלול", chat: heroChat }} />
          </div>
        </section>

        <section className="sec sec-first" id="services" aria-labelledby="t-services">
          <i className="orb orb-1" aria-hidden="true"></i>
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-services">מה אנחנו עושים בשבילכם.</h2>
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
              <h2 className="sec-title" id="t-demos">קצת מהיכולות שלנו.</h2>
              <p className="sec-lead">דוגמאות קונספט להמחשה — לא פרויקטים של לקוחות קיימים.</p>
            </div>
            <div className="demo-grid" data-stagger>
              {demos.map((d) => (
                <article className="demo-card" key={d.id}>
                  <span className="demo-badge">קונספט להמחשה</span>
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
              <h2 className="sec-title" id="t-why">למה Mazaly Digital.</h2>
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
          <span className="statement-eyebrow">מוכנים להתחיל?</span>
          <p className="statement-title">בואו <span className="hl" style={{ "--i": 0 }}>נעשה את זה.</span></p>
        </section>

        <section className="sec sec-alt" id="contact" aria-labelledby="t-contact">
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-contact">יש לכם רעיון? בואו נדבר.</h2>
              <p className="sec-lead">השאירו פרטים ונחזור אליכם בהקדם.</p>
            </div>
            <div className="contact-grid">
              <LeadForm lang="he" page="/" />
              <p className="contact-wa">
                או דברו איתנו ישר:
                <span className="mag">
                  <a
                    className="btn btn-ghost btn-wa"
                    href={waLink("היי, אני רוצה לשמוע פרטים על Mazaly Digital.")}
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="btn-in">דברו איתנו בוואטסאפ — <bdi>{whatsappDisplay}</bdi></span>
                  </a>
                </span>
              </p>
            </div>
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
            <span>סטודיו דיגיטלי · ישראל</span>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
