export async function POST(req) {
  let data;
  try {
    data = await req.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const { name, contact, size, need, lang, page } = data || {};
  if (!name || !contact) {
    return Response.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL || "Mazaly Digital <onboarding@resend.dev>";

  const summary = [
    `שם / Nom: ${name}`,
    `יצירת קשר / Contact: ${contact}`,
    `גודל עסק / Taille: ${size || "-"}`,
    `צורך / Besoin: ${need || "-"}`,
    `שפה / Langue: ${lang || "-"}`,
    `עמוד / Page: ${page || "-"}`,
  ].join("\n");

  if (apiKey && to) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to,
          subject: `ליד חדש מהאתר Mazaly Digital: ${name}`,
          text: summary,
        }),
      });
      if (!res.ok) {
        console.error("resend_failed", res.status, await res.text());
      }
    } catch (err) {
      console.error("resend_error", err);
    }
  } else {
    console.log("NEW_LEAD (email not configured):\n" + summary);
  }

  return Response.json({ ok: true });
}
