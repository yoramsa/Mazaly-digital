import { buildSystemPrompt } from "@/lib/chatContext";

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 8;
const MAX_MESSAGES = 10;
const MAX_CHARS = 600;
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

  const { messages, lang } = data || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json({ ok: false, error: "missing_messages" }, { status: 400 });
  }
  if (messages.length > MAX_MESSAGES) {
    return Response.json({ ok: false, error: "too_many_messages" }, { status: 400 });
  }

  const cleanMessages = [];
  for (const m of messages) {
    if (!m || (m.role !== "user" && m.role !== "assistant") || typeof m.content !== "string") {
      return Response.json({ ok: false, error: "bad_message" }, { status: 400 });
    }
    cleanMessages.push({ role: m.role, content: m.content.slice(0, MAX_CHARS) });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-5-5",
        max_tokens: 400,
        system: buildSystemPrompt(lang),
        messages: cleanMessages,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("anthropic_error", res.status, text);
      return Response.json({ ok: false, error: "upstream_error" }, { status: 502 });
    }

    const json = await res.json();
    const reply = json.content?.map((c) => c.text).join("").trim() || "";
    return Response.json({ ok: true, reply });
  } catch (err) {
    console.error("chat_error", err);
    return Response.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
