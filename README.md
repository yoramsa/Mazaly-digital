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
- `ANTHROPIC_API_KEY` — מפתח API של [Claude](https://console.anthropic.com) להפעלת עוזר הצ'אט באתר (`AssistantWidget` / `app/api/chat/route.js`). בלי מפתח, כפתור הצ'אט מציג הודעת שגיאה ומפנה לוואטסאפ.

## מבנה

- `app/` — layout, metadata, JSON-LD, globals.css, API routes (`api/lead`, `api/chat`)
- `components/` — קומפוננטות React (דמו צ'אט, עוזר AI, טופס בריף, כרטיסי חבילה, אפקטים)
- `lib/` — תוכן (he/fr), תצורת אתר, הקשר לעוזר הצ'אט
- `data/plans.js` — מקור יחיד לחבילות, תנאים וטבלת השוואה
- `public/` — נכסים סטטיים (favicon, og-image, robots.txt, sitemap.xml, llms.txt)
