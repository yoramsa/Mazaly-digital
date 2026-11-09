export const currency = "₪";
export const vatRatePercent = 18;
export const startingPrice = 999;

export const plans = [
  {
    id: "essentiel",
    featured: false,
    deliveryDaysBusiness: 7,
    name: { he: "חיוני", fr: "Essentiel" },
    tagline: {
      he: "להיות נראים ולקבל פניות.",
      fr: "Pour être visible et recevoir des demandes.",
    },
    included: [
      { he: "אתר תדמית דו-לשוני (עברית וצרפתית), מהיר ומתאים למובייל", fr: "Site vitrine bilingue hébreu/français, rapide, adapté mobile" },
      { he: "SEO בסיסי ונראות במנועי בינה מלאכותית", fr: "SEO de base et visibilité dans les IA" },
      { he: "טופס לידים מחובר לוואטסאפ ולאימייל", fr: "Formulaire relié à WhatsApp et e-mail" },
      { he: "הגדרת פרופיל Google Business", fr: "Fiche Google Business Profile configurée" },
      { he: "מנוי חודשי: אחסון, גיבויים, אבטחה, שינוי אחד בחודש", fr: "Mensuel : hébergement, sauvegardes, sécurité, 1 modification par mois" },
    ],
    excluded: [
      { he: "מערכת CRM", fr: "CRM" },
      { he: "אוטומציות", fr: "Automatisations" },
      { he: "סוכן בינה מלאכותית בוואטסאפ", fr: "Agent IA WhatsApp" },
      { he: "תוכן דיגיטלי חודשי", fr: "Contenu digital mensuel" },
      { he: "אפליקציה או תוכנה בהתאמה אישית", fr: "Application ou logiciel sur mesure" },
    ],
  },
  {
    id: "croissance",
    featured: true,
    deliveryDaysBusiness: 14,
    name: { he: "צמיחה", fr: "Croissance" },
    tagline: {
      he: "לנהל לקוחות ולחסוך זמן.",
      fr: "Pour gérer ses clients et gagner du temps.",
    },
    included: [
      { he: "כל מה שכלול בחבילת חיוני", fr: "Tout ce qui est inclus dans Essentiel" },
      { he: "CRM: לקוחות, הצעות מחיר, תזכורות, לוח בקרה", fr: "CRM : clients, devis, rappels, tableau de bord" },
      { he: "3 אוטומציות לבחירה (תזכורות, מעקבים, מסמכים חוזרים…)", fr: "3 automatisations au choix (rappels, relances, documents récurrents…)" },
      { he: "סוכן בינה מלאכותית בוואטסאפ: עונה 24/7, קובע תורים, מעביר לנציג אנושי", fr: "Agent IA WhatsApp : répond 24/7, prend les rendez-vous, passe la main à un humain" },
      { he: "מנוי חודשי: תמיכה, כוונון הסוכן, עדכונים, עד {{conversations_ia_incluses_croissance}} שיחות AI בחודש", fr: "Mensuel : support, ajustements de l'agent, mises à jour, jusqu'à {{conversations_ia_incluses_croissance}} conversations IA/mois" },
    ],
    excluded: [
      { he: "סוכן AI במספר ערוצים (אתר, אינסטגרם)", fr: "Agent IA multicanal (site, Instagram)" },
      { he: "תוכן דיגיטלי חודשי", fr: "Contenu digital mensuel" },
      { he: "דוח תוצאות חודשי", fr: "Rapport mensuel de résultats" },
      { he: "אפליקציה או תוכנה בהתאמה אישית", fr: "Application ou logiciel sur mesure" },
    ],
  },
  {
    id: "complet",
    featured: false,
    deliveryDaysBusiness: 21,
    name: { he: "מלא", fr: "Complet" },
    tagline: {
      he: "מערכת שמביאה לקוחות ומטפלת בהם לבד.",
      fr: "Un système qui attire et traite les clients automatiquement.",
    },
    included: [
      { he: "כל מה שכלול בחבילת צמיחה", fr: "Tout ce qui est inclus dans Croissance" },
      { he: "סוכן AI במספר ערוצים: וואטסאפ, אתר, אינסטגרם", fr: "Agent IA multicanal (WhatsApp, site, Instagram)" },
      { he: "תוכן חודשי: 8 פוסטים לרשתות חברתיות + כתיבה", fr: "Contenu chaque mois : 8 publications réseaux sociaux + rédaction" },
      { he: "שעות תמיכה טכנית קבועות בכל חודש", fr: "Heures de support technique fixes chaque mois" },
      { he: "דוח תוצאות חודשי", fr: "Rapport mensuel de résultats" },
    ],
    excluded: [
      { he: "אפליקציה או תוכנה בהתאמה אישית (בהצעת מחיר נפרדת)", fr: "Application ou logiciel sur mesure (sur devis, hors forfait)" },
    ],
  },
];

