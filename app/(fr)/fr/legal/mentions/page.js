import LegalLayout from "@/components/LegalLayout";
import { emailDisplay, whatsappDisplay } from "@/lib/site";

export const metadata = {
  title: "Mazaly Digital | Mentions légales",
  alternates: { canonical: "/fr/legal/mentions", languages: { he: "/legal/tnaim", fr: "/fr/legal/mentions" } },
  robots: { index: true, follow: true },
};

export default function MentionsPage() {
  return (
    <LegalLayout lang="fr" homeHref="/fr" path="/fr/legal/mentions" title="Mentions légales">
      <h2 className="legal-h2">Qui nous sommes</h2>
      <p className="legal-p">Mazaly Digital est une agence digitale basée à Tel Aviv, Israël. Numéro d'entreprise : {"{{numero_entreprise}}"}. La navigation et l'utilisation de ce site valent acceptation des présentes conditions.</p>

      <h2 className="legal-h2">Utilisation du site</h2>
      <p className="legal-p">Ce site présente les services de l'agence et permet de demander un devis. Il est interdit de l'utiliser à des fins illégales, de nuire à son fonctionnement, ou de tenter d'accéder à des informations non destinées à la publication.</p>

      <h2 className="legal-h2">Propriété intellectuelle</h2>
      <p className="legal-p">Les textes, le design, le logo et le code de ce site appartiennent à Mazaly Digital, sauf mention contraire. Un site construit pour un client, selon le contrat spécifique conclu avec lui, lui appartient, comme précisé dans les conditions d'abonnement.</p>

      <h2 className="legal-h2">Limitation de responsabilité</h2>
      <p className="legal-p">Les informations de ce site sont fournies « en l'état ». Mazaly Digital s'efforce de maintenir l'exactitude des informations et des prix, sans garantir l'absence totale d'erreur à tout moment. Un devis final et contractuel est remis par écrit après un échange de cadrage.</p>

      <h2 className="legal-h2">Droit applicable</h2>
      <p className="legal-p">Les présentes conditions sont soumises au droit israélien, et les tribunaux du district de Tel Aviv sont seuls compétents.</p>

      <h2 className="legal-h2">Contact</h2>
      <p className="legal-p">Pour toute question : WhatsApp {whatsappDisplay}, e-mail {emailDisplay}.</p>
    </LegalLayout>
  );
}
