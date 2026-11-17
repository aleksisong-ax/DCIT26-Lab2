import { gwaOf } from '../data.js';

const fmt = (value) => Number(value).toFixed(2);

// Reusable grades table: midterm + final grades, final rating, remarks, and GWA.
// Used on the dashboard snapshot and the full Grades view.
export default function GradeTable({ rows, compact = false }) {
  const shown = compact ? rows.slice(0, 5) : rows;
  const units = rows.reduce((sum, row) => sum + row.units, 0);
  return (
    <div className="sis-table-wrap">
      <table className="sis-table">
        <thead>
          <tr><th>Code</th><th>Subject</th>{!compact && <th>Units</th>}<th>Midterm</th><th>Final</th><th>Rating</th><th>Remarks</th></tr>
        </thead>
        <tbody>
          {shown.map((row) => (
            <tr key={row.code}>
              <td className="sis-code">{row.code}</td>
              <td>{row.title}</td>
              {!compact && <td>{row.units}</td>}
              <td className="sis-num">{fmt(row.mid)}</td>
              <td className="sis-num">{fmt(row.fin)}</td>
              <td className="sis-num">{fmt(row.rating)}</td>
              <td className={row.passed ? 'sis-pass' : 'sis-fail'}>{row.passed ? 'Passed' : 'Failed'}</td>
            </tr>
          ))}
          {!compact && (
            <tr className="sis-total">
              <td colSpan="2">General Weighted Average</td><td>{units}</td><td colSpan="3" /><td className="sis-num">{fmt(gwaOf(rows))}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
