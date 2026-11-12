import { ImageIcon, CustomIcon, StarIcon } from "@/components/Icons";

export function LaptopDevice() {
  return (
    <div className="laptop">
      <div className="laptop-screen">
        <div className="mockup-body">
          <div className="mockup-nav">
            <span className="mockup-nav-mark"></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="device-media" aria-hidden="true"></div>
          <span className="mockup-line w1"></span>
          <span className="mockup-cta"></span>
          <div className="device-chips">
            <span className="device-chip"><ImageIcon /></span>
            <span className="device-chip alt"><CustomIcon /></span>
            <span className="device-chip alt2"><StarIcon /></span>
          </div>
        </div>
      </div>
      <div className="laptop-base"></div>
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
          <LaptopDevice />
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
