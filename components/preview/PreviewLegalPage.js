import PreviewShell from "@/components/preview/PreviewShell";
import { ArrowLeft, ArrowRight } from "@/components/preview/PreviewIcons";
import { homePath, legalPath, otherLangSlug, previewContent, shellContent } from "@/lib/content.preview";
import { loadLegalDoc } from "@/lib/previewLegal";

export default function PreviewLegalPage({ lang, slug }) {
  const t = previewContent[lang];
  const doc = loadLegalDoc(lang, slug);
  const other = lang === "fr" ? "he" : "fr";
  const switchHref = {
    [lang]: legalPath(lang, slug),
    [other]: legalPath(other, otherLangSlug(lang, slug)),
  };

  return (
    <PreviewShell lang={lang} shell={shellContent(lang)} homeHref={homePath[lang]} switchHref={switchHref} variant="legal">
      <main className="pr-legal-main">
        <header className="pr-legal-hero">
          <div className="pr-wrap pr-legal-hero-in">
            <a className="pr-back" href={homePath[lang]}>
              <ArrowLeft className="pr-back-icon" />
              {t.legalShell.back}
            </a>
            <p className="pr-eyebrow">{t.legalShell.eyebrow}</p>
            <h1 className="pr-legal-title">{doc.title}</h1>
            <p className="pr-legal-updated">{t.legalShell.updated}</p>
          </div>
        </header>

        <div className="pr-wrap">
          <article className="pr-legal-body">{doc.children}</article>

          <nav className="pr-legal-others" aria-label={t.legalShell.others}>
            <h2 className="pr-legal-others-title">{t.legalShell.others}</h2>
            <ul>
              {t.footer.links
                .filter((link) => link.slug !== slug)
                .map((link) => (
                  <li key={link.key}>
                    <a href={link.href}>
                      <span>{link.label}</span>
                      <ArrowRight className="pr-legal-others-arrow" />
                    </a>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </main>
    </PreviewShell>
  );
}
