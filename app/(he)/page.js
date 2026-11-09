import Logo from "@/components/Logo";
import HeroBackground from "@/components/HeroBackground";
import ChatDemo from "@/components/ChatDemo";
import LeadForm from "@/components/LeadForm";
import PageEffects from "@/components/PageEffects";
import WhatsappFloat from "@/components/WhatsappFloat";
import StickyCta from "@/components/StickyCta";
import PipelineMini from "@/components/PipelineMini";
import PipelineFull from "@/components/PipelineFull";
import PlanCard from "@/components/PlanCard";
import ComparisonTable from "@/components/ComparisonTable";
import MarketComparison from "@/components/MarketComparison";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import { plans, customOffer, conditions } from "@/data/plans";
import { pains, pipelineSteps, steps, projects, testimonials, faqs, facts } from "@/lib/content.he";
import { waLink, siteUrl } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "OfferCatalog",
      "@id": `${siteUrl}/#forfaits`,
      name: "חבילות Mazaly Digital",
      itemListElement: plans.map((p) => ({
        "@type": "Offer",
        name: p.name.he,
        description: p.tagline.he,
        price: p.setupPrice,
        priceCurrency: "ILS",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: p.monthlyPrice,
          priceCurrency: "ILS",
          billingDuration: "P1M",
          referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
        },
        itemOffered: { "@type": "Service", name: p.name.he, provider: { "@id": `${siteUrl}/#organization` } },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "דף הבית", item: siteUrl }],
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
      <StickyCta lang="he" />

      <header className="top" id="top-bar">
        <div className="wrap top-in">
          <a className="brand" href="#top" aria-label="Mazaly Digital">
            <Logo />
            <span>Mazaly<span className="brand-sub"> Digital</span></span>
          </a>
          <nav className="nav" aria-label="ניווט ראשי">
            <a className="nav-link" href="#forfaits">חבילות</a>
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
              <p className="eyebrow"><span className="eyebrow-dot"></span>סוכנות דיגיטל · תל אביב</p>
              <h1 className="hero-title">
                <span className="w" style={{ "--i": 0 }}>שותף</span>{" "}
                <span className="w" style={{ "--i": 1 }}>דיגיטלי</span>{" "}
                <span className="w" style={{ "--i": 2 }}>אחד.</span>{" "}
                <span className="w hl" style={{ "--i": 3 }}>לא ארבעה.</span>
              </h1>
              <p className="hero-lead">אתר, CRM, אוטומציות וסוכן בינה מלאכותית בוואטסאפ — מחיר הקמה נמוך, מנוי חודשי אחד וברור.</p>
              <div className="hero-actions">
                <span className="mag"><a className="btn btn-mag" href="#forfaits"><span className="btn-in">לראות חבילות</span></a></span>
                <a
                  className="btn btn-quiet"
                  href={waLink("היי, אני רוצה לשמוע על החבילות של Mazaly Digital.")}
                  target="_blank"
                  rel="noopener"
                >
                  <span className="btn-in">לדבר בוואטסאפ</span>
                </a>
              </div>
            </div>

            <div className="stage" id="stage">
              <div className="tilt" id="tilt">
                <PipelineMini steps={pipelineSteps} ariaLabel="התהליך: אתר, CRM, אוטומציה וסוכן בינה מלאכותית, מחוברים זה לזה" />
              </div>
            </div>
          </div>
        </section>

        <section className="sec sec-first" aria-labelledby="t-pains">
          <i className="orb orb-1" aria-hidden="true"></i>
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-pains">מה שקורה בלי מערכת.</h2>
              <p className="sec-lead">שלושה דברים שקורים בכל עסק שמנסה לנהל הכול לבד, בכמה כלים שלא מדברים אחד עם השני.</p>
            </div>
            <div className="pain-grid" data-stagger>
              {pains.map((p) => (
                <div className="pain-card" key={p.title}>
                  <h3 className="pain-title">{p.title}</h3>
                  <p className="pain-text">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec sec-alt" aria-labelledby="t-chain">
          <i className="orb orb-2" aria-hidden="true"></i>
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-chain">כל רכיב מדבר עם האחרים.</h2>
              <p className="sec-lead">היתרון בשותף אחד: האתר, ה-CRM, האוטומציות והסוכן חולקים את אותם נתונים מהיום הראשון.</p>
            </div>
            <PipelineFull steps={pipelineSteps} />
            <p className="chain-note rv">אפשר גם להתחיל מרכיב אחד. את האחרים מחברים אחר כך בלי לבנות הכול מחדש.</p>
          </div>
        </section>

        <section className="sec" aria-labelledby="t-demo">
          <i className="orb orb-3" aria-hidden="true"></i>
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-demo">הסוכן שלכם בפעולה.</h2>
              <p className="sec-lead">שיחה לדוגמה: הסוכן עונה ללקוח בוואטסאפ, מציע תור פנוי ומאשר את הפגישה — בעברית, בכל שעה.</p>
            </div>
            <div className="demo-wrap">
              <div className="demo-card"><ChatDemo lang="he" /></div>
            </div>
          </div>
        </section>

        <section className="sec sec-alt" id="forfaits" aria-labelledby="t-forfaits">
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-forfaits">שלוש חבילות, בלי הפתעות.</h2>
              <p className="sec-lead">בוחרים את נקודת ההתחלה הנכונה לעסק, ומתרחבים כשצריך. המחיר קבוע ומוצג כאן.</p>
            </div>
            <div className="pkg-grid" data-stagger>
              {plans.map((p) => (
                <PlanCard key={p.id} plan={p} lang="he" formHref={`?plan=${p.id}#brief`} />
              ))}
            </div>
            <div className="sub-card rv">
              <div>
                <h3>{customOffer.he.title}</h3>
                <p>{customOffer.he.text}</p>
              </div>
              <span className="mag">
                <a className="btn btn-mag btn-quiet" href="#brief"><span className="btn-in">לדבר על פרויקט בהתאמה</span></a>
              </span>
            </div>
            <ComparisonTable lang="he" />
            <ul className="conditions-list rv">
              {conditions.map((c, i) => (
                <li className="condition-item" key={i}><span className="condition-dot"></span>{c.he}</li>
              ))}
            </ul>
            <MarketComparison lang="he" />
          </div>
        </section>

        <section className="sec" id="realisations" aria-labelledby="t-proj">
          <i className="orb orb-1" aria-hidden="true"></i>
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-proj">עבודות לדוגמה.</h2>
              <p className="sec-lead">כמה פרויקטים שבנינו, עם התחום והתוצאה שהם הביאו.</p>
            </div>
            <Projects projects={projects} lang="he" />
          </div>
        </section>

        <section className="sec sec-alt" id="process" aria-labelledby="t-process">
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
                  <span className="step-duration">{s.duration}</span>
                  <p className="step-text">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="sec" id="testimonials" aria-labelledby="t-testi">
          <i className="orb orb-2" aria-hidden="true"></i>
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-testi">מה אומרים עלינו.</h2>
              <p className="sec-lead">לקוחות שעבדו איתנו, בלשון שלהם.</p>
            </div>
            <Testimonials testimonials={testimonials} />
          </div>
        </section>

        <section className="sec sec-alt" id="faq" aria-labelledby="t-faq">
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

        <section className="sec" aria-labelledby="t-about">
          <div className="wrap about">
            <div className="rv">
              <h2 className="sec-title" id="t-about">Mazaly Digital במבט אחד.</h2>
              <p className="about-text">Mazaly Digital היא סוכנות דיגיטל הפועלת מתל אביב. היא מלווה עסקים מהרעיון ועד למערכת שעובדת: אתר, CRM, אוטומציה וסוכן בינה מלאכותית, תחת שותף אחד.</p>
            </div>
            <dl className="facts rv">
              {facts.map((f) => (
                <div className="fact" key={f.dt}><dt>{f.dt}</dt><dd>{f.dd}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        <section className="sec sec-alt" id="brief" aria-labelledby="t-brief">
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-brief">מוכנים להתחיל?</h2>
              <p className="sec-lead">שתי שאלות קצרות, ותקבלו מאיתנו הצעת מחיר בתוך יום עסקים.</p>
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
            <span>סוכנות דיגיטל · תל אביב · עברית וצרפתית</span>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
