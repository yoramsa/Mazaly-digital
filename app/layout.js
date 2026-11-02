import { Frank_Ruhl_Libre, Rubik } from "next/font/google";
import "./globals.css";
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

const title = "Mazaly Digital | ניסיון של מעל 20 שנה ב-IT, אבטחה ובינה מלאכותית";
const description =
  "Mazaly Digital היא סוכנות דיגיטל בתל אביב עם ניסיון של מעל 20 שנה בעולם ה-IT, תשתיות רשת ואבטחת מידע, שמביאה אותו לבניית אתרים, CRM, אפליקציות, תוכנה בהתאמה אישית, אוטומציות וסוכני בינה מלאכותית, בעברית ובצרפתית.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
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
      slogan: "ניסיון של מעל 20 שנה בעולם ה-IT והדיגיטל",
      image: `${siteUrl}/og-image.png`,
      logo: `${siteUrl}/favicon.svg`,
      areaServed: { "@type": "Country", name: "ישראל" },
      address: { "@type": "PostalAddress", addressLocality: "תל אביב", addressCountry: "IL" },
      knowsLanguage: ["he", "fr"],
      audience: { "@type": "Audience", audienceType: "עסקים, ארגונים ויזמים מכל תחום ומכל גודל" },
      knowsAbout: [
        "תשתיות רשת",
        "אבטחת מידע",
        "בניית אתרים",
        "CRM",
        "אפליקציות מובייל",
        "תוכנה בהתאמה אישית",
        "אוטומציה עסקית",
        "סוכני בינה מלאכותית",
        "וואטסאפ לעסקים",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "שירותי Mazaly Digital",
        itemListElement: [
          "בניית אתרים",
          "CRM",
          "אפליקציות מובייל",
          "תוכנה בהתאמה אישית",
          "אוטומציות",
          "סוכני בינה מלאכותית",
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
            text: "Mazaly Digital היא סוכנות דיגיטל הפועלת מתל אביב, עם ניסיון של מעל 20 שנה בעולם ה-IT והדיגיטל: תשתיות רשת, אבטחת מידע ופיתוח. היא מתכננת ובונה אתרים, מערכות CRM, אפליקציות מובייל, תוכנות בהתאמה אישית, אוטומציות וסוכני בינה מלאכותית לעסקים, לארגונים וליזמים מכל תחום ומכל גודל.",
          },
        },
        {
          "@type": "Question",
          name: "אילו שירותים Mazaly Digital מספקת?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "שישה תחומים תחת צוות אחד: בניית אתרים, CRM, אפליקציות מובייל, תוכנה בהתאמה אישית, אוטומציות וסוכני בינה מלאכותית אישיים.",
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
