const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const timestamps = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);
  if (hits.size > 5000) hits.clear();
  return timestamps.length > MAX_PER_WINDOW;
}

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return Response.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let data;
  try {
    data = await req.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const { name, contact, size, need, lang, page, website } = data || {};
  if (website) {
    return Response.json({ ok: true });
  }
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
