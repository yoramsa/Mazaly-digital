# Mazaly Digital

אתר Mazaly Digital — Next.js (App Router), עברית בלבד, RTL.

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

## מבנה

- `app/` — layout, metadata, JSON-LD, globals.css
- `components/` — קומפוננטות React (chat, טופס בריף, אפקטים, רקע hero)
- `lib/` — תוכן (שירותים, חבילות, FAQ) ותצורת אתר
- `public/` — נכסים סטטיים (favicon, og-image, robots.txt, sitemap.xml, llms.txt)
