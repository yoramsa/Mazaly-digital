import { Plus_Jakarta_Sans, Heebo } from "next/font/google";
import "../globals.css";
import "./preview.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-heebo",
  display: "swap",
});

export const previewMetadata = {
  title: "Aperçu refonte — Mazaly Digital",
  description: "Aperçu interne de la nouvelle direction artistique de Mazaly Digital. Page non publique, non indexée.",
  robots: { index: false, follow: false, nocache: true },
};

export const previewViewport = {
  themeColor: "#fcf4f7",
  colorScheme: "light",
};

// Marque le document comme "JS actif" avant le premier rendu : les révélations au scroll
// ne masquent le contenu que si le script peut ensuite le faire apparaître.
const jsFlag = "document.documentElement.classList.add('pr-js')";

export function PreviewHtml({ lang, dir, children }) {
  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body className={`${jakarta.variable} ${heebo.variable}`}>{children}</body>
    </html>
  );
}
