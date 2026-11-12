import LegalLayout from "@/components/LegalLayout";
import { vatRatePercent, startingPrice, currency } from "@/data/plans";
import { emailDisplay, whatsappDisplay } from "@/lib/site";

export const metadata = {
  title: "Mazaly Digital | Conditions d'abonnement",
  alternates: { canonical: "/fr/legal/abonnement", languages: { he: "/legal/manuy", fr: "/fr/legal/abonnement" } },
  robots: { index: true, follow: true },
};

export default function AbonnementPage() {
  return (
    <LegalLayout lang="fr" homeHref="/fr" path="/fr/legal/abonnement" title="Conditions d'abonnement">
      <h2 className="legal-h2">Structure du paiement</h2>
      <p className="legal-p">Chaque projet comprend des frais d'installation ponctuels, suivis d'un abonnement mensuel. Il n'y a pas de prix unique : le montant final est fixé dans un devis personnalisé, hors TVA ({vatRatePercent} %), à partir de {startingPrice.toLocaleString("fr-FR")} {currency} d'installation.</p>

      <h2 className="legal-h2">Durée d'engagement</h2>
      <p className="legal-p">L'abonnement mensuel implique un engagement de 12 mois à partir du début du service. Une résiliation anticipée entraîne des frais de sortie de {"{{frais_sortie_anticipee}}"}.</p>

      <h2 className="legal-h2">Délais de livraison</h2>
      <p className="legal-p">Le délai estimé est précisé dans le devis de chaque projet, et démarre après un échange de cadrage et la validation écrite du devis. Le délai réel dépend de la remise à temps des contenus et validations par le client.</p>

      <h2 className="legal-h2">Propriété du site et du système</h2>
      <p className="legal-p">Le site, le contenu et le code construits pour vous vous appartiennent dès le paiement complet de l'installation. L'abonnement mensuel couvre l'hébergement, les sauvegardes, la sécurité et le support — il ne conditionne pas la propriété du code.</p>

      <h2 className="legal-h2">Fin de l'abonnement</h2>
      <p className="legal-p">Si l'abonnement prend fin (à l'issue de l'engagement ou après paiement des frais de sortie), l'hébergement, les sauvegardes, la sécurité et les mises à jour courantes s'arrêtent. Vous pouvez demander le transfert des fichiers du site vers un autre hébergement.</p>

      <h2 className="legal-h2">Contact</h2>
      <p className="legal-p">Pour toute question sur l'abonnement : WhatsApp <bdi>{whatsappDisplay}</bdi>, e-mail {emailDisplay}.</p>
    </LegalLayout>
  );
}
