import Logo from "@/components/Logo";
import BriefForm from "@/components/BriefForm";
import PageEffects from "@/components/PageEffects";
import { CheckIcon } from "@/components/Icons";
import {
  valueProps,
  packages,
  subscription,
  techStack,
  steps,
  faqs,
  facts,
} from "@/lib/content.he";

function Wave({ d }) {
  return (
    <svg className="wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export const metadata = {
  title: "Mazaly Digital | פרטים נוספים, חבילות ושאלות נפוצות",
  description: "למה Mazaly Digital, איך זה עובד, שלוש חבילות בלי הפתעות, הטכנולוגיות שבהן אנחנו עובדים, ושאלות נפוצות.",
  alternates: { canonical: "/plus", languages: { he: "/plus", fr: "/fr/plus" } },
};

export default function PlusPage() {
  const techLoop = [...techStack, ...techStack, ...techStack, ...techStack];

  return (
    <div className="page" id="page">
      <PageEffects />
      <div className="progress" id="progress" aria-hidden="true"></div>

      <header className="top" id="top-bar">
        <div className="wrap top-in">
          <a className="brand" href="/" aria-label="Mazaly Digital">
            <Logo />
            <span>Mazaly<span className="brand-sub"> Digital</span></span>
          </a>
          <nav className="nav" aria-label="ניווט ראשי">
            <a className="nav-link" href="#why">למה אנחנו</a>
            <a className="nav-link" href="#packages">חבילות</a>
            <a className="nav-link" href="#faq">שאלות נפוצות</a>
            <a className="lang-switch" href="/fr/plus" hrefLang="fr">FR</a>
            <span className="mag nav-cta-zone"><a className="btn btn-mag" href="#brief"><span className="btn-in">לדבר על הפרויקט</span></a></span>
          </nav>
        </div>
      </header>

      <main>
        <section className="sec sec-first" id="why" aria-labelledby="t-why">
          <i className="orb orb-1" aria-hidden="true"></i>
          <div className="wrap">
            <a className="sec-back rv" href="/">← חזרה לדף הבית</a>
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-why">למה Mazaly Digital.</h2>
              <p className="sec-lead">אנחנו לא רק בונים אתר. אנחנו בונים את כל המערכת שעומדת מאחוריו, כדי שהרעיון שלכם באמת יעבוד.</p>
            </div>
            <div className="value-grid" data-stagger>
              {valueProps.map((v) => (
                <div className="value-card" key={v.title}>
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-text">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec sec-alt" aria-labelledby="t-chain">
          <Wave d="M0 58C160 8 320 8 520 44S900 98 1120 52 1340 14 1440 40V90H0Z" />
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-chain">כל רכיב מדבר עם האחרים.</h2>
              <p className="sec-lead">היתרון בספק אחד הוא שהאתר, ה-CRM, האוטומציות והסוכן חולקים את אותם נתונים מהיום הראשון.</p>
            </div>
            <div className="chain-wrap">
              <svg className="chain-svg" viewBox="0 0 1000 240" preserveAspectRatio="none" aria-hidden="true">
                <path className="cs-base" pathLength="1" d="M1000 92H875C750 92 750 148 625 148S500 92 375 92 250 148 125 148H0" />
                <path className="cs-pulse" pathLength="1" d="M1000 92H875C750 92 750 148 625 148S500 92 375 92 250 148 125 148H0" />
              </svg>
              <div className="chain-track" aria-hidden="true"><span className="chain-pulse"></span></div>
              <ol className="chain" data-stagger>
                <li className="chain-node"><span className="chain-n">1</span><p className="chain-label">אתר</p><p className="chain-text">מבקר ממלא את טופס ההצעה.</p></li>
                <li className="chain-node"><span className="chain-n">2</span><p className="chain-label">CRM</p><p className="chain-text">איש הקשר מופיע במשפך המכירות, יחד עם המקור שלו.</p></li>
                <li className="chain-node"><span className="chain-n">3</span><p className="chain-label">אוטומציה</p><p className="chain-text">ההצעה יוצאת ותזכורת נקבעת.</p></li>
                <li className="chain-node"><span className="chain-n">4</span><p className="chain-label">סוכן AI</p><p className="chain-text">הוא עונה ללקוח בוואטסאפ על שאלות.</p></li>
              </ol>
            </div>
            <p className="chain-note rv">אפשר גם להתחיל מרכיב אחד. את האחרים מחברים אחר כך בלי לבנות הכול מחדש.</p>
          </div>
        </section>

        <section className="sec" id="packages" aria-labelledby="t-packages">
          <Wave d="M0 44C200 90 400 84 640 46S1000-4 1220 38 1390 56 1440 40V90H0Z" />
          <i className="orb orb-3" aria-hidden="true"></i>
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-packages">שלוש חבילות, בלי הפתעות.</h2>
              <p className="sec-lead">בוחרים את נקודת ההתחלה הנכונה לעסק, ומתרחבים כשצריך. המחיר נקבע אחרי שיחת אפיון קצרה.</p>
            </div>
            <div className="pkg-grid" data-stagger>
              {packages.map((p) => (
                <div className={`pkg-card${p.featured ? " featured" : ""}`} key={p.name}>
                  {p.featured && <span className="pkg-badge">הכי נבחרת</span>}
                  <h3 className="pkg-name">{p.name}</h3>
                  <p className="pkg-tagline">{p.tagline}</p>
                  <ul className="pkg-items">
                    {p.items.map((it) => (
                      <li key={it}><CheckIcon />{it}</li>
                    ))}
                  </ul>
                  <span className="mag">
                    <a className={`btn btn-mag${p.featured ? "" : " btn-quiet"}`} href="/#brief">
                      <span className="btn-in">לדבר על {p.name}</span>
                    </a>
                  </span>
                </div>
              ))}
            </div>
            <div className="sub-card rv">
              <div>
                <h3>{subscription.title}</h3>
                <p>{subscription.text}</p>
              </div>
              <span className="mag">
                <a className="btn btn-mag btn-quiet" href="/#brief"><span className="btn-in">לשאול על המנוי</span></a>
              </span>
            </div>
          </div>
        </section>

        <div className="tech-marquee" aria-label="טכנולוגיות שבהן אנחנו עובדים">
          <div className="tech-track">
            {techLoop.map((t, i) => (
              <span className="tech-item" key={t + i}><i></i>{t}</span>
            ))}
          </div>
        </div>

        <section className="sec sec-alt" id="process" aria-labelledby="t-process">
          <Wave d="M0 36C220 86 420 90 640 50S1040-6 1240 34 1400 60 1440 48V90H0Z" />
          <div className="wrap">
            <div className="sec-head flip rv">
              <h2 className="sec-title" id="t-process">איך זה עובד.</h2>
              <p className="sec-lead">מסלול פשוט, עם אישור שלכם לפני כל שלב יקר.</p>
            </div>
            <ol className="steps" data-stagger>
              {steps.map((s) => (
                <li className="step" key={s.n}>
                  <p className="step-n">{s.n}</p>
                  <h3 className="step-name">{s.name}</h3>
                  <p className="step-text">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="sec" aria-labelledby="t-about">
          <Wave d="M0 50C180-4 380 10 600 52S980 96 1200 40 1380 20 1440 56V90H0Z" />
          <div className="wrap about">
            <div className="rv">
              <h2 className="sec-title" id="t-about">Mazaly Digital במבט אחד.</h2>
              <p className="about-text">Mazaly Digital היא סוכנות דיגיטל הפועלת מתל אביב. היא מלווה עסקים מהרעיון ועד למערכת שעובדת: אתר, CRM, אוטומציה, סוכן בינה מלאכותית ותוכן דיגיטלי, תחת צוות אחד.</p>
            </div>
            <dl className="facts rv">
              {facts.map((f) => (
                <div className="fact" key={f.dt}><dt>{f.dt}</dt><dd>{f.dd}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        <section className="sec sec-alt" id="faq" aria-labelledby="t-faq">
          <Wave d="M0 44C200 90 400 84 640 46S1000-4 1220 38 1390 56 1440 40V90H0Z" />
          <div className="wrap">
            <div className="sec-head flip rv">
              <h2 className="sec-title" id="t-faq">שאלות נפוצות.</h2>
              <p className="sec-lead">התשובות לשאלות שעסקים שואלים אותנו לפני שמתחילים.</p>
            </div>
            <div className="faq rv">
              {faqs.map((f, i) => (
                <details className="q" key={f.q} open={i === 0}>
                  <summary>{f.q}</summary>
                  <p className="q-a">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="brief" aria-labelledby="t-brief">
          <Wave d="M0 30C240 -6 460 14 700 56S1100 92 1280 44 1400 22 1440 34V90H0Z" />
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-brief">תארו את הפרויקט תוך שלושים שניות.</h2>
              <p className="sec-lead">בחרו מה אתם צריכים וכתבו על העסק. ההודעה מתכוננת בצד, מוכנה לשליחה.</p>
            </div>
            <BriefForm lang="he" />
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-in">
          <a className="foot-brand" href="/">Mazaly<span className="brand-sub"> Digital</span></a>
          <span>סוכנות דיגיטל · תל אביב · עברית וצרפתית</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}
