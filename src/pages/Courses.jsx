import { useMemo, useState } from 'react';
import Icon from '../components/Icon.jsx';
import CourseCard from '../components/CourseCard.jsx';
import { courses, referenceSources, subjectAreas, term } from '../data.js';

const departments = ['All areas', ...subjectAreas.map((area) => area.department)];
const prefixLookup = Object.fromEntries(subjectAreas.map((area) => [area.department, area.prefixes]));

export default function Courses() {
  const [query, setQuery] = useState('');
  const [department, setDepartment] = useState('All areas');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses.filter((course) => {
      const matchesDepartment = department === 'All areas' || course.department === department;
      const searchText = [
        course.code,
        course.title,
        course.department,
        course.kind,
        ...(prefixLookup[course.department] || []),
      ].join(' ').toLowerCase();
      return matchesDepartment && (!q || searchText.includes(q));
    });
  }, [query, department]);

  const active = query || department !== 'All areas';
  const clear = () => { setQuery(''); setDepartment('All areas'); };

  return (
    <div className="page">
      <header className="container page-head">
        <p className="kicker">{term.short} / subject-code reference</p>
        <h1>Courses & subject codes</h1>
        <p className="page-standfirst">{courses.length} entries transcribed from the supplied CEIT references: common university subjects and selected departmental examples. This is not a complete curriculum or live schedule.</p>
      </header>

      <section className="container">
        <div className="toolbar">
          <label className="search-field">
            <Icon name="search" size={16} />
            <span className="visually-hidden">Search subject codes</span>
            <input type="search" placeholder="Search code, title, or prefix" value={query} onChange={(event) => setQuery(event.target.value)} />
            {query && <button className="clear-search" type="button" onClick={() => setQuery('')} aria-label="Clear search"><Icon name="close" size={14} /></button>}
          </label>
          <p className="results" aria-live="polite">
            {filtered.length} of {courses.length} shown
            {active && <> · <button className="text-button" type="button" onClick={clear}>Clear</button></>}
          </p>
        </div>
        <div className="dept-filters" role="group" aria-label="Filter by subject area">
          {departments.map((item) => (
            <button
              type="button"
              key={item}
              className={`dept-filter${department === item ? ' is-selected' : ''}`}
              aria-pressed={department === item}
              onClick={() => setDepartment(item)}
            >
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
            <p>No subject codes match “{query}”{department !== 'All areas' ? ` in ${department}` : ''}.</p>
            <button className="text-button" type="button" onClick={clear}>Reset filters</button>
          </div>
        )}
      </section>

      <section className="container source-list-section">
        <p className="kicker">Source references</p>
        <h2>Check the current curriculum before relying on a code.</h2>
        <p className="source-list-intro">These links were supplied with the project notes. Some are third-party checklists; course titles, units, and offerings can change.</p>
        <ul className="source-list">
          {referenceSources.map((source) => (
            <li key={source.url}>
              <span><strong>{source.label}</strong><small>{source.note}</small></span>
              <a href={source.url} target="_blank" rel="noreferrer">Open source <Icon name="arrowUpRight" size={13} /></a>
            </li>
          ))}
        </ul>
      </section>

      <p className="container footnote">Units are shown only where listed in the supplied notes. The FITT and NSTP entries group sequences; confirm unit allocation and prerequisites with current university materials.</p>
    </div>
  );
}
