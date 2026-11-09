import LegalLayout from "@/components/LegalLayout";
import { emailDisplay, whatsappDisplay } from "@/lib/site";

export const metadata = {
  title: "Mazaly Digital | הצהרת נגישות",
  alternates: { canonical: "/legal/hangasha", languages: { he: "/legal/hangasha", fr: "/fr/legal/accessibilite" } },
  robots: { index: true, follow: true },
};

export default function HangashaPage() {
  return (
    <LegalLayout lang="he" homeHref="/" path="/legal/hangasha" title="הצהרת נגישות">
      <p className="legal-p">Mazaly Digital רואה חשיבות רבה בהנגשת האתר לכל אדם, כולל אנשים עם מוגבלות, בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג-2013.</p>

      <h2 className="legal-h2">רמת הנגישות</h2>
      <p className="legal-p">האתר נבנה מתוך כוונה לעמוד בתקן WCAG 2.1 בדרגה AA: ניגודיות צבעים נאותה, ניווט מלא במקלדת, תמיכה בטכנולוגיות מסייעות, התאמה לכיוון כתיבה (RTL בעברית, LTR בצרפתית), והתאמה להעדפת "הפחתת תנועה" בדפדפן.</p>

      <h2 className="legal-h2">מגבלות ידועות</h2>
      <p className="legal-p">חלק מהאנימציות העיצוביות באתר הן דקורטיביות ולא נושאות מידע. אם נתקלתם במכשול נגישות באתר, נודה לכם על הדיווח כדי שנוכל לתקן אותו.</p>

      <h2 className="legal-h2">רכז הנגישות</h2>
      <p className="legal-p">רכז/ת הנגישות של Mazaly Digital: {"{{רכז_נגישות}}"}. ניתן לפנות גם בוואטסאפ {whatsappDisplay} או באימייל {emailDisplay}.</p>
    </LegalLayout>
  );
}
