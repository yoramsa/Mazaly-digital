import LegalLayout from "@/components/LegalLayout";
import { emailDisplay, whatsappDisplay } from "@/lib/site";

export const metadata = {
  title: "Mazaly Digital | מדיניות פרטיות",
  alternates: { canonical: "/legal/pratiut", languages: { he: "/legal/pratiut", fr: "/fr/legal/confidentialite" } },
  robots: { index: true, follow: true },
};

export default function PratiutPage() {
  return (
    <LegalLayout lang="he" homeHref="/" path="/legal/pratiut" title="מדיניות פרטיות">
      <h2 className="legal-h2">איזה מידע נאסף</h2>
      <p className="legal-p">כשאתם ממלאים את טופס יצירת הקשר באתר, אנחנו אוספים את הפרטים שאתם מוסרים: שם, דרך יצירת קשר (טלפון או אימייל), גודל העסק והחבילה שמעניינת אתכם. האתר עצמו עשוי לאסוף נתוני שימוש אנונימיים (למשל עמודים שנצפו) באמצעות כלי אנליטיקס.</p>

      <h2 className="legal-h2">למה המידע משמש</h2>
      <ul className="legal-list">
        <li>חזרה אליכם עם הצעת מחיר או מענה לפנייה.</li>
        <li>הבנת הדרך בה משתמשים באתר, כדי לשפר אותו.</li>
        <li>אם הפכתם ללקוחות: ניהול השירות, התמיכה והחיוב.</li>
      </ul>

      <h2 className="legal-h2">שיתוף עם צדדים שלישיים</h2>
      <p className="legal-p">הפרטים שאתם שולחים בטופס מועברים לוואטסאפ ולשירות שליחת האימייל שלנו (Resend) לצורך קבלת הפנייה בלבד. אנחנו לא מוכרים ולא משתפים מידע לצורך שיווק צד שלישי.</p>

      <h2 className="legal-h2">אבטחת מידע</h2>
      <p className="legal-p">האתר מאובטח בחיבור HTTPS, עם הגנות בסיסיות מפני ספאם וניסיונות גישה לא תקינים. למרות זאת, אין טכנולוגיה שמבטיחה אבטחה מוחלטת באינטרנט.</p>

      <h2 className="legal-h2">הזכויות שלכם</h2>
      <p className="legal-p">אתם יכולים לבקש בכל עת לעיין במידע שנשמר עליכם, לתקן אותו או למחוק אותו, בהתאם לחוק הגנת הפרטיות הישראלי.</p>

      <h2 className="legal-h2">יצירת קשר</h2>
      <p className="legal-p">לשאלות על פרטיות: וואטסאפ {whatsappDisplay}, אימייל {emailDisplay}.</p>
    </LegalLayout>
  );
}
