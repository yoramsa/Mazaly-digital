import { PreviewHtml, previewMetadata, previewViewport } from "../_root";

export const metadata = previewMetadata;
export const viewport = previewViewport;

export default function PreviewFrLayout({ children }) {
  return (
    <PreviewHtml lang="fr" dir="ltr">
      {children}
    </PreviewHtml>
  );
}
