import Logo from "@/components/Logo";
import HeroBackground from "@/components/HeroBackground";
import ChatDemo from "@/components/ChatDemo";
import BriefForm from "@/components/BriefForm";
import PageEffects from "@/components/PageEffects";
import { ServiceIcon } from "@/components/Icons";
import { services } from "@/lib/content.he";

export default function Home() {
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
          <nav className="nav" aria-label="ניווט ראשי">
            <a className="nav-link" href="#services">שירותים</a>
            <a className="nav-link" href="/plus">לפרטים נוספים</a>
            <a className="lang-switch" href="/fr" hrefLang="fr">FR</a>
            <span className="mag nav-cta-zone"><a className="btn btn-mag" href="#brief"><span className="btn-in">לדבר על הפרויקט</span></a></span>
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
                <span className="w" style={{ "--i": 0 }}>בואו</span>{" "}
                <span className="w" style={{ "--i": 1 }}>נהפוך</span>{" "}
                <span className="w" style={{ "--i": 2 }}>את</span>{" "}
                <span className="w" style={{ "--i": 3 }}>הרעיון</span>{" "}
                <span className="w" style={{ "--i": 4 }}>שלכם</span>{" "}
                <span className="w hl" style={{ "--i": 5 }}>למציאות.</span>
              </h1>
              <p className="hero-lead">אתרים, CRM, אוטומציה, סוכני AI ותוכן — הכול תחת צוות אחד.</p>
              <div className="hero-actions">
                <span className="mag"><a className="btn btn-mag" href="#brief"><span className="btn-in">לתאר את הפרויקט</span></a></span>
                <a className="btn btn-quiet" href="/plus"><span className="btn-in">לפרטים נוספים</span></a>
              </div>
            </div>

            <div className="stage" id="stage">
              <span className="float f1" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--ok)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                פלטפורמה מותאמת אישית
              </span>
              <span className="float f2" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg>
                עברית · צרפתית
              </span>
              <div className="tilt" id="tilt">
                <ChatDemo lang="he" />
              </div>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {Array.from({ length: 8 }).map((_, loop) => (
              <span key={loop} style={{ display: "contents" }}>
                <span className="mq fill">אתרים</span><span className="mq-dot"></span>
                <span className="mq">CRM</span><span className="mq-dot"></span>
                <span className="mq fill">אוטומציה</span><span className="mq-dot"></span>
                <span className="mq">סוכן AI</span><span className="mq-dot"></span>
                <span className="mq fill">תוכן דיגיטלי</span><span className="mq-dot"></span>
                <span className="mq">אפליקציות</span><span className="mq-dot"></span>
              </span>
            ))}
          </div>
        </div>

        <section className="sec sec-first" id="services" aria-labelledby="t-services">
          <i className="orb orb-1" aria-hidden="true"></i>
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-services">מה אנחנו עושים.</h2>
              <a className="sec-more" href="/plus">לכל הפרטים ←</a>
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
              <h2 className="sec-title" id="t-brief">בואו נתחיל.</h2>
              <p className="sec-lead">ספרו לנו במשפט על העסק. ההודעה מתכוננת בצד, מוכנה לשליחה.</p>
            </div>
            <BriefForm lang="he" />
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-in">
          <a className="foot-brand" href="#top">Mazaly<span className="brand-sub"> Digital</span></a>
          <a className="foot-link" href="/plus">לפרטים נוספים, חבילות ושאלות נפוצות</a>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}
