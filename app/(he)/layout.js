import "../globals.css";
import { siteUrl } from "@/lib/site";

const title = "מזלי דיגיטל — השאפתנות שלכם ראויה ליותר מסתם אתר אינטרנט";
const description =
  "מזלי דיגיטל מלווה עסקים בטרנספורמציה הדיגיטלית שלהם: אתרים בהתאמה אישית, אפליקציות, בינה מלאכותית ואוטומציה, מתל אביב.";

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
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "מזלי דיגיטל — סטודיו דיגיטל יצירתי" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
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
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: "Mazaly Digital — מזלי דיגיטל",
      url: siteUrl,
      description,
      slogan: "השאפתנות שלכם ראויה ליותר מסתם אתר אינטרנט.",
      telephone: "+972-54-567-0414",
      image: `${siteUrl}/og-image.png`,
      logo: `${siteUrl}/icon-512.png`,
      priceRange: "999+ ILS",
      areaServed: { "@type": "Country", name: "ישראל" },
      address: { "@type": "PostalAddress", addressLocality: "תל אביב", addressCountry: "IL" },
      knowsLanguage: ["he", "fr"],
      audience: { "@type": "Audience", audienceType: "עסקים קטנים ובינוניים מכל תחום" },
      knowsAbout: ["אתרים וחנויות אונליין", "אפליקציות לאינטרנט ולנייד", "סוכני AI ובוואטסאפ", "CRM ואוטומציה", "נראות במנועי חיפוש ובינה מלאכותית", "תוכנה בהתאמה אישית"],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
