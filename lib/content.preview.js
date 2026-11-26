import { contact as contactFr, vitrinesSection as vitrinesFr, footer as footerFr } from "@/lib/content.fr";
import { contact as contactHe, vitrinesSection as vitrinesHe, footer as footerHe } from "@/lib/content.he";

export const homePath = { fr: "/preview-refonte", he: "/preview-refonte/he" };
export const legalPath = (lang, slug) => `${homePath[lang]}/legal/${slug}`;

// Même page juridique dans l'autre langue (les slugs existants du site sont conservés).
const LEGAL_PAIRS = [
  { key: "mentions", fr: "mentions", he: "tnaim" },
  { key: "confidentialite", fr: "confidentialite", he: "pratiut" },
  { key: "abonnement", fr: "abonnement", he: "manuy" },
  { key: "accessibilite", fr: "accessibilite", he: "hangasha" },
];
export const LEGAL_SLUGS = {
  fr: LEGAL_PAIRS.map((p) => p.fr),
  he: LEGAL_PAIRS.map((p) => p.he),
};
export function otherLangSlug(lang, slug) {
  const pair = LEGAL_PAIRS.find((p) => p[lang] === slug);
  return pair ? pair[lang === "fr" ? "he" : "fr"] : null;
}

function legalLinks(lang, footer) {
  return LEGAL_PAIRS.map((p) => ({
    key: p.key,
    slug: p[lang],
    label: footer.legal[p.key].label,
    href: legalPath(lang, p[lang]),
  }));
}

const vitrineById = (section) => Object.fromEntries(section.items.map((item) => [item.id, item]));
const vFr = vitrineById(vitrinesFr);
const vHe = vitrineById(vitrinesHe);

const HANOUKA_IMAGE = "/images/refonte/hanouka-party.webp";

function works(v, labels, flagship) {
  const concept = (id) => ({ ...labels[id], id, image: v[id].image, alt: v[id].alt, vitrine: v[id] });
  return [
    concept("sneakers"),
    concept("bijoux"),
    { ...flagship, id: "hanouka-party", image: HANOUKA_IMAGE, flagship: true },
    concept("parfum"),
    concept("cafe"),
    concept("restaurant"),
    concept("mode"),
    concept("judaica"),
  ];
}

