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

function clean(value, maxLength = 2000) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
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

  if (!data || typeof data !== "object") {
    return Response.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const website = clean(data.website, 200);
  if (website) {
    return Response.json({ ok: true });
  }

  const name = clean(data.name, 200);
  const company = clean(data.company, 200);
  const email = clean(data.email, 200);
  const phone = clean(data.phone, 60);
  const projectType = clean(data.projectType, 200);
  const budget = clean(data.budget, 200);
  const message = clean(data.message, 4000);
  const lang = clean(data.lang, 10);
  const page = clean(data.page, 200);

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || !email || !EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL || "Mazaly Digital <onboarding@resend.dev>";

  const summary = [
    `Nom: ${name}`,
    company && `Entreprise: ${company}`,
    `E-mail: ${email}`,
    phone && `Téléphone: ${phone}`,
    projectType && `Type de projet: ${projectType}`,
    budget && `Budget indicatif: ${budget}`,
    message && `Besoin: ${message}`,
    `Langue: ${lang || "-"}`,
    `Page: ${page || "-"}`,
  ]
    .filter(Boolean)
    .join("\n");

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
          reply_to: email,
          subject: `Nouvelle demande Mazaly Digital : ${name}${company ? ` (${company})` : ""}`,
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
