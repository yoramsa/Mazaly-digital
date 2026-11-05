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

const title = "Mazaly Digital | סוכנות דיגיטל: אתרים, CRM, אוטומציה, בינה מלאכותית ותוכן";
const description =
  "Mazaly Digital היא סוכנות דיגיטל בתל אביב — יותר מסוכנות אתרים. אנחנו בונים אתרים, CRM, אוטומציות שחוסכות זמן, סוכני בינה מלאכותית ותוכן דיגיטלי, ומלווים עסקים מהרעיון ועד למערכת שעובדת, בעברית ובצרפתית.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/", languages: { he: "/", fr: "/fr" } },
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
  themeColor: "#0b0813",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#organization`,
      name: "Mazaly Digital",
      url: siteUrl,
      description,
      slogan: "שותף אחד לכל מה שהוא דיגיטלי",
      image: `${siteUrl}/og-image.png`,
      logo: `${siteUrl}/favicon.svg`,
      areaServed: { "@type": "Country", name: "ישראל" },
      address: { "@type": "PostalAddress", addressLocality: "תל אביב", addressCountry: "IL" },
      knowsLanguage: ["he", "fr"],
      audience: { "@type": "Audience", audienceType: "עסקים, ארגונים ויזמים מכל תחום ומכל גודל" },
      knowsAbout: [
        "בניית אתרים",
        "CRM",
        "אוטומציה עסקית",
        "סוכני בינה מלאכותית",
        "יצירת תוכן דיגיטלי",
        "אפליקציות מובייל",
        "תוכנה בהתאמה אישית",
        "וואטסאפ לעסקים",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "שירותי Mazaly Digital",
        itemListElement: [
          "בניית אתרים",
          "CRM",
          "אוטומציות",
          "סוכני בינה מלאכותית",
          "יצירת תוכן דיגיטלי",
          "אפליקציות ותוכנה בהתאמה אישית",
        ].map((n) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: n, provider: { "@id": `${siteUrl}/#organization` } },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "מהי Mazaly Digital?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mazaly Digital היא סוכנות דיגיטל מתל אביב — יותר מסוכנות אתרים. אנחנו בונים אתרים, CRM, אוטומציות, סוכני בינה מלאכותית ותוכן דיגיטלי, ומלווים עסקים מהרעיון ועד למערכת שעובדת בפועל.",
          },
        },
        {
          "@type": "Question",
          name: "אילו שירותים Mazaly Digital מספקת?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "חמישה תחומים עיקריים תחת צוות אחד: בניית אתרים, CRM, אוטומציות, סוכני בינה מלאכותית ותוכן דיגיטלי — ובנוסף אפליקציות ותוכנה בהתאמה אישית כשצריך.",
          },
        },
        {
          "@type": "Question",
          name: "האם אתם עובדים בעברית ובצרפתית?",
          acceptedAnswer: { "@type": "Answer", text: "כן. אפשר לבנות אתרים, מערכות וסוכנים בעברית, בצרפתית או בשתי השפות יחד." },
        },
      ],
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
