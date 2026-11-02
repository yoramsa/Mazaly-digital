export default function HeroBackground() {
  return (
    <>
      <div className="aurora" aria-hidden="true">
        <i className="blob b1"></i>
        <i className="blob b2"></i>
        <i className="blob b3"></i>
      </div>
      <canvas className="hero-canvas" id="net" aria-hidden="true"></canvas>
      <div className="glow" aria-hidden="true"></div>
      <div className="sparkles" id="sparkles" aria-hidden="true"></div>
    </>
  );
}
