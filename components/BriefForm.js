"use client";

import { useEffect, useRef, useState } from "react";
import { whatsappDisplay, whatsappHref, emailDisplay, emailHref } from "@/lib/site";

const TEXT = {
  he: {
    needLabel: "מה אתם צריכים",
    activityLabel: "העסק והמטרה",
    outLabel: "ההודעה שלכם",
    copy: "העתקת ההודעה",
    hint: "הדביקו אותה בהודעה אל Mazaly Digital.",
    copied: "ההודעה הועתקה.",
    fallback: "ההודעה סומנה. העתיקו אותה מתפריט הטלפון או ב-Ctrl+C.",
    whatsappKey: "WhatsApp",
    emailKey: "אימייל",
    defaultActivity: "מסעדה בתל אביב, 40 מקומות ישיבה. אני רוצה אתר עם התפריט אונליין ועוזר שמקבל הזמנות בוואטסאפ.",
    needs: [
      { label: "בניית אתרים", on: true },
      { label: "מערכת ניהול מותאמת אישית", on: false },
      { label: "אפליקציית מובייל", on: false },
      { label: "תוכנה בהתאמה אישית", on: false },
      { label: "אוטומציות שחוסכות זמן", on: false },
      { label: "סוכן בינה מלאכותית אישי", on: true },
    ],
    greeting: "היי Mazaly Digital,",
    needsLine: (list) => "מה שאני צריכ/ה: " + (list || "יפורט בהמשך") + ".",
    closing: "אפשר לחזור אליי לשיחה? תודה.",
    fallbackActivity: "יפורט בהמשך",
  },
  fr: {
    needLabel: "De quoi avez-vous besoin",
    activityLabel: "Votre activité et votre objectif",
    outLabel: "Votre message",
    copy: "Copier le message",
    hint: "Collez-le dans un message à Mazaly Digital.",
    copied: "Message copié.",
    fallback: "Le message est sélectionné. Copiez-le depuis le menu du téléphone ou avec Ctrl+C.",
    whatsappKey: "WhatsApp",
    emailKey: "E-mail",
    defaultActivity: "Restaurant à Tel Aviv, 40 places assises. Je veux un site avec le menu en ligne et un assistant qui prend les réservations sur WhatsApp.",
    needs: [
      { label: "Création de site", on: true },
      { label: "Système de gestion sur mesure", on: false },
      { label: "Application mobile", on: false },
      { label: "Logiciel sur mesure", on: false },
      { label: "Automatisations qui font gagner du temps", on: false },
      { label: "Agent d'intelligence artificielle personnel", on: false },
    ],
    greeting: "Bonjour Mazaly Digital,",
    needsLine: (list) => "Ce dont j'ai besoin : " + (list || "à préciser") + ".",
    closing: "Pouvez-vous me rappeler pour en discuter ? Merci.",
    fallbackActivity: "à préciser",
  },
};

export default function BriefForm({ lang = "he" }) {
  const t = TEXT[lang] || TEXT.he;
  const [chips, setChips] = useState(t.needs);
  const [activity, setActivity] = useState(t.defaultActivity);
  const [hint, setHint] = useState(t.hint);
  const outRef = useRef(null);
  const flashTimer = useRef(null);

  const message = [
    t.greeting,
    "",
    t.needsLine(chips.filter((c) => c.on).map((c) => c.label).join(", ")),
    "",
    activity.trim() || t.fallbackActivity,
    "",
    t.closing,
  ].join("\n");

  useEffect(() => {
    const el = outRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + 4 + "px";
  }, [message]);

  function toggleChip(i) {
    setChips((prev) => prev.map((c, idx) => (idx === i ? { ...c, on: !c.on } : c)));
  }

  function flash(text) {
    setHint(text);
    clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setHint(t.hint), 2600);
  }

  async function copy() {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(message);
        flash(t.copied);
        return;
      }
      throw new Error("no clipboard");
    } catch {
      outRef.current?.focus();
      outRef.current?.select();
      flash(t.fallback);
    }
  }

  return (
    <div className="brief rv">
      <form className="brief-form" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <div>
          <span className="field-label" id="need-label">{t.needLabel}</span>
          <div className="chips" role="group" aria-labelledby="need-label">
            {chips.map((c, i) => (
              <button
                key={c.label}
                type="button"
                className={`chip${c.on ? " chip-on" : ""}`}
                aria-pressed={c.on ? "true" : "false"}
                onClick={() => toggleChip(i)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="field-label" htmlFor="activity">{t.activityLabel}</label>
          <textarea
            className="input input-area"
            id="activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
        </div>
      </form>
      <div className="brief-side">
        <span className="field-label" id="out-label">{t.outLabel}</span>
        <textarea className="brief-out" id="out" readOnly aria-labelledby="out-label" ref={outRef} value={message} />
        <div className="brief-actions">
          <span className="mag">
            <button type="button" className="btn btn-mag" id="copy" onClick={copy}>
              <span className="btn-in">{t.copy}</span>
            </button>
          </span>
          <p className="brief-hint" id="hint">{hint}</p>
        </div>
        <dl className="contact">
          <div className="contact-item">
            <dt className="contact-key">{t.whatsappKey}</dt>
            <dd className="contact-val"><a href={whatsappHref} target="_blank" rel="noopener">{whatsappDisplay}</a></dd>
          </div>
          <div className="contact-item">
            <dt className="contact-key">{t.emailKey}</dt>
            <dd className="contact-val">
              {emailHref ? <a href={emailHref}>{emailDisplay}</a> : <span>{emailDisplay}</span>}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
