import { useState } from 'react';
import Icon from './Icon.jsx';

// A reusable subject-code row. Missing units are left unreported, not inferred.
export default function CourseCard({ course }) {
  const [open, setOpen] = useState(false);
  const panelId = `course-${course.code.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`;
  const unitLabel = Number.isFinite(course.units)
    ? `${course.units} ${course.units === 1 ? 'unit' : 'units'}`
    : 'Units not listed';
  const note = course.unitNote || course.referenceNote || 'This code and title are a reference example, not a full curriculum or current class schedule.';

  return (
    <article className={`catalog-entry${open ? ' is-open' : ''}`}>
      <div className="catalog-code">
        <span>{course.code}</span>
        <small>{unitLabel}</small>
      </div>

      <div className="catalog-body">
        <div className="catalog-head">
          <h3>{course.title}</h3>
          <span className="catalog-kind">{course.kind}</span>
        </div>
        <dl className="catalog-line">
          <div><dt>Area</dt><dd>{course.department}</dd></div>
        </dl>

        <div id={panelId} className="catalog-panel" hidden={!open}>
          <p className="catalog-instructor"><span>Reference note</span>{note}</p>
        </div>

        <button
          type="button"
          className="text-toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Hide reference note' : 'Reference note'}
          <Icon name={open ? 'minus' : 'plus'} size={13} />
        </button>
      </div>
    </article>
  );
}
