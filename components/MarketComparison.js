import { marketComparison } from "@/data/plans";

export default function MarketComparison({ lang = "he" }) {
  const m = marketComparison;
  return (
    <div className="market-card">
      <h3 className="pkg-name">{m.title[lang]}</h3>
      <p className="market-intro">{m.intro[lang]}</p>
      <ul className="market-rows">
        {m.rows.map((r) => (
          <li className="market-row" key={r.label[lang]}>
            <span className="market-row-label">{r.label[lang]}</span>
            <span className="market-row-value">{r.value}</span>
          </li>
        ))}
      </ul>
      <div className="market-total">
        <span>{m.totalLabel[lang]}</span>
        <span>{m.totalValue}</span>
      </div>
      <div className="market-ours">
        <span className="market-ours-label">{m.ours.label[lang]}</span>
        <span className="market-ours-value">{m.ours.value[lang]}</span>
      </div>
    </div>
  );
}
