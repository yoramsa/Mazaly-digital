"use client";

import { useState } from "react";
import { whatsappDisplay, whatsappHref } from "@/lib/site";
import { track } from "@/lib/analytics";

const TEXT = {
  he: {
    nameLabel: "שם",
    namePh: "איך קוראים לכם?",
    contactLabel: "טלפון או אימייל",
    contactPh: "מספר טלפון או אימייל",
    messageLabel: "הודעה (לא חובה)",
    messagePh: "רוצים לספר לנו עוד משהו?",
    submit: "שלחו לי פרטים",
    sending: "שולח...",
    success: "תודה! קיבלנו את הפרטים ונחזור אליכם בהקדם.",
    error: "משהו השתבש. אפשר לכתוב לנו ישר בוואטסאפ:",
    required: "נא למלא שם וטלפון או אימייל.",
  },
  fr: {
    nameLabel: "Nom",
    namePh: "Comment vous appelez-vous ?",
    contactLabel: "Téléphone ou e-mail",
    contactPh: "Votre numéro ou votre e-mail",
    messageLabel: "Message (facultatif)",
    messagePh: "Un détail à nous partager ?",
    submit: "On me recontacte",
    sending: "Envoi...",
    success: "Merci ! Nous avons bien reçu votre demande et revenons vers vous rapidement.",
    error: "Un problème est survenu. Vous pouvez nous écrire directement sur WhatsApp :",
    required: "Merci de renseigner votre nom et un téléphone ou un e-mail.",
  },
};

export default function LeadForm({ lang = "he", page = "/" }) {
  const t = TEXT[lang] || TEXT.he;
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

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
        body: JSON.stringify({ name, contact, message, lang, page, website: honeypot }),
      });
      if (!res.ok) throw new Error("bad_status");
      setStatus("success");
      track("lead_submit", { lang, page });
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
      <div className="lead-row">
        <div className="lead-field">
          <label className="field-label" htmlFor="lead-name">{t.nameLabel}</label>
          <input className="input" id="lead-name" value={name} onChange={(e) => setName(e.target.value)} placeholder={t.namePh} />
        </div>
        <div className="lead-field">
          <label className="field-label" htmlFor="lead-contact">{t.contactLabel}</label>
          <input className="input" id="lead-contact" value={contact} onChange={(e) => setContact(e.target.value)} placeholder={t.contactPh} />
        </div>
        <div className="lead-field lead-field-full">
          <label className="field-label" htmlFor="lead-message">{t.messageLabel}</label>
          <textarea className="textarea" id="lead-message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder={t.messagePh} />
        </div>
      </div>
      {error && <p className="lead-error">{error}</p>}
      {status === "error" && (
        <p className="lead-error">{t.error} <a href={whatsappHref} target="_blank" rel="noopener"><bdi>{whatsappDisplay}</bdi></a></p>
      )}
      <span className="mag">
        <button type="submit" className="btn btn-mag" disabled={status === "sending"}>
          <span className="btn-in">{status === "sending" ? t.sending : t.submit}</span>
        </button>
      </span>
    </form>
  );
}
