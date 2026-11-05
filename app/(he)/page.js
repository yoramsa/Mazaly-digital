import HeroBackground from "@/components/HeroBackground";
import ChatDemo from "@/components/ChatDemo";
import BriefForm from "@/components/BriefForm";
import PageEffects from "@/components/PageEffects";
import { ServiceIcon, CheckIcon } from "@/components/Icons";
import {
  timeline,
  valueProps,
  packages,
  subscription,
  techStack,
  services,
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

export default function Home() {
  const techLoop = [...techStack, ...techStack, ...techStack, ...techStack];

  return (
    <div className="page" id="page">
      <PageEffects />
      <div className="progress" id="progress" aria-hidden="true"></div>

      <header className="top" id="top-bar">
        <div className="wrap top-in">
          <a className="brand" href="#top" aria-label="Mazaly Digital">
            <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M5 24 12 9l7 11 8-14" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="5" cy="24" r="3" fill="var(--accent)" />
              <circle cx="12" cy="9" r="3" fill="var(--gold)" />
              <circle cx="19" cy="20" r="3" fill="var(--accent)" />
              <circle cx="27" cy="6" r="3" fill="var(--gold)" />
            </svg>
            <span>Mazaly<span className="brand-sub"> Digital</span></span>
          </a>
          <nav className="nav" aria-label="ניווט ראשי">
            <a className="nav-link" href="#services">שירותים</a>
            <a className="nav-link" href="#experience">ניסיון</a>
            <a className="nav-link" href="#packages">חבילות</a>
            <a className="nav-link" href="#faq">שאלות נפוצות</a>
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
              <p className="eyebrow"><span className="eyebrow-dot"></span>ניסיון רחב בעולם ה-IT והדיגיטל · תל אביב</p>
              <h1 className="hero-title">
                <span className="w" style={{ "--i": 0 }}>ניסיון</span>{" "}
                <span className="w" style={{ "--i": 1 }}>אמיתי</span>{" "}
                <span className="w" style={{ "--i": 2 }}>ב-IT,</span>{" "}
                <span className="w" style={{ "--i": 3 }}>אבטחה</span>{" "}
                <span className="w" style={{ "--i": 4 }}>ופיתוח.</span>{" "}
                <span className="w hl" style={{ "--i": 5 }}>בשירות הכלים של 2026.</span>
              </h1>
              <p className="hero-lead">Mazaly Digital מביאה ניסיון רחב בעולם ה-IT, תשתיות רשת ואבטחת מידע, אל הכלים הדיגיטליים הכי עדכניים: אתרים, מערכות ניהול, אפליקציות, אוטומציות שחוסכות זמן וסוכני בינה מלאכותית. הכול תחת צוות אחד, בעברית ובצרפתית.</p>
              <div className="hero-actions">
                <span className="mag"><a className="btn btn-mag" href="#brief"><span className="btn-in">לתאר את הפרויקט</span></a></span>
                <a className="btn btn-quiet" href="#experience"><span className="btn-in">להכיר את הניסיון</span></a>
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
                <span className="mq fill">בניית אתרים</span><span className="mq-dot"></span>
                <span className="mq">מערכות ניהול</span><span className="mq-dot"></span>
                <span className="mq fill">אפליקציות מובייל</span><span className="mq-dot"></span>
                <span className="mq">תוכנה בהתאמה אישית</span><span className="mq-dot"></span>
                <span className="mq fill">אוטומציות שחוסכות זמן</span><span className="mq-dot"></span>
                <span className="mq">סוכן בינה מלאכותית אישי</span><span className="mq-dot"></span>
              </span>
            ))}
          </div>
        </div>

        <section className="sec sec-first" id="experience" aria-labelledby="t-experience">
          <i className="orb orb-1" aria-hidden="true"></i>
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-experience">מניסיון בתשתיות, עד סוכני בינה מלאכותית.</h2>
              <p className="sec-lead">ניסיון רחב בעולם ה-IT והדיגיטל, מהיסודות ועד הכלים הכי חדשים. כל שלב נבנה על הקודם לו.</p>
            </div>
            <ol className="timeline" data-stagger>
              {timeline.map((t) => (
                <li className="tl-item" key={t.n}>
                  <span className="tl-dot" aria-hidden="true"></span>
                  <span className="tl-n">{t.n}</span>
                  <h3 className="tl-key">{t.key}</h3>
                  <p className="tl-text">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="sec sec-alt" aria-labelledby="t-value">
          <Wave d="M0 58C160 8 320 8 520 44S900 98 1120 52 1340 14 1440 40V90H0Z" />
          <i className="orb orb-2" aria-hidden="true"></i>
          <div className="wrap">
            <div className="sec-head flip rv">
              <h2 className="sec-title" id="t-value">אתרים ומערכות שנבנו על ידי מי שמבין גם בתשתיות ובאבטחה.</h2>
              <p className="sec-lead">השילוב הנדיר של IT, אבטחה, פיתוח ובינה מלאכותית תחת גג אחד הוא הערך המוסף של Mazaly Digital.</p>
            </div>
            <div className="value-grid" data-stagger>
              {valueProps.map((v) => (
                <div className={`value-card${v.wide ? " value-card-wide" : ""}`} key={v.title}>
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-text">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="services" aria-labelledby="t-services">
          <Wave d="M0 36C220 86 420 90 640 50S1040-6 1240 34 1400 60 1440 48V90H0Z" />
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-services">שישה תחומים, צוות אחד.</h2>
              <p className="sec-lead">אין צורך לתאם בין מפתח, פרילנסר מערכות וספק אוטומציות. Mazaly Digital אחראית על הכול, מהמסך הראשון ועד התחזוקה.</p>
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

        <section className="sec sec-alt" aria-labelledby="t-chain">
          <Wave d="M0 58C160 8 320 8 520 44S900 98 1120 52 1340 14 1440 40V90H0Z" />
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-chain">כל רכיב מדבר עם האחרים.</h2>
              <p className="sec-lead">היתרון בספק אחד הוא שהאתר, המערכת, האוטומציות והסוכן חולקים את אותם נתונים מהיום הראשון.</p>
            </div>
            <div className="chain-wrap">
              <svg className="chain-svg" viewBox="0 0 1000 240" preserveAspectRatio="none" aria-hidden="true">
                <path className="cs-base" pathLength="1" d="M1000 92H875C750 92 750 148 625 148S500 92 375 92 250 148 125 148H0" />
                <path className="cs-pulse" pathLength="1" d="M1000 92H875C750 92 750 148 625 148S500 92 375 92 250 148 125 148H0" />
              </svg>
              <div className="chain-track" aria-hidden="true"><span className="chain-pulse"></span></div>
              <ol className="chain" data-stagger>
                <li className="chain-node"><span className="chain-n">1</span><p className="chain-label">אתר</p><p className="chain-text">מבקר ממלא את טופס ההצעה.</p></li>
                <li className="chain-node"><span className="chain-n">2</span><p className="chain-label">מערכת</p><p className="chain-text">איש הקשר מופיע במשפך המכירות, יחד עם המקור שלו.</p></li>
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
                    <a className={`btn btn-mag${p.featured ? "" : " btn-quiet"}`} href="#brief">
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
                <a className="btn btn-mag btn-quiet" href="#brief"><span className="btn-in">לשאול על המנוי</span></a>
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
              <p className="about-text">Mazaly Digital היא סוכנות דיגיטל הפועלת מתל אביב, עם רקע רחב בעולם ה-IT והדיגיטל. היא מלווה עסקים מהרעיון ועד למערכת שעובדת: אתר, מערכת ניהול, אפליקציה, תוכנה, אוטומציה וסוכן בינה מלאכותית, תחת צוות אחד.</p>
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
              <p className="sec-lead">בחרו מה אתם צריכים וכתבו על העסק. ההודעה מתכוננת בצד, מוכנה לשליחה. הדוגמה כאן ניתנת לעריכה.</p>
            </div>
            <BriefForm lang="he" />
          </div>
        </section>
      </main>

      <footer className="foot">
        <Wave d="M0 40C260 94 480 70 720 38S1160-6 1440 50V90H0Z" />
        <div className="wrap foot-cta rv">
          <h2>ניסיון אמיתי. פרויקט אחד שמתחיל עכשיו.</h2>
          <p>שיחת אפיון קצרה, בלי התחייבות, כדי להבין מה הדרך הנכונה לעסק שלכם.</p>
          <div className="hero-actions">
            <span className="mag"><a className="btn btn-mag" href="#brief"><span className="btn-in">לתאר את הפרויקט</span></a></span>
            <a className="btn btn-quiet" href="#packages"><span className="btn-in">לראות את החבילות</span></a>
          </div>
        </div>
        <div className="foot-bottom">
          <div className="wrap foot-in">
            <span className="foot-brand">Mazaly Digital</span>
            <span>סוכנות דיגיטל · תל אביב · עברית וצרפתית</span>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
