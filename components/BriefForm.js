"use client";

import { useEffect, useRef, useState } from "react";
import { whatsappDisplay, whatsappHref, emailDisplay, emailHref } from "@/lib/site";

const NEEDS = [
  { label: "בניית אתרים", on: true },
  { label: "CRM", on: false },
  { label: "אפליקציית מובייל", on: false },
  { label: "תוכנה בהתאמה אישית", on: false },
  { label: "אוטומציות", on: false },
  { label: "סוכן בינה מלאכותית אישי", on: true },
];

const DEFAULT_ACTIVITY = "מסעדה בתל אביב, 40 מקומות ישיבה. אני רוצה אתר עם התפריט אונליין ועוזר שמקבל הזמנות בוואטסאפ.";
const HINT = "הדביקו אותה בהודעה אל Mazaly Digital.";

export default function BriefForm() {
  const [chips, setChips] = useState(NEEDS);
  const [activity, setActivity] = useState(DEFAULT_ACTIVITY);
  const [lang, setLang] = useState("he");
  const [hint, setHint] = useState(HINT);
  const outRef = useRef(null);
  const flashTimer = useRef(null);

  const message = [
    "היי Mazaly Digital,",
    "",
    "מה שאני צריכ/ה: " + (chips.filter((c) => c.on).map((c) => c.label).join(", ") || "יפורט בהמשך") + ".",
    "",
    activity.trim() || "יפורט בהמשך",
    "",
    "שפת הפרויקט: " + (lang === "he" ? "עברית" : lang === "fr" ? "צרפתית" : "עברית וצרפתית") + ".",
    "",
    "אפשר לחזור אליי לשיחה? תודה.",
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
    flashTimer.current = setTimeout(() => setHint(HINT), 2600);
  }

  async function copy() {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(message);
        flash("ההודעה הועתקה.");
        return;
      }
      throw new Error("no clipboard");
    } catch {
      outRef.current?.focus();
      outRef.current?.select();
      flash("ההודעה סומנה. העתיקו אותה מתפריט הטלפון או ב-Ctrl+C.");
    }
  }

  return (
    <div className="brief rv">
      <form className="brief-form" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <div>
          <span className="field-label" id="need-label">מה אתם צריכים</span>
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
          <label className="field-label" htmlFor="activity">העסק והמטרה</label>
          <textarea
            className="input input-area"
            id="activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
        </div>
        <div>
          <label className="field-label" htmlFor="lang">שפת הפרויקט</label>
          <select className="input" id="lang" value={lang} onChange={(e) => setLang(e.target.value)}>
            <option value="he">עברית</option>
            <option value="fr">צרפתית</option>
            <option value="both">עברית וצרפתית</option>
          </select>
        </div>
      </form>
      <div className="brief-side">
        <span className="field-label" id="out-label">ההודעה שלכם</span>
        <textarea className="brief-out" id="out" readOnly aria-labelledby="out-label" ref={outRef} value={message} />
        <div className="brief-actions">
          <span className="mag">
            <button type="button" className="btn btn-mag" id="copy" onClick={copy}>
              <span className="btn-in">העתקת ההודעה</span>
            </button>
          </span>
          <p className="brief-hint" id="hint">{hint}</p>
        </div>
        <dl className="contact">
          <div className="contact-item">
            <dt className="contact-key">WhatsApp</dt>
            <dd className="contact-val"><a href={whatsappHref} target="_blank" rel="noopener">{whatsappDisplay}</a></dd>
          </div>
          <div className="contact-item">
            <dt className="contact-key">אימייל</dt>
            <dd className="contact-val">
              {emailHref ? <a href={emailHref}>{emailDisplay}</a> : <span>{emailDisplay}</span>}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
