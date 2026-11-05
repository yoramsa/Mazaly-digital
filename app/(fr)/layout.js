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

const title = "Mazaly Digital | Agence digitale : sites, systèmes de gestion, apps et IA";
const description =
  "Mazaly Digital est une agence digitale basée à Tel Aviv, avec une solide expérience en IT, infrastructures réseau et sécurité informatique, au service de la création de sites, systèmes de gestion sur mesure, applications, logiciels sur mesure, automatisations et agents d'intelligence artificielle, en hébreu et en français.";

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
  themeColor: "#0b0813",
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
        "Infrastructures réseau",
        "Sécurité informatique",
        "Création de sites",
        "Systèmes de gestion",
        "Applications mobiles",
        "Logiciels sur mesure",
        "Automatisation métier",
        "Agents d'intelligence artificielle",
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
            text: "Mazaly Digital est une agence digitale basée à Tel Aviv, avec une solide expérience en IT : infrastructures réseau, sécurité informatique et développement. Elle conçoit et construit des sites, des systèmes de gestion, des applications mobiles, des logiciels sur mesure, des automatisations et des agents d'intelligence artificielle.",
          },
        },
        {
          "@type": "Question",
          name: "Quels services propose Mazaly Digital ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Six domaines sous une seule équipe : création de sites, systèmes de gestion sur mesure, applications mobiles, logiciels sur mesure, automatisations et agents d'intelligence artificielle personnels.",
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
