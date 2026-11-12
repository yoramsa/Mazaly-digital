export function BrowserMockup({ variant = "site" }) {
  return (
    <div className="mockup mockup-browser">
      <div className="mockup-bar">
        <span className="mockup-dot mockup-dot-a"></span>
        <span className="mockup-dot mockup-dot-b"></span>
        <span className="mockup-dot mockup-dot-c"></span>
        <span className="mockup-url">mazaly.digital</span>
      </div>
      <div className="mockup-body">
        <div className="mockup-nav">
          <span className="mockup-nav-mark"></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="mockup-hero">
          <span className="mockup-line w1"></span>
          <span className="mockup-line w2"></span>
          <span className="mockup-cta"></span>
        </div>
        <div className="mockup-grid">
          <div className="mockup-card">{variant === "shop" && <span className="mockup-tag"></span>}</div>
          <div className="mockup-card">{variant === "shop" && <span className="mockup-tag"></span>}</div>
          <div className="mockup-card">{variant === "shop" && <span className="mockup-tag"></span>}</div>
        </div>
      </div>
    </div>
  );
}

export function ChatMockup({ lines }) {
  return (
    <div className="mockup mockup-phone">
      <span className="mockup-phone-notch"></span>
      <div className="mockup-phone-screen">
        {lines.map((l, i) => (
          <span key={i} className={`msg ${l.me ? "msg-a" : "msg-c"}`} style={{ "--d": `${i * 0.12}s` }}>
            {l.text}
          </span>
        ))}
        <span className="typing cust"><i></i><i></i><i></i></span>
      </div>
    </div>
  );
}

export function HeroVisual({ chips }) {
  return (
    <div className="hero-visual" id="stage">
      <div className="hero-visual-stage" id="tilt">
        <div className="hero-visual-browser">
          <BrowserMockup variant="site" />
        </div>
        <div className="hero-visual-phone">
          <ChatMockup lines={chips.chat} />
        </div>
      </div>
      <span className="float-chip chip-1">{chips.chip1}</span>
      <span className="float-chip chip-2">{chips.chip2}</span>
    </div>
  );
}
