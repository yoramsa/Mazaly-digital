# Mazaly Digital

אתר Mazaly Digital — Next.js (App Router), עברית (RTL) וצרפתית (LTR) ב-`/fr`.

## פיתוח מקומי

```bash
npm install
npm run dev
```

## משתני סביבה

ראו `.env.example`. יש להגדיר אותם בפרויקט ב-Vercel (Settings → Environment Variables):

- `NEXT_PUBLIC_CONTACT_EMAIL` — כתובת האימייל להצגה באתר. כל עוד לא מוגדר, האתר מציג placeholder ברור במקום כתובת בדויה.
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — מספר WhatsApp בפורמט בינלאומי בלי + (למשל `972501234567`).
- `NEXT_PUBLIC_SITE_URL` — כתובת הדומיין הסופית, לשימוש ב-SEO וב-JSON-LD.
- `RESEND_API_KEY`, `LEAD_TO_EMAIL`, `LEAD_FROM_EMAIL` — שליחת לידים מהטופס באימייל דרך [Resend](https://resend.com). בלי מפתח, הליד רק נרשם ללוג השרת.
- `ANTHROPIC_API_KEY` — מפתח API של [Claude](https://console.anthropic.com) לעוזר הצ'אט (`AssistantWidget` / `app/api/chat/route.js`). הקוד קיים אך כרגע לא מוצג בדף הבית (הושהה לפי בקשה, עד שיוחלט להפעיל אותו); בלי מפתח, ה-API מחזיר שגיאה מטופלת.

## מבנה

- `app/` — layout, metadata, JSON-LD, globals.css, API routes (`api/lead`, `api/chat`)
- `components/` — קומפוננטות React (טופס ליד, כפתור וואטסאפ, עוזר צ'אט [לא מופעל כרגע], אפקטים)
- `lib/` — תוכן (he/fr: שני השירותים), תצורת אתר, הקשר לעוזר הצ'אט
- `data/plans.js` — קבועי מחיר (מטבע, אחוז מע״מ, מחיר פתיחה)
- `public/` — נכסים סטטיים (favicon, og-image, robots.txt, sitemap.xml, llms.txt)
