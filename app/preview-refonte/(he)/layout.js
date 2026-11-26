import { PreviewHtml, previewMetadata, previewViewport } from "../_root";

export const metadata = previewMetadata;
export const viewport = previewViewport;

export default function PreviewHeLayout({ children }) {
  return (
    <PreviewHtml lang="he" dir="rtl">
      {children}
    </PreviewHtml>
  );
}
