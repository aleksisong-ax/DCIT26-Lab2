import { useMemo, useState } from 'react';
import Icon from '../components/Icon.jsx';
import CourseCard from '../components/CourseCard.jsx';
import { courses, term } from '../data.js';

const departments = ['All', ...new Set(courses.map((course) => course.department))];

export default function Courses() {
  const [query, setQuery] = useState('');
  const [department, setDepartment] = useState('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses.filter((course) => {
      const matchesDept = department === 'All' || course.department === department;
      const text = [course.code, course.title, course.department, course.instructor, course.level, course.room, ...course.topics].join(' ').toLowerCase();
      return matchesDept && (!q || text.includes(q));
    });
  }, [query, department]);

  const active = query || department !== 'All';
  const clear = () => { setQuery(''); setDepartment('All'); };

  return (
    <div className="page">
      <header className="container page-head">
        <p className="kicker">Academic records / {term.short} · sample</p>
        <h1>Courses</h1>
        <p className="page-standfirst">{courses.length} fictional sections in this sample catalog. Search code, title, instructor, room, or subject.</p>
      </header>

      <section className="container">
        <div className="toolbar">
          <label className="search-field">
            <Icon name="search" size={16} />
            <span className="visually-hidden">Search courses</span>
            <input type="search" placeholder="Search code, title, instructor, topic" value={query} onChange={(e) => setQuery(e.target.value)} />
            {query && <button className="clear-search" type="button" onClick={() => setQuery('')} aria-label="Clear search"><Icon name="close" size={14} /></button>}
          </label>
          <p className="results" aria-live="polite">
            {filtered.length} of {courses.length} shown
            {active && <> · <button className="text-button" type="button" onClick={clear}>Clear</button></>}
          </p>
        </div>
        <div className="dept-filters" role="group" aria-label="Filter by department">
          {departments.map((item) => (
            <button type="button" key={item} className={`dept-filter${department === item ? ' is-selected' : ''}`} aria-pressed={department === item} onClick={() => setDepartment(item)}>
              {item}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="catalog">
            {filtered.map((course) => <CourseCard key={course.code} course={course} />)}
          </div>
        ) : (
          <div className="empty">
            <p>No sections match “{query}”{department !== 'All' ? ` in ${department}` : ''}.</p>
            <button className="text-button" type="button" onClick={clear}>Reset filters</button>
          </div>
        )}
      </section>

      <p className="container footnote">Schedules, rooms, capacity, prerequisites, and seat counts are invented for the demonstration. Confirm all course details with your school.</p>
    </div>
  );
}
