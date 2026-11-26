import { notFound } from "next/navigation";
import PreviewLegalPage from "@/components/preview/PreviewLegalPage";
import { LEGAL_SLUGS } from "@/lib/content.preview";
import { loadLegalDoc } from "@/lib/previewLegal";

export const dynamicParams = false;

export function generateStaticParams() {
  return LEGAL_SLUGS.fr.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const doc = loadLegalDoc("fr", slug);
  return { title: doc ? `${doc.title} — Aperçu refonte` : "Aperçu refonte" };
}

export default async function PreviewLegalFr({ params }) {
  const { slug } = await params;
  if (!loadLegalDoc("fr", slug)) notFound();
  return <PreviewLegalPage lang="fr" slug={slug} />;
}
