import LegalLayout from "@/components/LegalLayout";
import { emailDisplay, whatsappDisplay } from "@/lib/site";

export const metadata = {
  title: "Mazaly Digital | Déclaration d'accessibilité",
  alternates: { canonical: "/fr/legal/accessibilite", languages: { he: "/legal/hangasha", fr: "/fr/legal/accessibilite" } },
  robots: { index: true, follow: true },
};

export default function AccessibilitePage() {
  return (
    <LegalLayout lang="fr" homeHref="/fr" path="/fr/legal/accessibilite" title="Déclaration d'accessibilité">
      <p className="legal-p">Mazaly Digital attache une grande importance à l'accessibilité de ce site pour toute personne, y compris les personnes en situation de handicap, conformément à la réglementation israélienne sur l'égalité des droits des personnes handicapées (accessibilité des services).</p>

      <h2 className="legal-h2">Niveau d'accessibilité</h2>
      <p className="legal-p">Le site a été conçu pour viser le niveau AA des normes WCAG 2.1 : contrastes de couleurs adaptés, navigation complète au clavier, compatibilité avec les technologies d'assistance, adaptation au sens de lecture (RTL en hébreu, LTR en français), et respect de la préférence « réduire les animations » du navigateur.</p>

      <h2 className="legal-h2">Limites connues</h2>
      <p className="legal-p">Certaines animations du site sont décoratives et ne portent pas d'information. Si vous rencontrez un obstacle d'accessibilité sur ce site, merci de nous le signaler afin que nous puissions le corriger.</p>

      <h2 className="legal-h2">Référent accessibilité</h2>
      <p className="legal-p">Référent accessibilité de Mazaly Digital : {"{{referent_accessibilite}}"}. Vous pouvez aussi nous contacter sur WhatsApp {whatsappDisplay} ou par e-mail {emailDisplay}.</p>
    </LegalLayout>
  );
}
