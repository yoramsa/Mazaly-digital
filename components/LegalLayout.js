import Logo from "@/components/Logo";
import WhatsappFloat from "@/components/WhatsappFloat";
import { siteUrl } from "@/lib/site";

const TEXT = {
  he: { back: "← חזרה לדף הבית", updated: "עודכן לאחרונה: נובמבר 2026", home: "דף הבית" },
  fr: { back: "← Retour à l'accueil", updated: "Dernière mise à jour : novembre 2026", home: "Accueil" },
};

export default function LegalLayout({ lang = "he", homeHref = "/", path, title, children }) {
  const t = TEXT[lang] || TEXT.he;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.home, item: `${siteUrl}${homeHref}` },
      { "@type": "ListItem", position: 2, name: title, item: `${siteUrl}${path || homeHref}` },
    ],
  };
  return (
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <WhatsappFloat lang={lang} />
      <header className="top">
        <div className="wrap top-in">
          <a className="brand" href={homeHref} aria-label="Mazaly Digital">
            <Logo />
            <span>Mazaly<span className="brand-sub"> Digital</span></span>
          </a>
        </div>
      </header>
      <main>
        <section className="sec sec-first">
          <div className="wrap">
            <a className="sec-back" href={homeHref}>{t.back}</a>
            <h1 className="legal-title">{title}</h1>
            <p className="legal-updated">{t.updated}</p>
            {children}
          </div>
        </section>
      </main>
      <footer className="foot">
        <div className="wrap foot-in">
          <a className="foot-brand" href={homeHref}>Mazaly<span className="brand-sub"> Digital</span></a>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}
