import { Frank_Ruhl_Libre, Rubik } from "next/font/google";
import "../globals.css";
import { siteUrl } from "@/lib/site";

const display = Frank_Ruhl_Libre({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const title = "Mazaly Digital | Agence digitale : sites, CRM, automatisation, IA et contenu";
const description =
  "Mazaly Digital est une agence digitale basée à Tel Aviv — plus qu'une agence web. Nous construisons des sites, des CRM, des automatisations qui font gagner du temps, des agents d'intelligence artificielle et du contenu digital, en hébreu et en français.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/fr", languages: { he: "/", fr: "/fr" } },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Mazaly Digital",
    title,
    description,
    url: `${siteUrl}/fr`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mazaly Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport = {
  themeColor: "#fff8f0",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#organization`,
      name: "Mazaly Digital",
      url: `${siteUrl}/fr`,
      description,
      image: `${siteUrl}/og-image.png`,
      logo: `${siteUrl}/favicon.svg`,
      areaServed: { "@type": "Country", name: "Israël" },
      address: { "@type": "PostalAddress", addressLocality: "Tel Aviv", addressCountry: "IL" },
      knowsLanguage: ["he", "fr"],
      audience: { "@type": "Audience", audienceType: "Entreprises, organisations et entrepreneurs de tous secteurs et toutes tailles" },
      knowsAbout: [
        "Création de sites",
        "CRM",
        "Automatisation métier",
        "Agents d'intelligence artificielle",
        "Création de contenu digital",
        "Applications mobiles",
        "Logiciels sur mesure",
        "WhatsApp pour entreprises",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/fr#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Qu'est-ce que Mazaly Digital ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mazaly Digital est une agence digitale basée à Tel Aviv — plus qu'une agence web. Elle construit des sites, des CRM, des automatisations, des agents d'intelligence artificielle et du contenu digital, et accompagne les entreprises de l'idée jusqu'au système qui fonctionne.",
          },
        },
        {
          "@type": "Question",
          name: "Quels services propose Mazaly Digital ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cinq domaines sous une seule équipe : création de sites, CRM, automatisations, agents d'intelligence artificielle et contenu digital — et des applications et logiciels sur mesure quand c'est nécessaire.",
          },
        },
        {
          "@type": "Question",
          name: "Travaillez-vous en hébreu et en français ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui. Les sites, systèmes et agents peuvent être construits en hébreu, en français, ou dans les deux langues à la fois." },
        },
      ],
    },
  ],
};

export default function FrRootLayout({ children }) {
  return (
    <html lang="fr" dir="ltr" className={`${display.variable} ${body.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