export const customOffer = {
  he: { title: "חוץ מהחבילות — אפליקציה או תוכנה בהתאמה אישית", text: "פרויקט ייחודי? נבנה לכם הצעת מחיר מדויקת אחרי שיחת אפיון קצרה." },
  fr: { title: "Hors forfait — application ou logiciel sur mesure", text: "Un projet particulier ? Nous préparons un devis précis après un court échange de cadrage." },
};

const CHECK = true;
const CROSS = false;

export const comparisonRows = [
  {
    feature: { he: "אתר תדמית דו-לשוני, מהיר ומתאים למובייל", fr: "Site vitrine bilingue, rapide, adapté mobile" },
    values: [CHECK, CHECK, CHECK],
  },
  {
    feature: { he: "SEO בסיסי ונראות בבינה מלאכותית", fr: "SEO de base et visibilité dans les IA" },
    values: [CHECK, CHECK, CHECK],
  },
  {
    feature: { he: "טופס מחובר לוואטסאפ ולאימייל", fr: "Formulaire relié à WhatsApp et e-mail" },
    values: [CHECK, CHECK, CHECK],
  },
  {
    feature: { he: "פרופיל Google Business מוגדר", fr: "Fiche Google Business Profile configurée" },
    values: [CHECK, CHECK, CHECK],
  },
  {
    feature: { he: "מערכת CRM (לקוחות, הצעות, תזכורות)", fr: "CRM (clients, devis, rappels)" },
    values: [CROSS, CHECK, CHECK],
  },
  {
    feature: { he: "אוטומציות כלולות", fr: "Automatisations incluses" },
    values: [CROSS, { he: "3 לבחירה", fr: "3 au choix" }, { he: "ללא הגבלה*", fr: "Illimitées*" }],
  },
  {
    feature: { he: "סוכן בינה מלאכותית בוואטסאפ", fr: "Agent IA WhatsApp" },
    values: [CROSS, CHECK, CHECK],
  },
  {
    feature: { he: "סוכן AI גם באתר ובאינסטגרם", fr: "Agent IA aussi sur le site et Instagram" },
    values: [CROSS, CROSS, CHECK],
  },
  {
    feature: { he: "שיחות AI כלולות בחודש", fr: "Conversations IA incluses par mois" },
    values: [CROSS, { he: "{{conversations_ia_incluses_croissance}}", fr: "{{conversations_ia_incluses_croissance}}" }, { he: "{{conversations_ia_incluses_complet}}", fr: "{{conversations_ia_incluses_complet}}" }],
  },
  {
    feature: { he: "תוכן חודשי לרשתות חברתיות", fr: "Contenu mensuel pour les réseaux sociaux" },
    values: [CROSS, CROSS, { he: "8 פוסטים/חודש + כתיבה", fr: "8 publications/mois + rédaction" }],
  },
  {
    feature: { he: "תמיכה טכנית", fr: "Support technique" },
    values: [
      { he: "אימייל/וואטסאפ", fr: "E-mail/WhatsApp" },
      { he: "תמיכה + כוונון הסוכן", fr: "Support + ajustements de l'agent" },
      { he: "שעות קבועות כל חודש", fr: "Heures fixes chaque mois" },
    ],
  },
  {
    feature: { he: "דוח תוצאות חודשי", fr: "Rapport mensuel de résultats" },
    values: [CROSS, CROSS, CHECK],
  },
  {
    feature: { he: "זמן אספקה משוער", fr: "Délai de livraison estimé" },
    values: [
      { he: "7 ימי עסקים", fr: "7 jours ouvrés" },
      { he: "14 ימי עסקים", fr: "14 jours ouvrés" },
      { he: "21 ימי עסקים", fr: "21 jours ouvrés" },
    ],
  },
];

export const comparisonFootnote = {
  he: "*בכפוף למדיניות שימוש הוגן. היקף חריג יסוכם מראש.",
  fr: "*selon une politique d'usage raisonnable. Un volume inhabituel est défini à l'avance.",
};

export const conditions = [
  { he: "המחיר הסופי נקבע בהצעת מחיר אישית, אחרי שיחת אפיון קצרה וחינמית.", fr: "Le prix final est fixé dans un devis personnalisé, après un court échange de cadrage gratuit." },
  { he: "התחייבות של 12 חודשים על המנוי החודשי מכל חבילה.", fr: "Engagement de 12 mois sur la mensualité, quel que soit le forfait." },
  { he: "יציאה מוקדמת מההתחייבות: עמלה של {{frais_sortie_anticipee}}.", fr: "Sortie anticipée de l'engagement : frais de {{frais_sortie_anticipee}}." },
  { he: `כל המחירים בהצעה הם לפני מע״מ (${vatRatePercent}%).`, fr: `Tous les prix du devis sont hors TVA (${vatRatePercent} %).` },
  { he: "זמני האספקה המצוינים הם ימי עסקים, מתחילים לאחר אישור ההצעה ואפיון קצר.", fr: "Les délais indiqués sont en jours ouvrés, à partir de la validation du devis et d'un court cadrage." },
];
