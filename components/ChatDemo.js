"use client";

import { useEffect, useRef, useState } from "react";

const SCRIPT = [
  { who: "c", text: "היי, יש מקום לארבעה בשבת בערב?" },
  { who: "a", text: "שלום! בשבת ב-20:30 נשאר שולחן לארבעה. על איזה שם להזמין?" },
  { who: "c", text: "על שם לוי. אפשר גם תפריט צמחוני?" },
  { who: "a", text: "בטח, שלחתי לכם את התפריט הצמחוני. נתראה בשבת!" },
];

export default function ChatDemo() {
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(null);
  const [showEvent, setShowEvent] = useState(false);
  const bodyRef = useRef(null);
  const reduceRef = useRef(false);

  useEffect(() => {
    reduceRef.current = !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
    if (reduceRef.current) {
      setShown(SCRIPT.length);
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
      if (index >= SCRIPT.length) {
        schedule(() => setShowEvent(true), 500);
        schedule(resetAndReplay, 4200);
        return;
      }
      const step = SCRIPT[index];
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
  }, []);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [shown, typing, showEvent]);

  return (
    <div className="chat" role="img" aria-label="דוגמה לשיחה של סוכן בינה מלאכותית שמקבל הזמנת שולחן בוואטסאפ ומעדכן את ה-CRM">
      <div className="chat-head">
        <span className="chat-avatar">M</span>
        <div>
          <p className="chat-name">עוזר המסעדה</p>
          <p className="chat-meta">סוכן בינה מלאכותית · שיחה לדוגמה</p>
        </div>
      </div>
      <div className="chat-body" id="chat-body" ref={bodyRef}>
        {SCRIPT.slice(0, shown).map((step, i) => (
          <p key={i} className={`msg ${step.who === "c" ? "msg-c" : "msg-a"}`}>{step.text}</p>
        ))}
        {typing && (
          <span className={`typing ${typing === "a" ? "agent" : "cust"}`}>
            <i></i><i></i><i></i>
          </span>
        )}
        {showEvent && (
          <span className="event"><span className="event-dot"></span>ההזמנה נוספה ל-CRM</span>
        )}
      </div>
    </div>
  );
}
