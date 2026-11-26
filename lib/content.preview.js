import { contact as contactFr, vitrinesSection as vitrinesFr, footer as footerFr } from "@/lib/content.fr";
import { contact as contactHe, vitrinesSection as vitrinesHe, footer as footerHe } from "@/lib/content.he";

const hanoukaFlagshipFr = {
  id: "hanouka-party",
  flagship: true,
  badge: "Projet phare · Expérience interactive",
  title: "Hanouka Party",
  desc: "Un jeu interactif créé par Mazaly Digital pour célébrer Hanouka : une expérience ludique et festive pensée pour engager une communauté en ligne.",
  tags: ["Jeu interactif", "Expérience de marque"],
  note: "Capture d'écran réelle à intégrer",
};

const hanoukaFlagshipHe = {
  id: "hanouka-party",
  flagship: true,
  badge: "פרויקט דגל · חוויה אינטראקטיבית",
  title: "Hanouka Party",
  desc: "משחק אינטראקטיבי שנוצר על ידי Mazaly Digital לכבוד חנוכה: חוויה חגיגית ומשעשעת שנועדה לעורר מעורבות קהילה אונליין.",
  tags: ["משחק אינטראקטיבי", "חוויית מותג"],
  note: "צילום מסך אמיתי יתווסף בהמשך",
};

