"use client";

import { useEffect, useRef, useState } from "react";
import { ChatIcon, CrossIcon, SendIcon } from "@/components/Icons";
import { waLink } from "@/lib/site";
import { track } from "@/lib/analytics";

const TEXT = {
  he: {
    label: "שאלו אותנו",
    title: "עוזר Mazaly Digital",
    subtitle: "שאלו שאלה על השירותים, המחיר או התהליך",
    placeholder: "כתבו שאלה...",
    send: "שליחה",
    sending: "חושב...",
    error: "משהו השתבש. אפשר לשאול ישר בוואטסאפ.",
    whatsapp: "להמשיך בוואטסאפ",
    suggestions: ["כמה זה עולה?", "כמה זמן זה לוקח?", "מי אתם?", "אתם עובדים בצרפתית?"],
  },
  fr: {
    label: "Une question ?",
    title: "Assistant Mazaly Digital",
    subtitle: "Posez une question sur les services, le prix ou le processus",
    placeholder: "Écrivez votre question...",
    send: "Envoyer",
    sending: "Réflexion...",
    error: "Un problème est survenu. Vous pouvez demander directement sur WhatsApp.",
    whatsapp: "Continuer sur WhatsApp",
    suggestions: ["Combien ça coûte ?", "Combien de temps ça prend ?", "Qui êtes-vous ?", "Vous travaillez en français ?"],
  },
};

export default function AssistantWidget({ lang = "he" }) {
  const t = TEXT[lang] || TEXT.he;
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("idle");
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, status]);

  function toggleOpen() {
    const next = !open;
    setOpen(next);
    if (next) track("assistant_open", { lang });
  }

  async function sendMessage(text) {
    const content = text.trim();
    if (!content || status === "sending") return;
    const nextMessages = [...messages, { role: "user", content }];
    setMessages(nextMessages);
    setInput("");
    setStatus("sending");
    track("assistant_message", { lang });
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages, lang }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "bad_status");
      setMessages([...nextMessages, { role: "assistant", content: json.reply }]);
      setStatus("idle");
    } catch {
      setMessages([...nextMessages, { role: "assistant", content: t.error, isError: true }]);
      setStatus("idle");
    }
  }

  return (
    <>
      {open && (
        <div className="assistant-panel" role="dialog" aria-label={t.title}>
          <div className="assistant-head">
            <div>
              <p className="assistant-title">{t.title}</p>
              <p className="assistant-subtitle">{t.subtitle}</p>
            </div>
            <button type="button" className="assistant-close" onClick={toggleOpen} aria-label="×">
              <CrossIcon />
            </button>
          </div>
          <div className="assistant-body" ref={bodyRef}>
            {messages.length === 0 && (
              <div className="assistant-suggestions">
                {t.suggestions.map((s) => (
                  <button type="button" className="chip" key={s} onClick={() => sendMessage(s)}>{s}</button>
                ))}
              </div>
            )}
            {messages.map((m, i) => (
              <p key={i} className={`msg ${m.role === "user" ? "msg-c" : "msg-a"}${m.isError ? " assistant-msg-error" : ""}`}>{m.content}</p>
            ))}
            {status === "sending" && (
              <span className="typing agent"><i></i><i></i><i></i></span>
            )}
          </div>
          <a
            className="assistant-wa-link"
            href={waLink()}
            target="_blank"
            rel="noopener"
            onClick={() => track("whatsapp_click", { lang, source: "assistant" })}
          >
            {t.whatsapp}
          </a>
          <form
            className="assistant-form"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
          >
            <input
              className="input assistant-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.placeholder}
              aria-label={t.placeholder}
            />
            <button type="submit" className="assistant-send" disabled={status === "sending"} aria-label={t.send}>
              <SendIcon />
            </button>
          </form>
        </div>
      )}
      <button type="button" className="wa-float" onClick={toggleOpen} aria-label={t.label}>
        {open ? <CrossIcon /> : <ChatIcon />}
      </button>
    </>
  );
}
