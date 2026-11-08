"use client";

import { useEffect, useRef, useState } from "react";

const SCRIPTS = {
  he: {
    agentName: "העוזר העסקי",
    agentMeta: "סוכן בינה מלאכותית · שיחה לדוגמה",
    ariaLabel: "דוגמה לשיחה של סוכן בינה מלאכותית שקובע פגישה בוואטסאפ ומעדכן את המערכת",
    event: "הפגישה נוספה למערכת",
    lines: [
      { who: "c", text: "היי, אפשר לקבל הצעת מחיר?" },
      { who: "a", text: "בשמחה! כדי להציע לכם מחיר מדויק, מתי נוח לכם לשיחה קצרה?" },
      { who: "c", text: "מחר בבוקר מתאים לי." },
      { who: "a", text: "מעולה, קבעתי לכם לשעה 10:00. תקבלו תזכורת בוואטסאפ לפני." },
    ],
  },
  fr: {
    agentName: "Assistant commercial",
    agentMeta: "Agent d'intelligence artificielle · conversation exemple",
    ariaLabel: "Exemple de conversation d'un agent d'intelligence artificielle qui prend un rendez-vous sur WhatsApp et met à jour le système",
    event: "Rendez-vous ajouté au système",
    lines: [
      { who: "c", text: "Bonjour, je voudrais un devis." },
      { who: "a", text: "Avec plaisir ! Pour vous proposer le bon devis, quand êtes-vous disponible pour un rapide appel ?" },
      { who: "c", text: "Demain matin, ça me va." },
      { who: "a", text: "Parfait, je vous note à 10h. Vous recevrez un rappel sur WhatsApp avant." },
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
