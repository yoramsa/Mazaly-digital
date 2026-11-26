import { siteUrl } from "@/lib/site";

const pages = [
  { he: "/", fr: "/fr", home: true },
  { he: "/legal/tnaim", fr: "/fr/legal/mentions" },
  { he: "/legal/pratiut", fr: "/fr/legal/confidentialite" },
  { he: "/legal/manuy", fr: "/fr/legal/abonnement" },
  { he: "/legal/hangasha", fr: "/fr/legal/accessibilite" },
];

export default function sitemap() {
  const lastModified = new Date();
  return pages.flatMap(({ he, fr, home }) => {
    const languages = { he: `${siteUrl}${he}`, fr: `${siteUrl}${fr}`, "x-default": `${siteUrl}${he}` };
    const changeFrequency = home ? "monthly" : "yearly";
    return [
      { url: `${siteUrl}${he}`, lastModified, changeFrequency, priority: home ? 1 : 0.3, alternates: { languages } },
      { url: `${siteUrl}${fr}`, lastModified, changeFrequency, priority: home ? 0.9 : 0.3, alternates: { languages } },
    ];
  });
}
