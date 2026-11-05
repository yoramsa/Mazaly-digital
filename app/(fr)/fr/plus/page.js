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
} from "@/lib/content.fr";

function Wave({ d }) {
  return (
    <svg className="wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export const metadata = {
  title: "Mazaly Digital | En savoir plus, nos offres et la FAQ",
  description: "Pourquoi Mazaly Digital, comment ça marche, trois offres sans surprise, les technologies qu'on utilise, et les questions fréquentes.",
  alternates: { canonical: "/fr/plus", languages: { he: "/plus", fr: "/fr/plus" } },
};

export default function PlusPageFr() {
  const techLoop = [...techStack, ...techStack, ...techStack, ...techStack];

  return (
    <div className="page" id="page">
      <PageEffects />
      <div className="progress" id="progress" aria-hidden="true"></div>

      <header className="top" id="top-bar">
        <div className="wrap top-in">
          <a className="brand" href="/fr" aria-label="Mazaly Digital">
            <Logo />
            <span>Mazaly<span className="brand-sub"> Digital</span></span>
          </a>
          <nav className="nav" aria-label="Navigation principale">
            <a className="nav-link" href="#why">Pourquoi nous</a>
            <a className="nav-link" href="#packages">Offres</a>
            <a className="nav-link" href="#faq">FAQ</a>
            <a className="lang-switch" href="/plus" hrefLang="he">HE</a>
            <span className="mag nav-cta-zone"><a className="btn btn-mag" href="#brief"><span className="btn-in">Parler du projet</span></a></span>
          </nav>
        </div>
      </header>

      <main>
        <section className="sec sec-first" id="why" aria-labelledby="t-why">
          <i className="orb orb-1" aria-hidden="true"></i>
          <div className="wrap">
            <a className="sec-back rv" href="/fr">← Retour à l'accueil</a>
            <div className="sec-head rv">
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

        <section className="sec sec-alt" aria-labelledby="t-chain">
          <Wave d="M0 58C160 8 320 8 520 44S900 98 1120 52 1340 14 1440 40V90H0Z" />
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

        <section className="sec" id="packages" aria-labelledby="t-packages">
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
                    <a className={`btn btn-mag${p.featured ? "" : " btn-quiet"}`} href="/fr#brief">
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
                <a className="btn btn-mag btn-quiet" href="/fr#brief"><span className="btn-in">Question sur l'abonnement</span></a>
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

        <section className="sec sec-alt" id="process" aria-labelledby="t-process">
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

        <section className="sec" aria-labelledby="t-about">
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

        <section className="sec sec-alt" id="faq" aria-labelledby="t-faq">
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

        <section className="sec" id="brief" aria-labelledby="t-brief">
          <Wave d="M0 30C240 -6 460 14 700 56S1100 92 1280 44 1400 22 1440 34V90H0Z" />
          <div className="wrap">
            <div className="sec-head rv">
              <h2 className="sec-title" id="t-brief">Décrivez votre projet en trente secondes.</h2>
              <p className="sec-lead">Choisissez ce dont vous avez besoin et parlez de votre activité. Le message se prépare à côté, prêt à envoyer.</p>
            </div>
            <BriefForm lang="fr" />
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-in">
          <a className="foot-brand" href="/fr">Mazaly<span className="brand-sub"> Digital</span></a>
          <span>Agence digitale · Tel Aviv · Hébreu et français</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}
