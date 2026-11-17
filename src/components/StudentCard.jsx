import { useState } from 'react';
import Icon from './Icon.jsx';

// Reusable student record card; the current build passes only the signed-in demo student.
export default function StudentCard({ student }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = `record-${student.id}`;

  return (
    <article className={`record${expanded ? ' is-open' : ''}`}>
      <button
        type="button"
        className="record-row"
        aria-label={`${expanded ? 'Hide' : 'Show'} details for your student record`}
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
          <div><dt>School email</dt><dd><a href={`mailto:${student.email}`}>{student.email}</a></dd></div>
          <div><dt>Campus</dt><dd>{student.campus}</dd></div>
          <div><dt>Academic adviser</dt><dd>{student.adviser}</dd></div>
          <div><dt>Section</dt><dd>{student.section}</dd></div>
          <div><dt>Units this term</dt><dd>{student.units}</dd></div>
        </dl>
        <dl className="record-facts">
          <div><dt>Curriculum progress</dt><dd>{student.completedUnits} of {student.curriculumUnits} units</dd></div>
          <div><dt>Enrolled since</dt><dd>{student.enrolledSince}</dd></div>
          <div><dt>Record scope</dt><dd>Your own demo profile only</dd></div>
        </dl>
      </div>
    </article>
  );
}
