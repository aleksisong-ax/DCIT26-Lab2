import { useMemo, useState } from 'react';
import Icon from '../components/Icon.jsx';
import CourseCard from '../components/CourseCard.jsx';
import { courses } from '../data.js';

const departments = ['All departments', ...new Set(courses.map((course) => course.department))];

export default function Courses() {
  const [query, setQuery] = useState('');
  const [department, setDepartment] = useState('All departments');

  const filteredCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return courses.filter((course) => {
      const matchesDepartment = department === 'All departments' || course.department === department;
      const searchText = [course.code, course.title, course.department, course.instructor, ...course.topics]
        .join(' ')
        .toLowerCase();
      return matchesDepartment && (!normalizedQuery || searchText.includes(normalizedQuery));
    });
  }, [query, department]);

  const clearFilters = () => {
    setQuery('');
    setDepartment('All departments');
  };

  return (
    <div className="page-wrap">
      <section className="page-hero container courses-page-hero">
        <div className="page-hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> THE COURSE CATALOG</p>
          <h1>Follow what<br /><span>makes you curious.</span></h1>
          <p className="page-intro">From first lines of code to big-picture ideas, find a course that gives your curiosity somewhere to go.</p>
        </div>
        <div className="page-hero-aside courses-aside" aria-hidden="true">
          <div className="course-art-paper paper-back" />
          <div className="course-art-paper paper-front">
            <span className="paper-label">A NOTE TO SELF</span>
            <span className="paper-scribble">Keep<br />wondering<span>.</span></span>
            <span className="paper-lines"><i /><i /><i /></span>
          </div>
          <span className="course-art-sticker"><Icon name="sparkles" size={21} /></span>
          <span className="course-art-caption">Ideas worth<br />following</span>
        </div>
      </section>

      <section className="container catalog-section">
        <div className="catalog-heading">
          <div>
            <p className="eyebrow">LEARNING, YOUR WAY</p>
            <h2>The right next step is out there.</h2>
          </div>
          <p>Explore our sample catalog and open any course card to see what you might learn.</p>
        </div>

        <div className="catalog-controls">
          <label className="search-field catalog-search">
            <Icon name="search" size={19} />
            <span className="visually-hidden">Search courses</span>
            <input
              type="search"
              placeholder="Search courses, codes, or topics..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query && <button className="clear-search" type="button" onClick={() => setQuery('')} aria-label="Clear search"><Icon name="close" size={16} /></button>}
          </label>
          <div className="department-filters" role="group" aria-label="Filter courses by department">
            {departments.map((item) => (
              <button
                type="button"
                key={item}
                className={`filter-chip${department === item ? ' is-selected' : ''}`}
                aria-pressed={department === item}
                onClick={() => setDepartment(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="results-line" aria-live="polite">
          <span><strong>{filteredCourses.length}</strong> {filteredCourses.length === 1 ? 'course' : 'courses'} to explore</span>
          {(query || department !== 'All departments') && <button className="text-button" type="button" onClick={clearFilters}>Clear filters</button>}
        </div>

        {filteredCourses.length > 0 ? (
          <div className="course-grid">
            {filteredCourses.map((course) => <CourseCard key={course.code} course={course} />)}
          </div>
        ) : (
          <div className="empty-state">
            <span className="empty-state-icon"><Icon name="book" size={23} /></span>
            <h3>No courses match that search.</h3>
            <p>Try another title, topic, or department to keep exploring.</p>
            <button className="button button-primary" type="button" onClick={clearFilters}>Show all courses <Icon name="arrowRight" size={16} /></button>
          </div>
        )}
      </section>

      <section className="container catalog-note">
        <div className="catalog-note-icon"><Icon name="calendar" size={20} /></div>
        <div><strong>A note about this catalog</strong><p>These courses are fictional examples for a class project. Check with your school for current offerings and registration details.</p></div>
      </section>
    </div>
  );
}
