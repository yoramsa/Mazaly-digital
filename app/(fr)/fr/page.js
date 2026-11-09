import Logo from "@/components/Logo";
import HeroBackground from "@/components/HeroBackground";
import ChatDemo from "@/components/ChatDemo";
import LeadForm from "@/components/LeadForm";
import PageEffects from "@/components/PageEffects";
import AssistantWidget from "@/components/AssistantWidget";
import StickyCta from "@/components/StickyCta";
import PipelineMini from "@/components/PipelineMini";
import PipelineFull from "@/components/PipelineFull";
import PlanCard from "@/components/PlanCard";
import ComparisonTable from "@/components/ComparisonTable";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import { plans, customOffer, conditions, startingPrice, currency } from "@/data/plans";
import { pains, pipelineSteps, steps, projects, testimonials, faqs, facts } from "@/lib/content.fr";
import { waLink, siteUrl } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/fr#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "OfferCatalog",
      "@id": `${siteUrl}/fr#forfaits`,
      name: "Forfaits Mazaly Digital",
      itemListElement: plans.map((p) => ({
        "@type": "Offer",
        name: p.name.fr,
        description: p.tagline.fr,
        priceSpecification: { "@type": "PriceSpecification", minPrice: startingPrice, priceCurrency: "ILS" },
        itemOffered: { "@type": "Service", name: p.name.fr, provider: { "@id": `${siteUrl}/#organization` } },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/fr` }],
    },
  ],
};

export default function HomeFr() {
  return (
    <div className="page" id="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageEffects />
      <div className="progress" id="progress" aria-hidden="true"></div>
      <AssistantWidget lang="fr" />
      <StickyCta lang="fr" />

      <header className="top" id="top-bar">
        <div className="wrap top-in">
          <a className="brand" href="#top" aria-label="Mazaly Digital">
            <Logo />
            <span>Mazaly<span className="brand-sub"> Digital</span></span>
          </a>
          <nav className="nav" aria-label="Navigation principale">
            <a className="nav-link" href="#forfaits">Forfaits</a>
            <a className="nav-link" href="#faq">FAQ</a>
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
                <span className="w" style={{ "--i": 0 }}>Un</span>{" "}
                <span className="w" style={{ "--i": 1 }}>seul</span>{" "}
                <span className="w" style={{ "--i": 2 }}>partenaire</span>{" "}
                <span className="w" style={{ "--i": 3 }}>digital.</span>{" "}
                <span className="w hl" style={{ "--i": 4 }}>Pas quatre.</span>
              </h1>
              <p className="hero-lead">Dites-nous ce qu'il vous faut — site, CRM, automatisations ou agent IA WhatsApp — et on le construit pour vous. À partir de {startingPrice.toLocaleString("fr-FR")} {currency} d'installation, sur devis personnalisé.</p>
              <div className="hero-actions">
                <span className="mag"><a className="btn btn-mag" href="#forfaits"><span className="btn-in">Voir les forfaits</span></a></span>
                <a
                  className="btn btn-quiet"
                  href={waLink("Bonjour, je voudrais en savoir plus sur les forfaits Mazaly Digital.")}
                  target="_blank"
                  rel="noopener"
                >
                  <span className="btn-in">Parler sur WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="stage" id="stage">
              <div className="tilt" id="tilt">
                <PipelineMini steps={pipelineSteps} ariaLabel="Le parcours : site, CRM, automatisation et agent IA, connectés entre eux" />
              </div>
            </div>
          </div>
        </section>

        <section className="sec sec-first" aria-labelledby="t-pains">
          <i className="orb orb-1" aria-hidden="true"></i>
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-pains">Ce qui se passe sans système.</h2>
              <p className="sec-lead">Trois choses qui arrivent à toute entreprise qui essaie de tout gérer seule, avec des outils qui ne se parlent pas.</p>
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
              <h2 className="sec-title" id="t-chain">Chaque brique parle aux autres.</h2>
              <p className="sec-lead">L'avantage d'un seul partenaire : le site, le CRM, les automatisations et l'agent partagent les mêmes données dès le premier jour.</p>
            </div>
            <PipelineFull steps={pipelineSteps} />
            <p className="chain-note rv">On peut aussi commencer par une seule brique. Les autres se connectent ensuite sans tout reconstruire.</p>
          </div>
        </section>

        <section className="sec" aria-labelledby="t-demo">
          <i className="orb orb-3" aria-hidden="true"></i>
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-demo">Votre agent en action.</h2>
              <p className="sec-lead">Une conversation exemple : l'agent répond au client sur WhatsApp, propose un créneau libre et confirme le rendez-vous — à toute heure.</p>
            </div>
            <div className="demo-wrap">
              <div className="demo-card"><ChatDemo lang="fr" /></div>
            </div>
          </div>
        </section>

        <section className="sec sec-alt" id="forfaits" aria-labelledby="t-forfaits">
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-forfaits">Dites-nous ce qu'il vous faut, on vous le construit.</h2>
              <p className="sec-lead">Chaque entreprise est différente, donc chaque devis est personnalisé. Comme repère : à partir de {startingPrice.toLocaleString("fr-FR")} {currency} d'installation.</p>
            </div>
            <div className="pkg-grid" data-stagger>
              {plans.map((p) => (
                <PlanCard key={p.id} plan={p} lang="fr" formHref={`?plan=${p.id}#brief`} />
              ))}
            </div>
            <div className="sub-card rv">
              <div>
                <h3>{customOffer.fr.title}</h3>
                <p>{customOffer.fr.text}</p>
              </div>
              <span className="mag">
                <a className="btn btn-mag btn-quiet" href="#brief"><span className="btn-in">Parler d'un projet sur mesure</span></a>
              </span>
            </div>
            <ComparisonTable lang="fr" />
            <ul className="conditions-list rv">
              {conditions.map((c, i) => (
                <li className="condition-item" key={i}><span className="condition-dot"></span>{c.fr}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="sec" id="realisations" aria-labelledby="t-proj">
          <i className="orb orb-1" aria-hidden="true"></i>
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-proj">Nos réalisations.</h2>
              <p className="sec-lead">Quelques projets que nous avons construits, avec leur secteur et le résultat obtenu.</p>
            </div>
            <Projects projects={projects} lang="fr" />
          </div>
        </section>

        <section className="sec sec-alt" id="process" aria-labelledby="t-process">
          <div className="wrap">
            <div className="sec-head flip rv">
              <h2 className="sec-title" id="t-process">Comment ça marche.</h2>
              <p className="sec-lead">Un parcours simple, avec votre validation avant chaque étape qui coûte.</p>
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
              <h2 className="sec-title" id="t-testi">Ce qu'on dit de nous.</h2>
              <p className="sec-lead">Des clients qui ont travaillé avec nous, dans leurs mots.</p>
            </div>
            <Testimonials testimonials={testimonials} />
          </div>
        </section>

        <section className="sec sec-alt" id="faq" aria-labelledby="t-faq">
          <div className="wrap">
            <div className="sec-head flip rv">
              <h2 className="sec-title" id="t-faq">Questions fréquentes.</h2>
              <p className="sec-lead">Les réponses aux questions que les entreprises nous posent avant de se lancer.</p>
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
              <h2 className="sec-title" id="t-about">Mazaly Digital en un coup d'œil.</h2>
              <p className="about-text">Mazaly Digital est une agence digitale basée à Tel Aviv. Elle accompagne les entreprises de l'idée jusqu'au système qui fonctionne : site, CRM, automatisation et agent d'intelligence artificielle, sous un seul partenaire.</p>
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
              <h2 className="sec-title" id="t-brief">Prêt à commencer ?</h2>
              <p className="sec-lead">Deux questions rapides, et recevez un devis en moins d'un jour ouvré.</p>
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
            <span>Agence digitale · Tel Aviv · Hébreu et français</span>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
