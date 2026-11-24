import "../globals.css";
import { siteUrl, contactEmail, googleSiteVerification } from "@/lib/site";

const title = "Création de sites internet & IA en Israël | Mazaly Digital";
const shareTitle = "Mazaly Digital — Votre ambition mérite plus qu'un simple site web";
const description =
  "Agence digitale francophone à Tel Aviv : création de sites internet sur mesure, applications, agents IA WhatsApp et automatisation, en français et en hébreu.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  ...(googleSiteVerification && { verification: { google: googleSiteVerification } }),
  alternates: { canonical: "/fr", languages: { he: "/", fr: "/fr", "x-default": "/" } },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Mazaly Digital",
    title: shareTitle,
    description,
    url: `${siteUrl}/fr`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mazaly Digital — Studio digital créatif" }],
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#faf9fd",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Mazaly Digital",
      alternateName: ["מזלי דיגיטל", "Mazaly"],
      inLanguage: ["he", "fr"],
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: "Mazaly Digital",
      alternateName: "מזלי דיגיטל",
      url: `${siteUrl}/fr`,
      description,
      slogan: "Votre ambition mérite plus qu'un simple site web.",
      telephone: "+972-54-567-0414",
      ...(contactEmail && { email: contactEmail }),
      contactPoint: { "@type": "ContactPoint", telephone: "+972-54-567-0414", contactType: "customer service", availableLanguage: ["French", "Hebrew"] },
      image: `${siteUrl}/og-image.png`,
      logo: `${siteUrl}/icon-512.png`,
      priceRange: "999+ ILS",
      areaServed: { "@type": "Country", name: "Israël" },
      address: { "@type": "PostalAddress", addressLocality: "Tel Aviv", addressCountry: "IL" },
      knowsLanguage: ["he", "fr"],
      audience: { "@type": "Audience", audienceType: "Petites et moyennes entreprises, tous secteurs" },
      knowsAbout: ["Création de sites web et e-commerce", "Applications web et mobiles", "Agents IA et WhatsApp", "CRM et automatisation", "Référencement et visibilité IA", "Logiciels sur mesure"],
    },
  ],
};

export default function FrRootLayout({ children }) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
