"use client";

import { useEffect, useState } from "react";
import { whatsappDisplay, whatsappHref } from "@/lib/site";
import { plans } from "@/data/plans";
import { track } from "@/lib/analytics";

const TEXT = {
  he: {
    stepLabel: (n) => `שלב ${n} מתוך 2`,
    planLabel: "איזה חבילה מעניינת אתכם",
    other: "לא בטוח / בהתאמה אישית",
    sizeLabel: "גודל העסק",
    sizes: ["עסק קטן", "עסק בינוני", "ארגון גדול"],
    next: "הבא",
    back: "חזרה",
    nameLabel: "שם מלא",
    namePh: "איך קוראים לכם?",
    contactLabel: "טלפון או אימייל",
    contactPh: "איך נחזור אליכם?",
    submit: "כן, בואו נתחיל!",
    sending: "שולח...",
    success: "תודה! קיבלנו את הפרטים ונחזור אליכם בתוך יום עסקים אחד.",
    error: "משהו השתבש. אפשר לכתוב לנו ישר בוואטסאפ:",
    required: "נא למלא שם ודרך ליצירת קשר.",
  },
  fr: {
    stepLabel: (n) => `Étape ${n} sur 2`,
    planLabel: "Quel forfait vous intéresse",
    other: "Pas sûr / sur mesure",
    sizeLabel: "Taille de l'entreprise",
    sizes: ["Petite entreprise", "Entreprise moyenne", "Grande organisation"],
    next: "Suivant",
    back: "Retour",
    nameLabel: "Nom complet",
    namePh: "Comment vous appelez-vous ?",
    contactLabel: "Téléphone ou e-mail",
    contactPh: "Comment vous recontacter ?",
    submit: "Oui, lançons-nous !",
    sending: "Envoi...",
    success: "Merci ! Nous avons bien reçu votre demande et revenons vers vous dans un jour ouvré.",
    error: "Un problème est survenu. Vous pouvez nous écrire directement sur WhatsApp :",
    required: "Merci de renseigner votre nom et un moyen de vous recontacter.",
  },
};

export default function LeadForm({ lang = "he", page = "/" }) {
  const t = TEXT[lang] || TEXT.he;
  const planOptions = [...plans.map((p) => p.name[lang]), t.other];

  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState(planOptions[0]);
  const [size, setSize] = useState(t.sizes[0]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const requested = params.get("plan");
      const match = plans.find((p) => p.id === requested);
      if (match) setPlan(match.name[lang]);
    } catch {}
  }, [lang]);

  function goNext() {
    track("plan_select", { lang, page, plan, size });
    setStep(2);
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) {
      setError(t.required);
      return;
    }
    setError("");
    if (honeypot.trim()) {
      setStatus("success");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, size, need: plan, lang, page, website: honeypot }),
      });
      if (!res.ok) throw new Error("bad_status");
      setStatus("success");
      track("lead_submit", { lang, page, plan, size });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="lead-done rv in">
        <span className="lead-done-icon">✓</span>
        <p>{t.success}</p>
      </div>
    );
  }

  return (
    <form className="lead-form rv in" onSubmit={onSubmit}>
      <div className="lead-steps" aria-hidden="true">
        <span className={`lead-step-dot${step === 1 ? " lead-step-dot-on" : ""}`}>1</span>
        <span className="lead-step-bar"></span>
        <span className={`lead-step-dot${step === 2 ? " lead-step-dot-on" : ""}`}>2</span>
      </div>
      <p className="field-label">{t.stepLabel(step)}</p>

      <input
        type="text"
        name="website"
        className="hp-field"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
      />

      {step === 1 && (
        <>
          <div className="lead-field">
            <span className="field-label">{t.planLabel}</span>
            <div className="chips">
              {planOptions.map((p) => (
                <button type="button" key={p} className={`chip${plan === p ? " chip-on" : ""}`} onClick={() => setPlan(p)}>{p}</button>
              ))}
            </div>
          </div>
          <div className="lead-field">
            <span className="field-label">{t.sizeLabel}</span>
            <div className="chips">
              {t.sizes.map((s) => (
                <button type="button" key={s} className={`chip${size === s ? " chip-on" : ""}`} onClick={() => setSize(s)}>{s}</button>
              ))}
            </div>
          </div>
          <div className="lead-actions lead-actions-single">
            <span className="mag">
              <button type="button" className="btn btn-mag" onClick={goNext}>
                <span className="btn-in">{t.next}</span>
              </button>
            </span>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div className="lead-row">
            <div className="lead-field">
              <label className="field-label" htmlFor="lead-name">{t.nameLabel}</label>
              <input className="input" id="lead-name" value={name} onChange={(e) => setName(e.target.value)} placeholder={t.namePh} />
            </div>
            <div className="lead-field">
              <label className="field-label" htmlFor="lead-contact">{t.contactLabel}</label>
              <input className="input" id="lead-contact" value={contact} onChange={(e) => setContact(e.target.value)} placeholder={t.contactPh} />
            </div>
          </div>
          {error && <p className="lead-error">{error}</p>}
          {status === "error" && (
            <p className="lead-error">{t.error} <a href={whatsappHref} target="_blank" rel="noopener">{whatsappDisplay}</a></p>
          )}
          <div className="lead-actions">
            <button type="button" className="btn btn-quiet btn-sm" onClick={() => setStep(1)}>
              <span className="btn-in">{t.back}</span>
            </button>
            <span className="mag">
              <button type="submit" className="btn btn-mag" disabled={status === "sending"}>
                <span className="btn-in">{status === "sending" ? t.sending : t.submit}</span>
              </button>
            </span>
          </div>
        </>
      )}
    </form>
  );
}
