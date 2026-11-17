import { useState } from 'react';
import Icon from './Icon.jsx';

export default function StudentCard({ student }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`student-card${expanded ? ' is-expanded' : ''}`}>
      <div className="student-card-topline">
        <div className={`student-avatar avatar-${student.accent}`} aria-hidden="true">
          {student.initials}
        </div>
        <span className="year-pill">{student.yearLabel}</span>
      </div>

      <div className="student-card-main">
        <p className="student-id">{student.id}</p>
        <h3>{student.name}</h3>
        <p className="student-program">{student.program}</p>
        <p className="student-campus"><Icon name="pin" size={15} /> {student.campus}</p>
      </div>

      <div className="tag-list" aria-label="Interests">
        {student.interests.slice(0, 3).map((interest) => (
          <span className="soft-tag" key={interest}>{interest}</span>
        ))}
      </div>

      {expanded && (
        <div className="student-details">
          <p>{student.bio}</p>
          <dl className="student-detail-list">
            <div>
              <dt>Student ID</dt>
              <dd>{student.id}</dd>
            </div>
            <div>
              <dt>Campus</dt>
              <dd>{student.campus}</dd>
            </div>
          </dl>
          <a className="inline-link" href={`mailto:${student.email}`}>
            <Icon name="mail" size={15} /> Contact student
          </a>
        </div>
      )}

      <button
        className="card-action"
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((isExpanded) => !isExpanded)}
      >
        {expanded ? 'Close profile' : 'View profile'}
        <Icon name={expanded ? 'chevronDown' : 'arrowRight'} size={17} className={expanded ? 'rotate-icon' : ''} />
      </button>
    </article>
  );
}
