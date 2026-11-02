export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mazaly-digital.vercel.app";
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";
export const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "972545670414";
export const whatsappDisplay = "+972 54-567-0414";
export const whatsappHref = `https://wa.me/${whatsappNumber}`;
export const emailDisplay = contactEmail || "[להשלים: אימייל ליצירת קשר]";
export const emailHref = contactEmail ? `mailto:${contactEmail}` : undefined;
