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

  const filteredStudents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return students.filter((student) => {
      const matchesYear = year === 'all' || String(student.year) === year;
      const searchText = [student.name, student.program, student.yearLabel, student.id, ...student.interests]
        .join(' ')
        .toLowerCase();
      return matchesYear && (!normalizedQuery || searchText.includes(normalizedQuery));
    });
  }, [query, year]);

  const clearFilters = () => {
    setQuery('');
    setYear('all');
  };

  return (
    <div className="page-wrap">
      <section className="page-hero container">
        <div className="page-hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> THE STUDENT DIRECTORY</p>
          <h1>Find your<br /><span>kind of people.</span></h1>
          <p className="page-intro">Every campus is made of a thousand small stories. Meet a few of the curious, kind, and creative people who make ours.</p>
        </div>
        <div className="page-hero-aside students-aside" aria-hidden="true">
          <div className="aside-orbit orbit-one" />
          <div className="aside-orbit orbit-two" />
          <div className="aside-portrait portrait-one">MS</div>
          <div className="aside-portrait portrait-two">AV</div>
          <div className="aside-portrait portrait-three">LD</div>
          <span className="aside-note"><Icon name="heart" size={17} /> A place to belong</span>
        </div>
      </section>

      <section className="container directory-section">
        <div className="directory-intro-row">
          <div>
            <p className="eyebrow">YOUR CAMPUS COMMUNITY</p>
            <h2>People, not just profiles.</h2>
          </div>
          <p className="directory-context">Browse the sample directory, or use search and year filters to find someone with a shared interest.</p>
        </div>

        <div className="directory-toolbar">
          <label className="search-field">
            <Icon name="search" size={19} />
            <span className="visually-hidden">Search students</span>
            <input
              type="search"
              placeholder="Search name, program, or interest..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query && <button className="clear-search" type="button" onClick={() => setQuery('')} aria-label="Clear search"><Icon name="close" size={16} /></button>}
          </label>
          <label className="filter-select">
            <span className="visually-hidden">Filter students by year</span>
            <select value={year} onChange={(event) => setYear(event.target.value)}>
              {yearOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
            </select>
            <Icon name="chevronDown" size={17} />
          </label>
        </div>

        <div className="results-line" aria-live="polite">
          <span><strong>{filteredStudents.length}</strong> {filteredStudents.length === 1 ? 'student' : 'students'} found</span>
          {(query || year !== 'all') && <button className="text-button" type="button" onClick={clearFilters}>Clear filters</button>}
        </div>

        {filteredStudents.length > 0 ? (
          <div className="student-grid">
            {filteredStudents.map((student) => <StudentCard key={student.id} student={student} />)}
          </div>
        ) : (
          <div className="empty-state">
            <span className="empty-state-icon"><Icon name="search" size={23} /></span>
            <h3>No students found just yet.</h3>
            <p>Try a different name, interest, or year. Your people are out there.</p>
            <button className="button button-primary" type="button" onClick={clearFilters}>Reset search <Icon name="arrowRight" size={16} /></button>
          </div>
        )}
      </section>

      <section className="container directory-footnote">
        <Icon name="sparkles" size={18} />
        <p>All profiles on this demonstration portal use fictional sample information.</p>
      </section>
    </div>
  );
}
