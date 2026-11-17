import { useState } from 'react';
import Icon from './Icon.jsx';

// A student record. Rendered as a ledger row that opens into the full record.
export default function StudentCard({ student }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = `record-${student.id}`;

  return (
    <article className={`record${expanded ? ' is-open' : ''}`}>
      <button
        type="button"
        className="record-row"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded((open) => !open)}
      >
        <span className="record-id">{student.id}</span>
        <span className="record-name">{student.name}</span>
        <span className="record-program">{student.program}</span>
        <span className="record-year">Yr {student.year}</span>
        <span className={`record-standing${student.standing === 'Graduating' ? ' is-flag' : ''}`}>{student.standing}</span>
        <span className="record-toggle"><Icon name={expanded ? 'minus' : 'plus'} size={14} /></span>
      </button>

      <div id={panelId} className="record-panel" hidden={!expanded}>
        <dl className="record-facts">
          <div><dt>Email</dt><dd><a href={`mailto:${student.email}`}>{student.email}</a></dd></div>
          <div><dt>Campus</dt><dd>{student.campus}</dd></div>
          <div><dt>Adviser</dt><dd>{student.adviser}</dd></div>
          <div><dt>Units this term</dt><dd>{student.units}</dd></div>
        </dl>
        <div className="record-notes">
          <p>{student.bio}</p>
          <p className="record-interests">
            <span>Interests</span> {student.interests.join(' · ')}
          </p>
        </div>
      </div>
    </article>
  );
}
