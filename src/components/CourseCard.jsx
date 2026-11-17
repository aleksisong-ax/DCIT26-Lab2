import { useState } from 'react';
import Icon from './Icon.jsx';

// Reusable course card. Two modes:
//  - schedule offerings (with days/time/room/instructor) can be Added or Dropped
//    during enrollment via the optional action props;
//  - CEIT subject-code references (the original catalog data) show a reference note.
export default function CourseCard({ course, actionLabel, onAction, actionDisabled = false, enrolled = false }) {
  const [open, setOpen] = useState(false);
  const panelId = `course-${course.code.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`;
  const isOffering = Array.isArray(course.days);
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
          <span className="catalog-kind">{enrolled ? 'Enrolled' : (course.kind || course.dept || '')}</span>
        </div>

        {isOffering ? (
          <dl className="catalog-line">
            <div><dt>Schedule</dt><dd>{course.days.join(' / ')} · {course.time}</dd></div>
            <div><dt>Room</dt><dd>{course.room}</dd></div>
            <div><dt>Instructor</dt><dd>{course.instructor}</dd></div>
            <div><dt>Slots</dt><dd>{course.slots} remaining</dd></div>
          </dl>
        ) : (
          <dl className="catalog-line">
            <div><dt>Area</dt><dd>{course.department}</dd></div>
          </dl>
        )}

        <div id={panelId} className="catalog-panel" hidden={!open}>
          <p className="catalog-instructor"><span>{isOffering ? 'Note' : 'Reference note'}</span>{isOffering ? 'Adding checks your 24-unit load. Dropping files a request for adviser approval.' : note}</p>
        </div>

        <div className="sis-card-actions">
          {actionLabel && (
            <button type="button" className="button sis-btn-small" disabled={actionDisabled} onClick={() => onAction && onAction(course)}>
              {actionLabel}
            </button>
          )}
          <button
            type="button"
            className="text-toggle"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Hide details' : 'Details'}
            <Icon name={open ? 'minus' : 'plus'} size={13} />
          </button>
        </div>
      </div>
    </article>
  );
}
