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

export const metadata = {
  title: "Aperçu refonte — Mazaly Digital",
  description: "Aperçu interne de la nouvelle direction artistique de Mazaly Digital. Page non publique, non indexée.",
  robots: { index: false, follow: false, nocache: true },
};

export const viewport = {
  themeColor: "#fcf4f7",
};

export default function PreviewRefonteLayout({ children }) {
  return (
    <html lang="fr" dir="ltr">
      <body className={`${jakarta.variable} ${heebo.variable}`}>{children}</body>
    </html>
  );
}
