import { useMemo, useState } from 'react';
import Icon from '../components/Icon.jsx';
import StudentCard from '../components/StudentCard.jsx';
import { students } from '../data.js';

const yearOptions = [
  { value: 'all', label: 'All years' },
  { value: '1', label: '1st year' },
  { value: '2', label: '2nd year' },
  { value: '3', label: '3rd year' },
  { value: '4', label: '4th year' },
];

export default function Students() {
  const [query, setQuery] = useState('');
  const [year, setYear] = useState('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return students.filter((student) => {
      const matchesYear = year === 'all' || String(student.year) === year;
      const text = [student.name, student.program, student.yearLabel, student.id, student.adviser, student.campus, ...student.interests].join(' ').toLowerCase();
      return matchesYear && (!q || text.includes(q));
    });
  }, [query, year]);

  const active = query || year !== 'all';
  const clear = () => { setQuery(''); setYear('all'); };

  return (
    <div className="page">
      <header className="container page-head">
        <p className="kicker">Academic records / sample directory</p>
        <h1>Students</h1>
        <p className="page-standfirst">{students.length} fictional profiles in this sample directory. Search by name, ID, program, adviser, or interest.</p>
      </header>

      <section className="container">
        <div className="toolbar">
          <label className="search-field">
            <Icon name="search" size={16} />
            <span className="visually-hidden">Search students</span>
            <input type="search" placeholder="Search records" value={query} onChange={(e) => setQuery(e.target.value)} />
            {query && <button className="clear-search" type="button" onClick={() => setQuery('')} aria-label="Clear search"><Icon name="close" size={14} /></button>}
          </label>
          <label className="filter-select">
            <span className="filter-label">Year</span>
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              {yearOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
            </select>
            <Icon name="chevronDown" size={14} />
          </label>
          <p className="results" aria-live="polite">
            {filtered.length} of {students.length} shown
            {active && <> · <button className="text-button" type="button" onClick={clear}>Clear</button></>}
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="ledger">
            <div className="ledger-head" aria-hidden="true">
              <span>ID</span><span>Name</span><span>Program</span><span>Year</span><span>Standing</span><span />
            </div>
            {filtered.map((student) => <StudentCard key={student.id} student={student} />)}
          </div>
        ) : (
          <div className="empty">
            <p>No records match “{query}”{year !== 'all' ? ` in year ${year}` : ''}.</p>
            <button className="text-button" type="button" onClick={clear}>Reset filters</button>
          </div>
        )}
      </section>

      <p className="container footnote">Names, IDs, advisers, contact details, and standing labels are fictional. No official student record is shown.</p>
    </div>
  );
}
