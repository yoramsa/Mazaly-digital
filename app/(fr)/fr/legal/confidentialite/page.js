import LegalLayout from "@/components/LegalLayout";
import { emailDisplay, whatsappDisplay } from "@/lib/site";

export const metadata = {
  title: "Mazaly Digital | Politique de confidentialité",
  alternates: { canonical: "/fr/legal/confidentialite", languages: { he: "/legal/pratiut", fr: "/fr/legal/confidentialite" } },
  robots: { index: true, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <LegalLayout lang="fr" homeHref="/fr" path="/fr/legal/confidentialite" title="Politique de confidentialité">
      <h2 className="legal-h2">Quelles informations sont collectées</h2>
      <p className="legal-p">Quand vous remplissez le formulaire de contact du site, nous collectons les informations que vous fournissez : nom et e-mail. Le site peut aussi collecter des données d'usage anonymes (pages consultées) via un outil d'analytics.</p>

      <h2 className="legal-h2">À quoi servent ces informations</h2>
      <ul className="legal-list">
        <li>Vous recontacter avec un devis ou une réponse à votre demande.</li>
        <li>Comprendre comment le site est utilisé, pour l'améliorer.</li>
        <li>Si vous devenez client : gérer le service, le support et la facturation.</li>
      </ul>

      <h2 className="legal-h2">Partage avec des tiers</h2>
      <p className="legal-p">Les informations envoyées via le formulaire sont transmises à WhatsApp et à notre service d'envoi d'e-mail (Resend) pour la seule réception de votre demande. Nous ne vendons et ne partageons aucune donnée à des fins de marketing tiers.</p>

      <h2 className="legal-h2">Sécurité des données</h2>
      <p className="legal-p">Le site est sécurisé en HTTPS, avec des protections de base contre le spam et les tentatives d'accès anormales. Aucune technologie ne garantit toutefois une sécurité absolue sur Internet.</p>

      <h2 className="legal-h2">Vos droits</h2>
      <p className="legal-p">Vous pouvez demander à tout moment à consulter, corriger ou supprimer les informations vous concernant, conformément à la loi israélienne sur la protection de la vie privée.</p>

      <h2 className="legal-h2">Contact</h2>
      <p className="legal-p">Pour toute question sur la confidentialité : WhatsApp <bdi>{whatsappDisplay}</bdi>, e-mail {emailDisplay}.</p>
    </LegalLayout>
  );
}
