import { CheckIcon, CrossIcon } from "@/components/Icons";
import { currency, vatRatePercent } from "@/data/plans";

const TEXT = {
  he: { setup: "הקמה", monthly: "לחודש", vat: `לפני מע״מ (${vatRatePercent}%)`, delay: (d) => `${d} ימי עסקים`, included: "כלול", excluded: "לא כלול", cta: (name) => `לדבר על ${name}`, badge: "הכי נבחרת" },
  fr: { setup: "installation", monthly: "/mois", vat: `hors TVA (${vatRatePercent} %)`, delay: (d) => `${d} jours ouvrés`, included: "Inclus", excluded: "Non inclus", cta: (name) => `Parler de ${name}`, badge: "Le plus choisi" },
};

export default function PlanCard({ plan, lang = "he", formHref }) {
  const t = TEXT[lang] || TEXT.he;
  const locale = lang === "fr" ? "fr-FR" : "he-IL";
  return (
    <div className={`pkg-card${plan.featured ? " featured" : ""}`}>
      {plan.featured && <span className="pkg-badge">{t.badge}</span>}
      <h3 className="pkg-name">{plan.name[lang]}</h3>
      <p className="pkg-tagline">{plan.tagline[lang]}</p>
      <div className="pkg-price">
        <span className="pkg-setup">{plan.setupPrice.toLocaleString(locale)} {currency}</span>
        <span className="pkg-monthly">{t.setup} + {plan.monthlyPrice.toLocaleString(locale)} {currency} {t.monthly}</span>
      </div>
      <p className="pkg-vat">{t.vat}</p>
      <span className="pkg-delay">{t.delay(plan.deliveryDaysBusiness)}</span>
      <p className="pkg-sub">{t.included}</p>
      <ul className="pkg-items">
        {plan.included.map((it) => (
          <li key={it[lang]}><CheckIcon />{it[lang]}</li>
        ))}
      </ul>
      <p className="pkg-sub">{t.excluded}</p>
      <ul className="pkg-excluded">
        {plan.excluded.map((it) => (
          <li key={it[lang]}><CrossIcon />{it[lang]}</li>
        ))}
      </ul>
      <span className="mag">
        <a className={`btn btn-mag${plan.featured ? "" : " btn-quiet"}`} href={formHref}>
          <span className="btn-in">{t.cta(plan.name[lang])}</span>
        </a>
      </span>
    </div>
  );
}
