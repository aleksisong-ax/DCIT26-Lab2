import { useState } from 'react';
import Icon from './Icon.jsx';

// A catalog entry. Big course code as the anchor; details fold out below.
export default function CourseCard({ course }) {
  const [open, setOpen] = useState(false);
  const panelId = `course-${course.code.replace(/\s+/g, '-')}`;
  const [taken, capacity] = course.seats.split(' / ').map(Number);
  const full = taken >= capacity;

  return (
    <article className={`catalog-entry${open ? ' is-open' : ''}`}>
      <div className="catalog-code">
        <span>{course.code}</span>
        <small>{course.credits} units</small>
      </div>

      <div className="catalog-body">
        <div className="catalog-head">
          <h3>{course.title}</h3>
          <span className={`seat-count${full ? ' is-full' : ''}`}>{full ? 'Full' : `${capacity - taken} seats left`}</span>
        </div>
        <p className="catalog-description">{course.description}</p>
        <dl className="catalog-line">
          <div><dt>Dept</dt><dd>{course.department}</dd></div>
          <div><dt>Sched</dt><dd>{course.schedule}</dd></div>
          <div><dt>Room</dt><dd>{course.room}</dd></div>
          <div><dt>Prereq</dt><dd>{course.prerequisites}</dd></div>
        </dl>

        <div id={panelId} className="catalog-panel" hidden={!open}>
          <p className="catalog-instructor"><span>Instructor</span> {course.instructor} · {course.level} · {course.duration}</p>
          <ol className="catalog-topics">
            {course.topics.map((topic) => <li key={topic}>{topic}</li>)}
          </ol>
        </div>

        <button
          type="button"
          className="text-toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Hide syllabus outline' : 'Syllabus outline'}
          <Icon name={open ? 'minus' : 'plus'} size={13} />
        </button>
      </div>
    </article>
  );
}
