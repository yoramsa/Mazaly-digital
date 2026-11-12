"use client";

import { useState } from "react";
import { whatsappDisplay, whatsappHref } from "@/lib/site";
import { track } from "@/lib/analytics";

const TEXT = {
  he: {
    nameLabel: "שם מלא",
    namePh: "איך קוראים לכם?",
    emailLabel: "אימייל",
    emailPh: "האימייל שלכם",
    submit: "אני מעוניין/ת",
    sending: "שולח...",
    success: "תודה! קיבלנו את הפרטים ונחזור אליכם בתוך יום עסקים אחד.",
    error: "משהו השתבש. אפשר לכתוב לנו ישר בוואטסאפ:",
    required: "נא למלא שם ואימייל.",
  },
  fr: {
    nameLabel: "Nom complet",
    namePh: "Comment vous appelez-vous ?",
    emailLabel: "E-mail",
    emailPh: "Votre adresse e-mail",
    submit: "Je suis intéressé(e)",
    sending: "Envoi...",
    success: "Merci ! Nous avons bien reçu votre demande et revenons vers vous dans un jour ouvré.",
    error: "Un problème est survenu. Vous pouvez nous écrire directement sur WhatsApp :",
    required: "Merci de renseigner votre nom et votre e-mail.",
  },
};

export default function LeadForm({ lang = "he", page = "/" }) {
  const t = TEXT[lang] || TEXT.he;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
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
        body: JSON.stringify({ name, email, lang, page, website: honeypot }),
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
          <label className="field-label" htmlFor="lead-email">{t.emailLabel}</label>
          <input className="input" id="lead-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.emailPh} />
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
