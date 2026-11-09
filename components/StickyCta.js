"use client";

import { waLink } from "@/lib/site";
import { track } from "@/lib/analytics";

const TEXT = {
  he: { plans: "לראות חבילות", whatsapp: "וואטסאפ", default: "היי, אני רוצה לשמוע על החבילות של Mazaly Digital." },
  fr: { plans: "Voir les forfaits", whatsapp: "WhatsApp", default: "Bonjour, je voudrais en savoir plus sur les forfaits Mazaly Digital." },
};

export default function StickyCta({ lang = "he" }) {
  const t = TEXT[lang] || TEXT.he;
  return (
    <div className="sticky-cta" role="navigation" aria-label={t.plans}>
      <a className="btn btn-quiet sticky-cta-btn" href="#forfaits" onClick={() => track("plan_scroll_click", { lang, source: "sticky" })}>
        <span className="btn-in">{t.plans}</span>
      </a>
      <a
        className="btn btn-gold sticky-cta-btn"
        href={waLink(t.default)}
        target="_blank"
        rel="noopener"
        onClick={() => track("whatsapp_click", { lang, source: "sticky" })}
      >
        <span className="btn-in">{t.whatsapp}</span>
      </a>
    </div>
  );
}