const content = {
  fr: {
    dir: "ltr",
    langLabel: "FR",
    languages: [
      { code: "fr", label: "Français" },
      { code: "he", label: "עברית" },
    ],
    a11y: {
      menu: "Ouvrir le menu",
      close: "Fermer le menu",
      language: "Choisir la langue",
      nav: "Navigation principale",
      prev: "Précédent",
      next: "Suivant",
      page: "Aller à la diapositive",
      home: "Mazaly Digital — accueil",
      legal: "Informations légales",
      whatsapp: "Échanger sur WhatsApp",
    },
    nav: [
      { id: "accueil", label: "Accueil" },
      { id: "univers", label: "Services" },
      { id: "creations", label: "Créations" },
      { id: "approche", label: "Approche" },
      { id: "contact", label: "Contact" },
    ],
    previewPill: { label: "Aperçu de la refonte · non publié", back: "Site actuel", backHref: "/fr" },
    hero: {
      eyebrow: "Studio créatif digital",
      titleStart: "Vos idées prennent",
      titleAccent: "vie.",
      lead: "Sites web, identité visuelle, créations originales et expériences interactives qui marquent les esprits.",
      ctaPrimary: "Parlons de votre projet",
      ctaPrimaryMessage: "Bonjour, je voudrais échanger sur mon projet avec Mazaly Digital.",
      ctaSecondary: "Nos créations",
    },
    universes: {
      title: "Nos univers créatifs",
      aside: "Des solutions sur mesure pour vos projets",
      cta: "Parlons de votre projet",
      items: [
        { id: "digital", title: "Digital", text: "Sites web, boutiques en ligne et solutions digitales.", image: "/images/refonte/univers-digital.webp" },
        { id: "creation", title: "Création", text: "Identité visuelle, design graphique, jeux de cartes personnalisés et cadeaux créatifs.", image: "/images/refonte/univers-creation.webp" },
        { id: "experiences", title: "Expériences", text: "Quiz, concours, campagnes interactives et projets originaux comme Hanouka Party.", image: "/images/refonte/univers-experiences.webp" },
      ],
    },
    creations: {
      title: "Nos créations",
      aside: "Concepts créatifs et projets réalisés",
      seeAll: "Voir tout",
      seeAllHref: "/fr#vitrines",
      closeLabel: vitrinesFr.closeLabel,
      items: works(
        vFr,
        {
          sneakers: { category: "E-commerce", name: "Sneaker Concept", sub: "Concept · Boutique en ligne et univers de marque" },
          bijoux: { category: "Bijouterie", name: "Collection Bijoux", sub: "Concept · Site premium et identité visuelle" },
          parfum: { category: "Cosmétique", name: "Parfum Concept", sub: "Concept · Lancement produit immersif" },
          cafe: { category: "Café", name: "Café Concept", sub: "Concept · Ambiance de marque et commande" },
          restaurant: { category: "Restauration", name: "Restaurant Concept", sub: "Concept · Carte digitale et commande WhatsApp" },
          mode: { category: "Mode", name: "Collection Mode", sub: "Concept · Défilé digital et lookbook" },
          judaica: { category: "Judaïca", name: "Judaïca Concept", sub: "Concept · Présentation contemporaine en 3D" },
        },
        {
          category: "Projet phare",
          name: "Hanouka Party",
          sub: "Une expérience familiale interactive créée par Mazaly Digital",
          alt: "Toupie, pièces en chocolat et chandelier de Hanouka devant un téléphone",
        }
      ),
    },
    approach: {
      eyebrow: "Notre approche",
      statement: ["Une idée.", "Une création."],
      statementLast: "Un",
      statementAccent: "résultat.",
      steps: [
        { id: "imagine", title: "1. On imagine", text: "On écoute vos besoins et on construit le bon concept." },
        { id: "cree", title: "2. On crée", text: "On donne vie à votre projet avec créativité et précision." },
        { id: "grandir", title: "3. On fait grandir", text: "On vous accompagne vers des résultats concrets." },
      ],
    },
    contact: {
      ...contactFr,
      titleLine1: "Vous avez une idée ?",
      titleLine2: "Donnons-lui vie ensemble.",
      lead: "Parlez-nous de votre projet, on vous répond rapidement.",
      ctaQuote: "Demander un devis",
      closeForm: "Masquer le formulaire",
    },
    legalShell: {
      eyebrow: "Informations légales",
      back: "Retour à l'accueil",
      updated: "Dernière mise à jour : novembre 2026",
      others: "Autres informations légales",
    },
    footer: { ...footerFr, links: legalLinks("fr", footerFr) },
  },
  he: {
    dir: "rtl",
    langLabel: "HE",
    languages: [
      { code: "fr", label: "Français" },
      { code: "he", label: "עברית" },
    ],
    a11y: {
      menu: "פתיחת התפריט",
      close: "סגירת התפריט",
      language: "בחירת שפה",
      nav: "ניווט ראשי",
      prev: "הקודם",
      next: "הבא",
      page: "מעבר לשקופית",
      home: "Mazaly Digital — דף הבית",
      legal: "מידע משפטי",
      whatsapp: "לשוחח בוואטסאפ",
    },
    nav: [
      { id: "accueil", label: "בית" },
      { id: "univers", label: "שירותים" },
      { id: "creations", label: "יצירות" },
      { id: "approche", label: "הגישה שלנו" },
      { id: "contact", label: "צור קשר" },
    ],
    previewPill: { label: "תצוגה מקדימה של הרענון · לא פורסם", back: "האתר הנוכחי", backHref: "/" },
    hero: {
      eyebrow: "סטודיו דיגיטל יצירתי",
      titleStart: "הרעיונות שלכם מקבלים",
      titleAccent: "חיים.",
      lead: "אתרים, זהות מותגית, יצירות מקוריות וחוויות אינטראקטיביות שמשאירות רושם.",
      ctaPrimary: "בואו נדבר על הפרויקט שלכם",
      ctaPrimaryMessage: "היי, אני רוצה לדבר על הפרויקט שלי עם Mazaly Digital.",
      ctaSecondary: "היצירות שלנו",
    },
    universes: {
      title: "העולמות היצירתיים שלנו",
      aside: "פתרונות בהתאמה אישית לפרויקטים שלכם",
      cta: "בואו נדבר על הפרויקט שלכם",
      items: [
        { id: "digital", title: "דיגיטל", text: "אתרים, חנויות אונליין ופתרונות דיגיטליים.", image: "/images/refonte/univers-digital.webp" },
        { id: "creation", title: "יצירה", text: "זהות מותגית, עיצוב גרפי, חפיסות קלפים בהתאמה אישית ומתנות יצירתיות.", image: "/images/refonte/univers-creation.webp" },
        { id: "experiences", title: "חוויות", text: "קוויזים, תחרויות, קמפיינים אינטראקטיביים ופרויקטים מקוריים כמו Hanouka Party.", image: "/images/refonte/univers-experiences.webp" },
      ],
    },
    creations: {
      title: "היצירות שלנו",
      aside: "קונספטים יצירתיים ופרויקטים שבוצעו",
      seeAll: "לכל היצירות",
      seeAllHref: "/#vitrines",
      closeLabel: vitrinesHe.closeLabel,
      items: works(
        vHe,
        {
          sneakers: { category: "איקומרס", name: "קונספט סניקרס", sub: "קונספט · חנות אונליין ועולם מותג" },
          bijoux: { category: "תכשיטים", name: "קולקציית תכשיטים", sub: "קונספט · אתר פרימיום וזהות מותגית" },
          parfum: { category: "קוסמטיקה", name: "קונספט בושם", sub: "קונספט · השקת מוצר סוחפת" },
          cafe: { category: "בית קפה", name: "קונספט קפה", sub: "קונספט · אווירת מותג והזמנות" },
          restaurant: { category: "מסעדנות", name: "קונספט מסעדה", sub: "קונספט · תפריט דיגיטלי והזמנה בוואטסאפ" },
          mode: { category: "אופנה", name: "קולקציית אופנה", sub: "קונספט · תצוגת אופנה דיגיטלית" },
          judaica: { category: "יודאיקה", name: "קונספט יודאיקה", sub: "קונספט · הצגה עכשווית בתלת-ממד" },
        },
        {
          category: "פרויקט דגל",
          name: "Hanouka Party",
          sub: "חוויה משפחתית אינטראקטיבית שנוצרה על ידי Mazaly Digital",
          alt: "סביבון, מטבעות שוקולד וחנוכייה מול טלפון",
        }
      ),
    },
    approach: {
      eyebrow: "הגישה שלנו",
      statement: ["רעיון.", "יצירה."],
      statementLast: "",
      statementAccent: "תוצאה.",
      steps: [
        { id: "imagine", title: "1. אנחנו מדמיינים", text: "מקשיבים לצרכים שלכם ובונים את הקונספט הנכון." },
        { id: "cree", title: "2. אנחנו יוצרים", text: "מעניקים חיים לפרויקט שלכם ביצירתיות ובדיוק." },
        { id: "grandir", title: "3. אנחנו מצמיחים", text: "מלווים אתכם לעבר תוצאות מוחשיות." },
      ],
    },
    contact: {
      ...contactHe,
      titleLine1: "יש לכם רעיון?",
      titleLine2: "בואו ניתן לו חיים ביחד.",
      lead: "ספרו לנו על הפרויקט שלכם, ונחזור אליכם במהירות.",
      ctaQuote: "לבקש הצעת מחיר",
      closeForm: "הסתרת הטופס",
    },
    legalShell: {
      eyebrow: "מידע משפטי",
      back: "חזרה לדף הבית",
      updated: "עודכן לאחרונה: נובמבר 2026",
      others: "מידע משפטי נוסף",
    },
    footer: { ...footerHe, links: legalLinks("he", footerHe) },
  },
};

export const previewContent = content;

// Sous-ensemble sérialisé vers le shell (en-tête, pied de page, WhatsApp) des pages secondaires.
export function shellContent(lang) {
  const t = content[lang];
  return {
    dir: t.dir,
    langLabel: t.langLabel,
    languages: t.languages,
    a11y: t.a11y,
    nav: t.nav,
    previewPill: t.previewPill,
    ctaLabel: t.hero.ctaPrimary,
    whatsappMessage: t.hero.ctaPrimaryMessage,
    links: t.footer.links,
  };
}
