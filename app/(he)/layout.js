import { Frank_Ruhl_Libre, Rubik } from "next/font/google";
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

const title = "Mazaly Digital | בניית אתרים, חנויות דיגיטליות ו-AI לעסקים";
const description =
  "Mazaly Digital הוא סטודיו דיגיטלי שעובד עם עסקים קטנים ובינוניים בישראל. אנחנו בונים אתרים, חנויות דיגיטליות, סוכני AI ואוטומציות ופתרונות מותאמים אישית, בעברית ובצרפתית.";

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
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mazaly Digital: שותף אחד לכל מה שהוא דיגיטלי" }],
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
      url: siteUrl,
      description,
      slogan: "סטודיו דיגיטלי לעסקים ישראליים",
      image: `${siteUrl}/og-image.png`,
      logo: `${siteUrl}/favicon.svg`,
      priceRange: "999+ ILS",
      areaServed: { "@type": "Country", name: "ישראל" },
      address: { "@type": "PostalAddress", addressLocality: "תל אביב", addressCountry: "IL" },
      knowsLanguage: ["he", "fr"],
      audience: { "@type": "Audience", audienceType: "עסקים קטנים ובינוניים, סוחרים ועצמאים" },
      knowsAbout: ["בניית אתרים", "חנויות דיגיטליות", "סוכני בינה מלאכותית ואוטומציות", "פתרונות דיגיטליים מותאמים אישית"],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl" className={`${display.variable} ${body.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