export const previewContent = {
  fr: {
    dir: "ltr",
    brand: { name: "Mazaly", sub: "Digital" },
    banner: {
      label: "Aperçu de refonte · non publié",
      backLabel: "Retour au site actuel",
      backHref: "/fr",
    },
    nav: {
      universes: "Univers",
      creations: "Créations",
      approach: "Approche",
      contact: "Contact",
      langSwitch: "HE",
    },
    hero: {
      eyebrow: "Studio digital créatif · Nouvelle direction artistique",
      title: "Vos idées prennent vie.",
      lead: "Sites web, identité visuelle, créations originales et expériences interactives qui marquent les esprits.",
      ctaPrimary: "Parlons de votre projet",
      ctaPrimaryMessage: "Bonjour, je voudrais échanger sur mon projet avec Mazaly Digital (aperçu de la refonte).",
      ctaSecondary: "Nos créations",
    },
    universes: {
      eyebrow: "01 — Nos univers créatifs",
      title: "Trois univers, une seule vision.",
      lead: "Chaque projet s'inscrit dans un de nos trois univers créatifs, pensés pour couvrir l'ensemble de vos besoins digitaux et créatifs.",
      items: [
        {
          id: "digital",
          title: "Digital",
          text: "Sites web, boutiques en ligne et solutions digitales sur mesure, pensées pour convertir vos visiteurs en clients.",
        },
        {
          id: "creation",
          title: "Création",
          text: "Identité visuelle, design graphique, jeux de cartes personnalisés et cadeaux créatifs qui racontent votre marque.",
        },
        {
          id: "experiences",
          title: "Expériences",
          text: "Quiz, concours, campagnes interactives et expériences digitales originales qui engagent votre public.",
        },
      ],
    },
    creations: {
      eyebrow: "02 — Nos créations",
      title: "Chaque projet mérite une mise en scène.",
      lead: vitrinesFr.lead,
      effectCta: vitrinesFr.effectCta,
      closeLabel: vitrinesFr.closeLabel,
      flagship: hanoukaFlagshipFr,
      items: vitrinesFr.items,
      next: vitrinesFr.next,
    },
    approach: {
      eyebrow: "03 — Notre approche",
      title: "On imagine. On crée. On fait grandir.",
      steps: [
        { label: "01", title: "On imagine", text: "Nous prenons le temps de comprendre votre univers, vos objectifs et votre public pour imaginer la direction la plus juste." },
        { label: "02", title: "On crée", text: "Nous concevons et développons votre site, votre identité ou votre expérience avec une attention portée au détail et à la performance." },
        { label: "03", title: "On fait grandir", text: "Nous vous accompagnons après le lancement pour faire évoluer votre présence digitale et soutenir votre croissance." },
      ],
    },
    contact: {
      ...contactFr,
      eyebrow: "04 — Contact",
      title: "Vous avez une idée ? Donnons-lui vie ensemble.",
      ctaQuoteLabel: "Demander un devis",
    },
    footer: footerFr,
  },
  he: {
    dir: "rtl",
    brand: { name: "מזלי", sub: "דיגיטל" },
    banner: {
      label: "תצוגה מקדימה של הרענון · לא פורסם",
      backLabel: "חזרה לאתר הנוכחי",
      backHref: "/",
    },
    nav: {
      universes: "עולמות",
      creations: "יצירות",
      approach: "הגישה שלנו",
      contact: "צור קשר",
      langSwitch: "FR",
    },
    hero: {
      eyebrow: "סטודיו דיגיטל יצירתי · כיוון עיצובי חדש",
      title: "הרעיונות שלכם מקבלים חיים.",
      lead: "אתרים, זהות מותגית, יצירות מקוריות וחוויות אינטראקטיביות שמשאירות רושם.",
      ctaPrimary: "בואו נדבר על הפרויקט שלכם",
      ctaPrimaryMessage: "היי, אני רוצה לדבר על הפרויקט שלי עם Mazaly Digital (תצוגה מקדימה של הרענון).",
      ctaSecondary: "היצירות שלנו",
    },
    universes: {
      eyebrow: "01 — העולמות היצירתיים שלנו",
      title: "שלושה עולמות, חזון אחד.",
      lead: "כל פרויקט משתייך לאחד משלושת העולמות היצירתיים שלנו, שנועדו לכסות את כל הצרכים הדיגיטליים והיצירתיים שלכם.",
      items: [
        {
          id: "digital",
          title: "דיגיטל",
          text: "אתרים, חנויות אונליין ופתרונות דיגיטליים בהתאמה אישית, שנועדו להפוך מבקרים ללקוחות.",
        },
        {
          id: "creation",
          title: "יצירה",
          text: "זהות מותגית, עיצוב גרפי, חפיסות קלפים בהתאמה אישית ומתנות יצירתיות שמספרות את סיפור המותג שלכם.",
        },
        {
          id: "experiences",
          title: "חוויות",
          text: "קוויזים, תחרויות, קמפיינים אינטראקטיביים וחוויות דיגיטליות מקוריות שמעוררות מעורבות.",
        },
      ],
    },
    creations: {
      eyebrow: "02 — היצירות שלנו",
      title: "לכל פרויקט מגיעה הצגה משלו.",
      lead: vitrinesHe.lead,
      effectCta: vitrinesHe.effectCta,
      closeLabel: vitrinesHe.closeLabel,
      flagship: hanoukaFlagshipHe,
      items: vitrinesHe.items,
      next: vitrinesHe.next,
    },
    approach: {
      eyebrow: "03 — הגישה שלנו",
      title: "אנחנו מדמיינים. אנחנו יוצרים. אנחנו מצמיחים.",
      steps: [
        { label: "01", title: "אנחנו מדמיינים", text: "אנחנו לוקחים את הזמן להבין את העולם שלכם, המטרות והקהל, כדי לדמיין את הכיוון המדויק ביותר." },
        { label: "02", title: "אנחנו יוצרים", text: "אנחנו מעצבים ובונים את האתר, הזהות או החוויה שלכם עם תשומת לב לפרטים ולביצועים." },
        { label: "03", title: "אנחנו מצמיחים", text: "אנחנו מלווים אתכם אחרי ההשקה כדי לפתח את הנוכחות הדיגיטלית שלכם ולתמוך בצמיחה שלכם." },
      ],
    },
    contact: {
      ...contactHe,
      eyebrow: "04 — צור קשר",
      title: "יש לכם רעיון? בואו ניתן לו חיים ביחד.",
      ctaQuoteLabel: "לבקש הצעת מחיר",
    },
    footer: footerHe,
  },
};
