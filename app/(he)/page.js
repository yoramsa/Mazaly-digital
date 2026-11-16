import { Karantina, Heebo } from "next/font/google";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Vitrines from "@/components/Vitrines";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Plans from "@/components/Plans";
import Contact from "@/components/Contact";
import { nav, brand, hero, marquee, vitrinesSection, services, servicesSection, process, plans, contact, footer } from "@/lib/content.he";
import { waLink, siteUrl } from "@/lib/site";

export const viewport = { themeColor: "#07050d" };

const karantina = Karantina({
  subsets: ["hebrew", "latin"],
  weight: ["700"],
  variable: "--font-karantina",
  display: "swap",
});

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-heebo",
  display: "swap",
});

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
    <div className={`mz-page ${karantina.variable} ${heebo.variable}`} id="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="mz-header">
        <div className="mz-header-in">
          <a className="mz-brand" href="#top" aria-label="Mazaly Digital">
            <span className="mz-brand-badge">M</span>
            <span className="mz-brand-name">{brand.name}<span className="mz-brand-sub"> {brand.sub}</span></span>
          </a>
          <nav className="mz-nav" aria-label="ניווט ראשי">
            <a className="mz-nav-link" href="#vitrines">{nav.vitrines}</a>
            <a className="mz-nav-link" href="#services">{nav.services}</a>
            <a className="mz-nav-link" href="#process">{nav.process}</a>
            <a className="mz-nav-link" href="#plans">{nav.plans}</a>
            <a className="mz-nav-link" href="#contact">{nav.contact}</a>
            <a className="mz-lang-switch" href="/fr" hrefLang="fr" lang="fr" aria-label="Passer en français">FR</a>
            <a className="mz-ghost mz-nav-cta" href={waLink(hero.ctaPrimaryMessage)}>{nav.whatsapp}</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero content={hero} waHref={waLink(hero.ctaPrimaryMessage)} secondaryHref="#vitrines" heroImageSrc="/images/vitrines/img01.webp" />

        <section className="mz-marquee-section" aria-label="תחומים">
          <Marquee items={marquee} />
        </section>

        <Vitrines content={vitrinesSection} waHref={waLink(vitrinesSection.next.message)} />

        <Services content={servicesSection} items={services} />

        <Process content={process} />

        <Plans content={plans} />

        <Contact content={contact} waHref={waLink(contact.message)} lang="he" page="/" />
      </main>

      <footer className="mz-footer">
        <div className="mz-footer-in">
          <span>© 2026 מזלי דיגיטל · Mazaly Digital</span>
          <span>{footer.tagline}</span>
        </div>
        <nav className="mz-footer-legal" aria-label="מידע משפטי">
          {Object.values(footer.legal).map((item) => (
            <a className="mz-footer-link" href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>
      </footer>
    </div>
  );
}
