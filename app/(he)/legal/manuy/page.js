import LegalLayout from "@/components/LegalLayout";
import { vatRatePercent } from "@/data/plans";
import { emailDisplay, whatsappDisplay } from "@/lib/site";

export const metadata = {
  title: "Mazaly Digital | תנאי מנוי",
  alternates: { canonical: "/legal/manuy", languages: { he: "/legal/manuy", fr: "/fr/legal/abonnement" } },
  robots: { index: true, follow: true },
};

export default function ManuyPage() {
  return (
    <LegalLayout lang="he" homeHref="/" path="/legal/manuy" title="תנאי מנוי">
      <h2 className="legal-h2">מבנה התשלום</h2>
      <p className="legal-p">כל חבילה כוללת תשלום הקמה חד-פעמי, ולאחריו מנוי חודשי. המחירים המוצגים באתר הם לפני מע״מ ({vatRatePercent}%). המחיר המדויק, כולל מע״מ, מופיע בהצעת המחיר הסופית.</p>

      <h2 className="legal-h2">תקופת התחייבות</h2>
      <p className="legal-p">המנוי החודשי כולל התחייבות של 12 חודשים מתחילת השירות. סיום מוקדם של ההתחייבות כרוך בעמלת יציאה מוקדמת בסך {"{{עמלת_יציאה_מוקדמת}}"}.</p>

      <h2 className="legal-h2">זמני אספקה</h2>
      <p className="legal-p">זמני האספקה המשוערים (7 ימי עסקים לחיוני, 14 לצמיחה, 21 למלא) מתחילים לאחר שיחת אפיון ואישור בכתב של ההצעה, ותלויים במסירת חומרים ואישורים מצד הלקוח בזמן.</p>

      <h2 className="legal-h2">בעלות על האתר והמערכת</h2>
      <p className="legal-p">האתר, התוכן והקוד שנבנו עבורכם שייכים לעסק שלכם מרגע התשלום המלא על ההקמה. המנוי החודשי מכסה אחסון, גיבויים, אבטחה ותמיכה — ואינו תנאי לבעלות על הקוד.</p>

      <h2 className="legal-h2">סיום המנוי</h2>
      <p className="legal-p">אם המנוי מסתיים (בתום ההתחייבות או לאחר תשלום עמלת היציאה), האחסון, הגיבויים, האבטחה והעדכונים השוטפים מופסקים. ניתן לבקש להעביר את קבצי האתר לאחסון אחר.</p>

      <h2 className="legal-h2">יצירת קשר</h2>
      <p className="legal-p">לשאלות על המנוי: וואטסאפ {whatsappDisplay}, אימייל {emailDisplay}.</p>
    </LegalLayout>
  );
}
