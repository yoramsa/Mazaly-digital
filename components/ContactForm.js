"use client";

import { useState } from "react";
import { whatsappDisplay, whatsappHref } from "@/lib/site";
import { track } from "@/lib/analytics";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ content, lang = "fr", page = "/fr" }) {
  const f = content.form;
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function setField(field) {
    return (e) => setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = f.requiredName;
    if (!values.company.trim()) next.company = f.requiredCompany;
    if (!values.email.trim() || !EMAIL_RE.test(values.email.trim())) next.email = f.requiredEmail;
    if (!values.projectType) next.projectType = f.requiredProjectType;
    if (!values.message.trim()) next.message = f.requiredMessage;
    return next;
  }

  async function onSubmit(e) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (honeypot.trim()) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, lang, page, website: honeypot }),
      });
      if (!res.ok) throw new Error("bad_status");
      setStatus("success");
      track("contact_submit", { lang, page, projectType: values.projectType });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mz-form-done mz-reveal">
        <span className="mz-form-done-icon">✓</span>
        <p>{f.success}</p>
      </div>
    );
  }

  return (
    <form className="mz-contact-form mz-reveal" onSubmit={onSubmit} noValidate>
      <h3 className="mz-contact-form-title">{f.title}</h3>

      <input
        type="text"
        name="website"
        className="mz-hp-field"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
      />

      <div className="mz-form-row">
        <div className="mz-form-field">
          <label className="mz-form-label" htmlFor="ct-name">{f.nameLabel}</label>
          <input
            className="mz-form-input"
            id="ct-name"
            value={values.name}
            onChange={setField("name")}
            placeholder={f.namePh}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "ct-name-err" : undefined}
          />
          {errors.name && <p className="mz-form-error" id="ct-name-err">{errors.name}</p>}
        </div>
        <div className="mz-form-field">
          <label className="mz-form-label" htmlFor="ct-company">{f.companyLabel}</label>
          <input
            className="mz-form-input"
            id="ct-company"
            value={values.company}
            onChange={setField("company")}
            placeholder={f.companyPh}
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "ct-company-err" : undefined}
          />
          {errors.company && <p className="mz-form-error" id="ct-company-err">{errors.company}</p>}
        </div>
      </div>

      <div className="mz-form-row">
        <div className="mz-form-field">
          <label className="mz-form-label" htmlFor="ct-email">{f.emailLabel}</label>
          <input
            className="mz-form-input"
            id="ct-email"
            type="email"
            value={values.email}
            onChange={setField("email")}
            placeholder={f.emailPh}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "ct-email-err" : undefined}
          />
          {errors.email && <p className="mz-form-error" id="ct-email-err">{errors.email}</p>}
        </div>
        <div className="mz-form-field">
          <label className="mz-form-label" htmlFor="ct-phone">{f.phoneLabel}</label>
          <input
            className="mz-form-input"
            id="ct-phone"
            type="tel"
            value={values.phone}
            onChange={setField("phone")}
            placeholder={f.phonePh}
          />
        </div>
      </div>

      <div className="mz-form-row">
        <div className="mz-form-field">
          <label className="mz-form-label" htmlFor="ct-type">{f.projectTypeLabel}</label>
          <select
            className="mz-form-input mz-form-select"
            id="ct-type"
            value={values.projectType}
            onChange={setField("projectType")}
            aria-invalid={!!errors.projectType}
            aria-describedby={errors.projectType ? "ct-type-err" : undefined}
          >
            <option value="">{f.projectTypePlaceholder}</option>
            {f.projectTypeOptions.map((opt) => (
              <option value={opt} key={opt}>{opt}</option>
            ))}
          </select>
          {errors.projectType && <p className="mz-form-error" id="ct-type-err">{errors.projectType}</p>}
        </div>
        <div className="mz-form-field">
          <label className="mz-form-label" htmlFor="ct-budget">{f.budgetLabel}</label>
          <input
            className="mz-form-input"
            id="ct-budget"
            value={values.budget}
            onChange={setField("budget")}
            placeholder={f.budgetPh}
          />
        </div>
      </div>

      <div className="mz-form-field">
        <label className="mz-form-label" htmlFor="ct-message">{f.messageLabel}</label>
        <textarea
          className="mz-form-input mz-form-textarea"
          id="ct-message"
          rows={4}
          value={values.message}
          onChange={setField("message")}
          placeholder={f.messagePh}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "ct-message-err" : undefined}
        />
        {errors.message && <p className="mz-form-error" id="ct-message-err">{errors.message}</p>}
      </div>

      {status === "error" && (
        <p className="mz-form-error">{f.error} <a href={whatsappHref} target="_blank" rel="noopener">{whatsappDisplay}</a></p>
      )}

      <button type="submit" className="mz-cta mz-form-submit" disabled={status === "sending"}>
        {status === "sending" ? f.sending : f.submit}
      </button>
    </form>
  );
}
