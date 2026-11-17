import { useMemo, useState } from 'react';
import Icon from '../components/Icon.jsx';
import CourseCard from '../components/CourseCard.jsx';
import { courses, term } from '../data.js';

const departments = ['All', ...new Set(courses.map((c) => c.department))];

export default function Courses() {
  const [query, setQuery] = useState('');
  const [department, setDepartment] = useState('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses.filter((c) => {
      const matchesDept = department === 'All' || c.department === department;
      const text = [c.code, c.title, c.department, c.instructor, c.level, c.room, ...c.topics].join(' ').toLowerCase();
      return matchesDept && (!q || text.includes(q));
    });
  }, [query, department]);

  const active = query || department !== 'All';
  const clear = () => { setQuery(''); setDepartment('All'); };

  return (
    <div className="page">
      <header className="container page-head">
        <p className="kicker">Catalog · {term.short}</p>
        <h1>Courses</h1>
        <p className="page-standfirst">{courses.length} sections offered this term, 3 units each. Seat counts are as of {term.lastUpdated}.</p>
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
          {departments.map((d) => (
            <button type="button" key={d} className={`dept-filter${department === d ? ' is-selected' : ''}`} aria-pressed={department === d} onClick={() => setDepartment(d)}>
              {d}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="catalog">
            {filtered.map((c) => <CourseCard key={c.code} course={c} />)}
          </div>
        ) : (
          <div className="empty">
            <p>No sections match “{query}”{department !== 'All' ? ` in ${department}` : ''}.</p>
            <button className="text-button" type="button" onClick={clear}>Reset filters</button>
          </div>
        )}
      </section>

      <p className="container footnote">Course offerings are fictional examples. Check with your school for actual schedules and registration.</p>
    </div>
  );
}
