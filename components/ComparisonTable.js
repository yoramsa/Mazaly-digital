import { CheckIcon, CrossIcon } from "@/components/Icons";
import { plans, comparisonRows, comparisonFootnote } from "@/data/plans";

const HINT = { he: "☜ אפשר להחליק בטבלה כדי לראות את כל החבילות", fr: "☞ Faites glisser le tableau pour voir tous les forfaits" };

export default function ComparisonTable({ lang = "he" }) {
  const t = HINT[lang] || HINT.he;
  return (
    <>
    <p className="cmp-hint">{t}</p>
    <div className="cmp-wrap">
      <table className="cmp-table">
        <thead>
          <tr>
            <th scope="col"></th>
            {plans.map((p) => (
              <th scope="col" key={p.id}>{p.name[lang]}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row.feature[lang]}>
              <th scope="row" className="cmp-feature">{row.feature[lang]}</th>
              {row.values.map((v, i) => (
                <td className="cmp-val" key={plans[i].id}>
                  {v === true && <CheckIcon className="cmp-icon cmp-check" />}
                  {v === false && <CrossIcon className="cmp-icon cmp-cross" />}
                  {typeof v === "object" && v !== null && v[lang]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="cmp-note">{comparisonFootnote[lang]}</p>
    </div>
    </>
  );
}
