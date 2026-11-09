import LegalLayout from "@/components/LegalLayout";
import { emailDisplay, whatsappDisplay } from "@/lib/site";

export const metadata = {
  title: "Mazaly Digital | תנאי שימוש",
  alternates: { canonical: "/legal/tnaim", languages: { he: "/legal/tnaim", fr: "/fr/legal/mentions" } },
  robots: { index: true, follow: true },
};

export default function TnaimPage() {
  return (
    <LegalLayout lang="he" homeHref="/" path="/legal/tnaim" title="תנאי שימוש">
      <h2 className="legal-h2">מי אנחנו</h2>
      <p className="legal-p">Mazaly Digital היא סוכנות דיגיטל הפועלת מתל אביב, ישראל. מספר עוסק/ח.פ: {"{{מספר_עוסק}}"}. הגלישה והשימוש באתר ובשירותים מהווים הסכמה לתנאים אלה.</p>

      <h2 className="legal-h2">השימוש באתר</h2>
      <p className="legal-p">האתר נועד להציג את שירותי הסוכנות ולאפשר יצירת קשר לקבלת הצעת מחיר. אין להשתמש באתר לכל מטרה בלתי חוקית, לפגוע בפעולתו, או לנסות לגשת למידע שאינו מיועד לפרסום.</p>

      <h2 className="legal-h2">קניין רוחני</h2>
      <p className="legal-p">כל הטקסטים, העיצוב, הלוגו והקוד של האתר שייכים ל-Mazaly Digital, אלא אם צוין אחרת. אתר שנבנה עבור לקוח, לפי ההסכם הספציפי איתו, שייך לאותו לקוח כמפורט בתנאי המנוי.</p>

      <h2 className="legal-h2">הגבלת אחריות</h2>
      <p className="legal-p">המידע באתר מוצג כפי שהוא ("as is"). Mazaly Digital עושה מאמץ לשמור על דיוק המידע והמחירים, אך אינה מתחייבת שהאתר יהיה נקי משגיאות בכל עת. הצעת מחיר סופית ומחייבת תימסר בכתב לאחר שיחת אפיון.</p>

      <h2 className="legal-h2">דין וסמכות שיפוט</h2>
      <p className="legal-p">על תנאים אלה יחולו דיני מדינת ישראל, וסמכות השיפוט הבלעדית תהיה לבתי המשפט במחוז תל אביב.</p>

      <h2 className="legal-h2">יצירת קשר</h2>
      <p className="legal-p">לשאלות בנוגע לתנאים אלה: וואטסאפ {whatsappDisplay}, אימייל {emailDisplay}.</p>
    </LegalLayout>
  );
}
