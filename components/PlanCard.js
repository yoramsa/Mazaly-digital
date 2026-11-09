import { CheckIcon, CrossIcon } from "@/components/Icons";

const TEXT = {
  he: { quote: "המחיר נקבע בהצעת מחיר אישית", delay: (d) => `${d} ימי עסקים`, included: "כלול", excluded: "לא כלול", cta: (name) => `לבקש הצעת מחיר ל${name}`, badge: "הכי נבחרת" },
  fr: { quote: "Prix fixé dans un devis personnalisé", delay: (d) => `${d} jours ouvrés`, included: "Inclus", excluded: "Non inclus", cta: (name) => `Demander un devis — ${name}`, badge: "Le plus choisi" },
};

export default function PlanCard({ plan, lang = "he", formHref }) {
  const t = TEXT[lang] || TEXT.he;
  return (
    <div className={`pkg-card${plan.featured ? " featured" : ""}`}>
      {plan.featured && <span className="pkg-badge">{t.badge}</span>}
      <h3 className="pkg-name">{plan.name[lang]}</h3>
      <p className="pkg-tagline">{plan.tagline[lang]}</p>
      <p className="pkg-quote">{t.quote}</p>
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
