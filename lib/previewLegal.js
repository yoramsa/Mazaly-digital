import LegalLayout from "@/components/LegalLayout";
import MentionsFr from "@/app/(fr)/fr/legal/mentions/page";
import ConfidentialiteFr from "@/app/(fr)/fr/legal/confidentialite/page";
import AbonnementFr from "@/app/(fr)/fr/legal/abonnement/page";
import AccessibiliteFr from "@/app/(fr)/fr/legal/accessibilite/page";
import TnaimHe from "@/app/(he)/legal/tnaim/page";
import PratiutHe from "@/app/(he)/legal/pratiut/page";
import ManuyHe from "@/app/(he)/legal/manuy/page";
import HangashaHe from "@/app/(he)/legal/hangasha/page";

const PAGES = {
  fr: { mentions: MentionsFr, confidentialite: ConfidentialiteFr, abonnement: AbonnementFr, accessibilite: AccessibiliteFr },
  he: { tnaim: TnaimHe, pratiut: PratiutHe, manuy: ManuyHe, hangasha: HangashaHe },
};

// Récupère titre et corps des pages juridiques existantes sans les copier ni les modifier :
// chaque page renvoie un <LegalLayout title>{contenu}</LegalLayout> dont on ne garde que le contenu.
export function loadLegalDoc(lang, slug) {
  const Page = PAGES[lang]?.[slug];
  if (!Page) return null;
  const element = Page();
  if (!element || element.type !== LegalLayout || typeof element.props?.title !== "string") {
    throw new Error(`Page juridique inattendue (${lang}/${slug}) : la preview attend un <LegalLayout title>.`);
  }
  return { title: element.props.title, children: element.props.children };
}
