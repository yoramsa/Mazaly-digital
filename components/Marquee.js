export default function Marquee({ items }) {
  const loop = [...items, ...items];
  return (
    <div className="mz-track">
      {loop.map((item, i) => (
        <span className="mz-track-item" key={`${item}-${i}`}>
          {item}
          <span className="mz-track-icon">✦</span>
        </span>
      ))}
    </div>
  );
}
