import "../globals.css";
import "./preview.css";

export const metadata = {
  title: "Aperçu refonte — Mazaly Digital",
  description: "Aperçu interne de la nouvelle direction artistique de Mazaly Digital. Page non publique, non indexée.",
  robots: { index: false, follow: false, nocache: true },
};

export const viewport = {
  themeColor: "#faf8f5",
};

export default function PreviewRefonteLayout({ children }) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body>{children}</body>
    </html>
  );
}
