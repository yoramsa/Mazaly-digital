export const services = [
  {
    id: "site",
    icon: "site",
    title: "Création de sites",
    text: "Un site rapide et soigné qui représente votre entreprise au mieux, et qui vous apporte plus de demandes.",
  },
  {
    id: "shop",
    icon: "shop",
    title: "E-commerce",
    text: "Une boutique en ligne qui vend pour vous 24h/24, sans prise de tête technique.",
  },
  {
    id: "ai",
    icon: "ai",
    title: "IA et automatisations",
    text: "Un assistant digital qui répond à vos clients, prend des rendez-vous et vous fait gagner du temps au quotidien.",
  },
  {
    id: "custom",
    icon: "custom",
    title: "Solutions digitales",
    text: "Un développement sur mesure pour le besoin précis de votre entreprise, quand les solutions toutes faites ne suffisent pas.",
  },
];

export const demos = [
  {
    id: "site",
    kind: "browser",
    variant: "site",
    title: "Site vitrine moderne",
    text: "Une page d'accueil claire qui présente l'entreprise et mène droit à la demande de contact.",
  },
  {
    id: "shop",
    kind: "browser",
    variant: "shop",
    title: "Boutique en ligne",
    text: "Un catalogue agréable à parcourir, pensé pour l'achat depuis le mobile.",
  },
  {
    id: "ai",
    kind: "chat",
    title: "Assistant IA sur WhatsApp",
    text: "Répond aux questions fréquentes et transfère à une personne quand il le faut.",
    chat: [
      { me: false, text: "Bonjour, je peux prendre rendez-vous ?" },
      { me: true, text: "Bien sûr ! J'ai un créneau mercredi à 16h, ça vous convient ?" },
      { me: false, text: "Parfait, merci !" },
    ],
  },
];

export const whyUs = [
  {
    id: "fit",
    icon: "target",
    title: "Une solution adaptée à vous",
    text: "Pas un modèle unique pour tout le monde. On écoute le vrai besoin de votre entreprise et on construit en fonction.",
  },
  {
    id: "human",
    icon: "chat",
    title: "Un interlocuteur humain et disponible",
    text: "Vous parlez à une vraie personne, pas à un robot. Toujours possible de poser une question et d'avancer ensemble.",
  },
  {
    id: "design",
    icon: "bolt",
    title: "Un design moderne, une technologie efficace",
    text: "On utilise les outils les plus avancés pour créer quelque chose qui fonctionne bien, qui est beau et qui le reste.",
  },
];

export const heroChat = [
  { me: false, text: "Vous pouvez m'en dire plus ?" },
  { me: true, text: "Avec plaisir, comment puis-je vous aider ? 😊" },
];
