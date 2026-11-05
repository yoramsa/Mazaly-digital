"use client";

import { useEffect, useRef, useState } from "react";

const SCRIPTS = {
  he: {
    agentName: "עוזר המסעדה",
    agentMeta: "סוכן בינה מלאכותית · שיחה לדוגמה",
    ariaLabel: "דוגמה לשיחה של סוכן בינה מלאכותית שמקבל הזמנת שולחן בוואטסאפ ומעדכן את המערכת",
    event: "ההזמנה נוספה למערכת",
    lines: [
      { who: "c", text: "היי, יש מקום לארבעה בשבת בערב?" },
      { who: "a", text: "שלום! בשבת ב-20:30 נשאר שולחן לארבעה. על איזה שם להזמין?" },
      { who: "c", text: "על שם לוי. אפשר גם תפריט צמחוני?" },
      { who: "a", text: "בטח, שלחתי לכם את התפריט הצמחוני. נתראה בשבת!" },
    ],
  },
  fr: {
    agentName: "Assistant du restaurant",
    agentMeta: "Agent d'intelligence artificielle · conversation exemple",
    ariaLabel: "Exemple de conversation d'un agent d'intelligence artificielle qui prend une réservation sur WhatsApp et met à jour le système",
    event: "Réservation ajoutée au système",
    lines: [
      { who: "c", text: "Bonjour, il reste une table pour 4 personnes samedi soir ?" },
      { who: "a", text: "Bonjour ! Samedi à 20h30 il reste une table pour 4. À quel nom je réserve ?" },
      { who: "c", text: "Au nom de Lévy. Vous avez aussi un menu végétarien ?" },
      { who: "a", text: "Bien sûr, je vous envoie le menu végétarien. À samedi !" },
    ],
  },
};

export default function ChatDemo({ lang = "he" }) {
  const script = SCRIPTS[lang] || SCRIPTS.he;
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(null);
  const [showEvent, setShowEvent] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    const reduce = !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
    if (reduce) {
      setShown(script.lines.length);
      setShowEvent(true);
      return;
    }
    let cancelled = false;
    let timers = [];

    function schedule(fn, delay) {
      const id = setTimeout(() => { if (!cancelled) fn(); }, delay);
      timers.push(id);
    }

    function playFrom(index) {
      if (index >= script.lines.length) {
        schedule(() => setShowEvent(true), 500);
        schedule(resetAndReplay, 4200);
        return;
      }
      const step = script.lines[index];
      setTyping(step.who);
      schedule(() => {
        setTyping(null);
        setShown(index + 1);
        schedule(() => playFrom(index + 1), 650);
      }, step.who === "a" ? 1100 : 850);
    }

    function resetAndReplay() {
      setShowEvent(false);
      setShown(0);
      setTyping(null);
      schedule(() => playFrom(0), 900);
    }

    schedule(() => playFrom(0), 700);

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [script]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [shown, typing, showEvent]);

  return (
    <div className="chat" role="img" aria-label={script.ariaLabel}>
      <div className="chat-head">
        <span className="chat-avatar">M</span>
        <div>
          <p className="chat-name">{script.agentName}</p>
          <p className="chat-meta">{script.agentMeta}</p>
        </div>
      </div>
      <div className="chat-body" id="chat-body" ref={bodyRef}>
        {script.lines.slice(0, shown).map((step, i) => (
          <p key={i} className={`msg ${step.who === "c" ? "msg-c" : "msg-a"}`}>{step.text}</p>
        ))}
        {typing && (
          <span className={`typing ${typing === "a" ? "agent" : "cust"}`}>
            <i></i><i></i><i></i>
          </span>
        )}
        {showEvent && (
          <span className="event"><span className="event-dot"></span>{script.event}</span>
        )}
      </div>
    </div>
  );
}
