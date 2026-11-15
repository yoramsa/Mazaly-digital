import { Frank_Ruhl_Libre, Rubik, Karantina, Heebo } from "next/font/google";
import "../globals.css";
import { siteUrl } from "@/lib/site";

const display = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["500", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

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

const title = "מזלי דיגיטל — אנחנו בונים ויטרינות דיגיטליות למותגים";
const description =
  "מזלי דיגיטל בונה למותגים ויטרינות דיגיטליות שלא נראו בשום מקום: אתרים עם אפקטים, אפליקציות, CRM, סוכני AI בוואטסאפ ואוטומציה.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/", languages: { he: "/", fr: "/fr", "x-default": "/" } },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  openGraph: {
    type: "website",
    locale: "he_IL",
    siteName: "Mazaly Digital",
    title,
    description,
    url: siteUrl,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "מזלי דיגיטל — ויטרינות דיגיטליות למותגים" }],
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
      name: "Mazaly Digital — מזלי דיגיטל",
      url: siteUrl,
      description,
      slogan: "אנחנו לא בונים אתרים. אנחנו בונים ויטרינות.",
      telephone: "+972-54-567-0414",
      image: `${siteUrl}/og-image.png`,
      logo: `${siteUrl}/favicon.svg`,
      priceRange: "999+ ILS",
      areaServed: { "@type": "Country", name: "ישראל" },
      address: { "@type": "PostalAddress", addressLocality: "תל אביב", addressCountry: "IL" },
      knowsLanguage: ["he", "fr"],
      audience: { "@type": "Audience", audienceType: "עסקים קטנים ובינוניים מכל תחום" },
      knowsAbout: ["ויטרינות דיגיטליות", "בניית אתרים", "אפליקציות", "סוכני בינה מלאכותית", "CRM ואוטומציה"],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl" className={`${display.variable} ${body.variable} ${karantina.variable} ${heebo.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
