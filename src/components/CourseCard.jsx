import { useState } from 'react';
import Icon from './Icon.jsx';

export default function CourseCard({ course }) {
  const [showTopics, setShowTopics] = useState(false);

  return (
    <article className={`course-card course-${course.accent}${showTopics ? ' is-expanded' : ''}`}>
      <div className="course-card-topline">
        <span className="course-code">{course.code}</span>
        <span className="course-level">{course.level}</span>
      </div>

      <div className="course-card-main">
        <p className="course-department">{course.department}</p>
        <h3>{course.title}</h3>
        <p className="course-description">{course.description}</p>
      </div>

      <div className="course-meta-row">
        <span><Icon name="clock" size={15} /> {course.duration}</span>
        <span><Icon name="layers" size={15} /> {course.credits} credits</span>
      </div>

      {showTopics && (
        <div className="course-details">
          <p className="course-instructor"><Icon name="graduation" size={16} /> Led by {course.instructor}</p>
          <p className="course-topics-label">In this course</p>
          <ul>
            {course.topics.map((topic) => <li key={topic}>{topic}</li>)}
          </ul>
        </div>
      )}

      <button
        className="card-action"
        type="button"
        aria-expanded={showTopics}
        onClick={() => setShowTopics((visible) => !visible)}
      >
        {showTopics ? 'Hide course details' : 'Explore course'}
        <Icon name={showTopics ? 'chevronDown' : 'arrowRight'} size={17} className={showTopics ? 'rotate-icon' : ''} />
      </button>
    </article>
  );
}
