"use client";

import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Icons";
import { track } from "@/lib/analytics";

const TEXT = {
  he: { label: "דברו איתנו בוואטסאפ", short: "דברו איתנו", default: "היי, אני רוצה לשמוע על החבילות של Mazaly Digital." },
  fr: { label: "Parlez-nous sur WhatsApp", short: "Discuter", default: "Bonjour, je voudrais en savoir plus sur les forfaits Mazaly Digital." },
};

export default function WhatsappFloat({ lang = "he", message }) {
  const t = TEXT[lang] || TEXT.he;
  return (
    <a
      className="wa-float"
      href={waLink(message || t.default)}
      target="_blank"
      rel="noopener"
      aria-label={t.label}
      onClick={() => track("whatsapp_click", { lang, source: "float" })}
    >
      <span className="wa-float-icon"><WhatsAppIcon /></span>
      <span className="wa-float-label">{t.short}</span>
    </a>
  );
}
