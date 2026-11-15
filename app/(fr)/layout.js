import { Frank_Ruhl_Libre, Rubik, Karantina, Heebo } from "next/font/google";
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

const karantina = Karantina({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-karantina",
  display: "swap",
});

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-heebo",
  display: "swap",
});

const title = "Mazaly Digital — On ne fait pas des sites, on fait des vitrines";
const description =
  "Mazaly Digital crée pour les marques des vitrines digitales jamais vues ailleurs : sites à effets, applications, CRM, agents IA WhatsApp et automatisation, à Tel Aviv.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/fr", languages: { he: "/", fr: "/fr", "x-default": "/" } },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Mazaly Digital",
    title,
    description,
    url: `${siteUrl}/fr`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mazaly Digital — Vitrines digitales pour les marques" }],
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
  themeColor: "#faf9fd",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: "Mazaly Digital",
      url: `${siteUrl}/fr`,
      description,
      slogan: "On ne fait pas des sites. On fait des vitrines.",
      telephone: "+972-54-567-0414",
      image: `${siteUrl}/og-image.png`,
      logo: `${siteUrl}/favicon.svg`,
      priceRange: "999+ ILS",
      areaServed: { "@type": "Country", name: "Israël" },
      address: { "@type": "PostalAddress", addressLocality: "Tel Aviv", addressCountry: "IL" },
      knowsLanguage: ["he", "fr"],
      audience: { "@type": "Audience", audienceType: "Petites et moyennes entreprises, tous secteurs" },
      knowsAbout: ["Vitrines digitales", "Création de sites", "Applications", "Agents d'intelligence artificielle", "CRM et automatisation"],
    },
  ],
};

export default function FrRootLayout({ children }) {
  return (
    <html lang="fr" dir="ltr" className={`${display.variable} ${body.variable} ${karantina.variable} ${heebo.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
