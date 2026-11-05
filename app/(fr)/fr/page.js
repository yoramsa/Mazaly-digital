import HeroBackground from "@/components/HeroBackground";
import ChatDemo from "@/components/ChatDemo";
import BriefForm from "@/components/BriefForm";
import PageEffects from "@/components/PageEffects";
import { ServiceIcon, CheckIcon } from "@/components/Icons";
import {
  valueProps,
  packages,
  subscription,
  techStack,
  services,
  steps,
  faqs,
  facts,
} from "@/lib/content.fr";

function Wave({ d }) {
  return (
    <svg className="wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export default function HomeFr() {
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
          <nav className="nav" aria-label="Navigation principale">
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#why">Pourquoi nous</a>
            <a className="nav-link" href="#packages">Offres</a>
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
              <p className="eyebrow"><span className="eyebrow-dot"></span>Agence digitale à Tel Aviv · plus qu'une agence web</p>
              <h1 className="hero-title">
                <span className="w" style={{ "--i": 0 }}>Pas</span>{" "}
                <span className="w" style={{ "--i": 1 }}>juste</span>{" "}
                <span className="w" style={{ "--i": 2 }}>une</span>{" "}
                <span className="w" style={{ "--i": 3 }}>agence</span>{" "}
                <span className="w" style={{ "--i": 4 }}>web.</span>{" "}
                <span className="w hl" style={{ "--i": 5 }}>Une agence qui rend vos idées réelles.</span>
              </h1>
              <p className="hero-lead">Mazaly Digital construit des sites, des CRM, des automatisations, des agents d'intelligence artificielle et du contenu digital pour des entreprises, des organisations et des entrepreneurs. Une seule équipe qui prend votre idée de l'esquisse jusqu'au système qui fonctionne, en hébreu et en français.</p>
              <div className="hero-actions">
                <span className="mag"><a className="btn btn-mag" href="#brief"><span className="btn-in">Décrire mon projet</span></a></span>
                <a className="btn btn-quiet" href="#why"><span className="btn-in">Pourquoi Mazaly Digital</span></a>
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
                <span className="mq fill">Création de sites</span><span className="mq-dot"></span>
                <span className="mq">CRM</span><span className="mq-dot"></span>
                <span className="mq fill">Automatisations</span><span className="mq-dot"></span>
                <span className="mq">Agent IA personnel</span><span className="mq-dot"></span>
                <span className="mq fill">Contenu digital</span><span className="mq-dot"></span>
                <span className="mq">Applications et logiciels sur mesure</span><span className="mq-dot"></span>
              </span>
            ))}
          </div>
        </div>

        <section className="sec sec-first" id="services" aria-labelledby="t-services">
          <i className="orb orb-1" aria-hidden="true"></i>
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-services">Cinq domaines, une seule équipe.</h2>
              <p className="sec-lead">Pas besoin de coordonner un designer, un développeur, un prestataire CRM et un fournisseur d'automatisation. Mazaly Digital gère tout, de l'idée à la maintenance.</p>
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

        <section className="sec sec-alt" id="why" aria-labelledby="t-why">
          <Wave d="M0 58C160 8 320 8 520 44S900 98 1120 52 1340 14 1440 40V90H0Z" />
          <i className="orb orb-2" aria-hidden="true"></i>
          <div className="wrap">
            <div className="sec-head flip rv">
              <h2 className="sec-title" id="t-why">Pourquoi Mazaly Digital.</h2>
              <p className="sec-lead">On ne se contente pas de construire un site. On construit tout le système derrière, pour que votre idée fonctionne vraiment.</p>
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

        <section className="sec" aria-labelledby="t-chain">
          <Wave d="M0 36C220 86 420 90 640 50S1040-6 1240 34 1400 60 1440 48V90H0Z" />
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-chain">Chaque brique parle aux autres.</h2>
              <p className="sec-lead">L'avantage d'avoir un seul prestataire, c'est que le site, le CRM, les automatisations et l'agent partagent les mêmes données dès le premier jour.</p>
            </div>
            <div className="chain-wrap">
              <svg className="chain-svg" viewBox="0 0 1000 240" preserveAspectRatio="none" aria-hidden="true">
                <path className="cs-base" pathLength="1" d="M1000 92H875C750 92 750 148 625 148S500 92 375 92 250 148 125 148H0" />
                <path className="cs-pulse" pathLength="1" d="M1000 92H875C750 92 750 148 625 148S500 92 375 92 250 148 125 148H0" />
              </svg>
              <div className="chain-track" aria-hidden="true"><span className="chain-pulse"></span></div>
              <ol className="chain" data-stagger>
                <li className="chain-node"><span className="chain-n">1</span><p className="chain-label">Site</p><p className="chain-text">Un visiteur remplit le formulaire de devis.</p></li>
                <li className="chain-node"><span className="chain-n">2</span><p className="chain-label">CRM</p><p className="chain-text">Le contact apparaît dans le pipeline de vente, avec sa source.</p></li>
                <li className="chain-node"><span className="chain-n">3</span><p className="chain-label">Automatisation</p><p className="chain-text">Le devis part et une relance est programmée.</p></li>
                <li className="chain-node"><span className="chain-n">4</span><p className="chain-label">Agent IA</p><p className="chain-text">Il répond au client sur WhatsApp pour ses questions.</p></li>
              </ol>
            </div>
            <p className="chain-note rv">On peut aussi commencer par une seule brique. Les autres se connectent ensuite sans tout reconstruire.</p>
          </div>
        </section>

        <section className="sec sec-alt" id="packages" aria-labelledby="t-packages">
          <Wave d="M0 44C200 90 400 84 640 46S1000-4 1220 38 1390 56 1440 40V90H0Z" />
          <i className="orb orb-3" aria-hidden="true"></i>
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-packages">Trois offres, sans surprise.</h2>
              <p className="sec-lead">On choisit le bon point de départ pour l'entreprise, et on évolue quand c'est nécessaire. Le prix est fixé après un court échange de cadrage.</p>
            </div>
            <div className="pkg-grid" data-stagger>
              {packages.map((p) => (
                <div className={`pkg-card${p.featured ? " featured" : ""}`} key={p.name}>
                  {p.featured && <span className="pkg-badge">La plus choisie</span>}
                  <h3 className="pkg-name">{p.name}</h3>
                  <p className="pkg-tagline">{p.tagline}</p>
                  <ul className="pkg-items">
                    {p.items.map((it) => (
                      <li key={it}><CheckIcon />{it}</li>
                    ))}
                  </ul>
                  <span className="mag">
                    <a className={`btn btn-mag${p.featured ? "" : " btn-quiet"}`} href="#brief">
                      <span className="btn-in">Parler de {p.name}</span>
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
                <a className="btn btn-mag btn-quiet" href="#brief"><span className="btn-in">Question sur l'abonnement</span></a>
              </span>
            </div>
          </div>
        </section>

        <div className="tech-marquee" aria-label="Technologies utilisées">
          <div className="tech-track">
            {techLoop.map((t, i) => (
              <span className="tech-item" key={t + i}><i></i>{t}</span>
            ))}
          </div>
        </div>

        <section className="sec" id="process" aria-labelledby="t-process">
          <Wave d="M0 36C220 86 420 90 640 50S1040-6 1240 34 1400 60 1440 48V90H0Z" />
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
                  <p className="step-text">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="sec sec-alt" aria-labelledby="t-about">
          <Wave d="M0 50C180-4 380 10 600 52S980 96 1200 40 1380 20 1440 56V90H0Z" />
          <div className="wrap about">
            <div className="rv">
              <h2 className="sec-title" id="t-about">Mazaly Digital en un coup d'œil.</h2>
              <p className="about-text">Mazaly Digital est une agence digitale basée à Tel Aviv. Elle accompagne les entreprises de l'idée jusqu'au système qui fonctionne : site, CRM, automatisation, agent d'intelligence artificielle et contenu digital, sous une seule équipe.</p>
            </div>
            <dl className="facts rv">
              {facts.map((f) => (
                <div className="fact" key={f.dt}><dt>{f.dt}</dt><dd>{f.dd}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        <section className="sec" id="faq" aria-labelledby="t-faq">
          <Wave d="M0 44C200 90 400 84 640 46S1000-4 1220 38 1390 56 1440 40V90H0Z" />
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

        <section className="sec sec-alt" id="brief" aria-labelledby="t-brief">
          <Wave d="M0 30C240 -6 460 14 700 56S1100 92 1280 44 1400 22 1440 34V90H0Z" />
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-brief">Décrivez votre projet en trente secondes.</h2>
              <p className="sec-lead">Choisissez ce dont vous avez besoin et parlez de votre activité. Le message se prépare à côté, prêt à envoyer. L'exemple ci-dessous est modifiable.</p>
            </div>
            <BriefForm lang="fr" />
          </div>
        </section>
      </main>

      <footer className="foot">
        <Wave d="M0 40C260 94 480 70 720 38S1160-6 1440 50V90H0Z" />
        <div className="wrap foot-cta rv">
          <h2>Vous avez une idée. Rendons-la réelle.</h2>
          <p>Un court échange de cadrage, sans engagement, pour comprendre la bonne approche pour votre entreprise.</p>
          <div className="hero-actions">
            <span className="mag"><a className="btn btn-mag" href="#brief"><span className="btn-in">Décrire mon projet</span></a></span>
            <a className="btn btn-quiet" href="#packages"><span className="btn-in">Voir les offres</span></a>
          </div>
        </div>
        <div className="foot-bottom">
          <div className="wrap foot-in">
            <span className="foot-brand">Mazaly Digital</span>
            <span>Agence digitale · Tel Aviv · Hébreu et français</span>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
