"use client";

import { useEffect, useState } from "react";
import { waLink } from "@/lib/site";
import { track } from "@/lib/analytics";

const TEXT = {
  he: {
    label: "דברו איתנו בוואטסאפ",
    default: "שלום, אשמח לקבל פרטים על השירותים שלכם.",
    bubble: "יש לכם שאלה? דברו איתנו!",
    close: "סגירה",
  },
  fr: {
    label: "Parlez-nous sur WhatsApp",
    default: "Bonjour, je souhaite discuter de mon projet avec Mazaly Digital.",
    bubble: "Une question ? Discutons !",
    close: "Fermer",
  },
};

const STORAGE_KEY = "mz-wa-bubble-seen";
const SHOW_AFTER_MS = 2600;
const HIDE_AFTER_MS = 9000;

export default function WhatsappFloat({ lang = "he", message }) {
  const t = TEXT[lang] || TEXT.he;
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {}
    if (seen) return;

    const reduce = !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);

    const showTimer = setTimeout(() => {
      setShowBubble(true);
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {}
    }, SHOW_AFTER_MS);

    let hideTimer;
    if (!reduce) {
      hideTimer = setTimeout(() => setShowBubble(false), SHOW_AFTER_MS + HIDE_AFTER_MS);
    }

    return () => {
      clearTimeout(showTimer);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  function dismissBubble() {
    setShowBubble(false);
  }

  return (
    <div className="wa-dock">
      {showBubble && (
        <div className="wa-bubble" role="status">
          <span>{t.bubble}</span>
          <button type="button" className="wa-bubble-close" aria-label={t.close} onClick={dismissBubble}>
            ×
          </button>
        </div>
      )}
      <a
        className="wa-float"
        href={waLink(message || t.default)}
        target="_blank"
        rel="noopener"
        aria-label={t.label}
        onClick={() => {
          dismissBubble();
          track("whatsapp_click", { lang, source: "float" });
        }}
      >
        <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
          <path d="M16 3C9 3 3.3 8.7 3.3 15.7c0 2.5.7 4.8 1.9 6.8L3 29l6.7-2.1c1.9 1 4 1.6 6.3 1.6 7 0 12.7-5.7 12.7-12.7S23 3 16 3Zm0 23c-2 0-3.9-.5-5.5-1.5l-.4-.2-4 1.2 1.2-3.9-.3-.4c-1.1-1.7-1.7-3.7-1.7-5.8C5.3 9.8 10.1 5 16 5s10.7 4.8 10.7 10.7S21.9 26 16 26Zm5.9-8c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.3-.7.1-1-.5-2-1.1-2.9-2-.7-.7-1.3-1.5-1.8-2.4-.2-.3 0-.5.1-.7.2-.2.4-.4.6-.6.2-.2.2-.4.1-.7-.1-.3-.7-1.8-1-2.4-.2-.5-.4-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5 0 1.5 1.1 2.9 1.2 3.1.1.2 1.9 3 4.6 4.3 2.7 1.3 2.7.9 3.2.8.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.4Z" />
        </svg>
      </a>
    </div>
  );
}
