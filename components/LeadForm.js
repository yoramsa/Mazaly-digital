"use client";

import { useState } from "react";
import { whatsappDisplay, whatsappHref } from "@/lib/site";

const TEXT = {
  he: {
    nameLabel: "שם מלא",
    namePh: "איך קוראים לכם?",
    contactLabel: "טלפון או אימייל",
    contactPh: "איך נחזור אליכם?",
    sizeLabel: "גודל העסק",
    sizes: ["עסק קטן", "עסק בינוני", "ארגון גדול"],
    needLabel: "מה אתם צריכים",
    needs: ["בניית אתר", "CRM", "אוטומציה", "סוכן AI", "תוכן דיגיטלי", "אפליקציה / תוכנה"],
    submit: "כן, בואו נתחיל!",
    sending: "שולח...",
    success: "תודה! קיבלנו את הפרטים ונחזור אליכם בהקדם.",
    error: "משהו השתבש. אפשר לכתוב לנו ישר בוואטסאפ:",
    required: "נא למלא שם ודרך ליצירת קשר.",
  },
  fr: {
    nameLabel: "Nom complet",
    namePh: "Comment vous appelez-vous ?",
    contactLabel: "Téléphone ou e-mail",
    contactPh: "Comment vous recontacter ?",
    sizeLabel: "Taille de l'entreprise",
    sizes: ["Petite entreprise", "Entreprise moyenne", "Grande organisation"],
    needLabel: "De quoi avez-vous besoin",
    needs: ["Création de site", "CRM", "Automatisation", "Agent IA", "Contenu digital", "Application / logiciel"],
    submit: "Oui, lançons-nous !",
    sending: "Envoi...",
    success: "Merci ! Nous avons bien reçu votre demande et revenons vers vous rapidement.",
    error: "Un problème est survenu. Vous pouvez nous écrire directement sur WhatsApp :",
    required: "Merci de renseigner votre nom et un moyen de vous recontacter.",
  },
};

export default function LeadForm({ lang = "he", page = "/" }) {
  const t = TEXT[lang] || TEXT.he;
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [size, setSize] = useState(t.sizes[0]);
  const [need, setNeed] = useState(t.needs[0]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) {
      setError(t.required);
      return;
    }
    setError("");
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, size, need, lang, page }),
      });
      if (!res.ok) throw new Error("bad_status");
      setStatus("success");
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
      <div className="lead-field">
        <span className="field-label">{t.sizeLabel}</span>
        <div className="chips">
          {t.sizes.map((s) => (
            <button type="button" key={s} className={`chip${size === s ? " chip-on" : ""}`} onClick={() => setSize(s)}>{s}</button>
          ))}
        </div>
      </div>
      <div className="lead-field">
        <span className="field-label">{t.needLabel}</span>
        <div className="chips">
          {t.needs.map((n) => (
            <button type="button" key={n} className={`chip${need === n ? " chip-on" : ""}`} onClick={() => setNeed(n)}>{n}</button>
          ))}
        </div>
      </div>
      {error && <p className="lead-error">{error}</p>}
      {status === "error" && (
        <p className="lead-error">{t.error} <a href={whatsappHref} target="_blank" rel="noopener">{whatsappDisplay}</a></p>
      )}
      <span className="mag">
        <button type="submit" className="btn btn-mag" disabled={status === "sending"}>
          <span className="btn-in">{status === "sending" ? t.sending : t.submit}</span>
        </button>
      </span>
    </form>
  );
}
