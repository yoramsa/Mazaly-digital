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

const title = "Mazaly Digital | Sites, e-commerce et IA pour les entreprises en Israël";
const description =
  "Mazaly Digital est un studio digital qui travaille avec les petites et moyennes entreprises en Israël. Nous créons des sites, des boutiques en ligne, des agents IA et automatisations, et des solutions sur mesure, en hébreu et en français.";

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
  themeColor: "#f8f9fc",
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
      image: `${siteUrl}/og-image.png`,
      logo: `${siteUrl}/favicon.svg`,
      priceRange: "999+ ILS",
      areaServed: { "@type": "Country", name: "Israël" },
      address: { "@type": "PostalAddress", addressLocality: "Tel Aviv", addressCountry: "IL" },
      knowsLanguage: ["he", "fr"],
      audience: { "@type": "Audience", audienceType: "Petites et moyennes entreprises, commerçants et indépendants" },
      knowsAbout: ["Création de sites", "E-commerce", "Agents d'intelligence artificielle et automatisations", "Solutions digitales sur mesure"],
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
