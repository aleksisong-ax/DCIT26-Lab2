import { useMemo, useState } from 'react';
import Icon from '../components/Icon.jsx';
import CourseCard from '../components/CourseCard.jsx';
import ScheduleGrid from '../components/ScheduleGrid.jsx';
import { courses, defaultEnrolledCodes, MAX_UNITS, portalStudent, referenceSources, scheduleCatalog } from '../data.js';

const TABS = [
  { id: 'schedule', label: 'Class Schedule' },
  { id: 'enrollment', label: 'Enrollment & Add/Drop' },
  { id: 'catalog', label: 'Subject-Code Catalog' },
];

// Courses page = class schedules + enrollment/registration + the CEIT code catalog.
export default function Courses() {
  const [tab, setTab] = useState('schedule');
  const [enrolledCodes, setEnrolledCodes] = useState(defaultEnrolledCodes);
  const [requests, setRequests] = useState([]);
  const [query, setQuery] = useState('');
  const [notice, setNotice] = useState('');

  const enrolledSubjects = useMemo(
    () => scheduleCatalog.filter((course) => enrolledCodes.includes(course.code)),
    [enrolledCodes],
  );
  const enrolledUnits = enrolledSubjects.reduce((sum, course) => sum + course.units, 0);
  const available = useMemo(() => {
    const q = query.trim().toLowerCase();
    return scheduleCatalog.filter((course) => !enrolledCodes.includes(course.code))
      .filter((course) => !q || `${course.code} ${course.title} ${course.instructor}`.toLowerCase().includes(q));
  }, [enrolledCodes, query]);
  const referenceList = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses.filter((course) => !q || `${course.code} ${course.title} ${course.department}`.toLowerCase().includes(q));
  }, [query]);

  const addSubject = (course) => {
    if (enrolledUnits + course.units > MAX_UNITS) { setNotice(`Cannot add ${course.code}: that would exceed the ${MAX_UNITS}-unit limit.`); return; }
    setEnrolledCodes((codes) => [...codes, course.code]);
    setRequests((list) => [{ type: 'Add', course, status: 'Approved — subject added' }, ...list]);
    setNotice(`${course.code} ${course.title} added. You now have ${enrolledUnits + course.units} units.`);
  };
  const dropSubject = (course) => {
    setEnrolledCodes((codes) => codes.filter((code) => code !== course.code));
    setRequests((list) => [{ type: 'Drop', course, status: 'Pending adviser approval' }, ...list]);
    setNotice(`Drop request for ${course.code} filed. Status: pending adviser approval.`);
  };

  return (
    <div className="page">
      <header className="container page-head">
        <p className="kicker">SIS / schedules, enrollment & catalog</p>
        <h1>Class schedules & enrollment</h1>
        <p className="page-standfirst">Check your enrolled subjects, rooms, and instructors; add or drop subjects online; and browse the CEIT subject-code reference. {portalStudent.name} · {portalStudent.section}.</p>
      </header>

      <section className="container">
        <div className="sis-tabs sis-tabs-large" role="tablist" aria-label="Course services">
          {TABS.map((item) => (
            <button key={item.id} type="button" role="tab" aria-selected={tab === item.id} className={tab === item.id ? 'is-selected' : ''} onClick={() => setTab(item.id)}>{item.label}</button>
          ))}
        </div>

        {notice && <p className="sis-notice" role="status">{notice}</p>}

        {tab === 'schedule' && (
          <>
            <div className="sis-progress-row"><span><strong>{enrolledUnits}</strong> of {MAX_UNITS} units · {enrolledSubjects.length} subjects</span><span>{MAX_UNITS - enrolledUnits} units remaining</span></div>
            <div className="sis-progress"><i style={{ width: `${Math.min(100, (enrolledUnits / MAX_UNITS) * 100)}%` }} /></div>
            <ScheduleGrid subjects={enrolledSubjects} />
            <div className="sis-table-wrap" style={{ marginTop: 18 }}>
              <table className="sis-table">
                <thead><tr><th>Code</th><th>Subject</th><th>Days</th><th>Time</th><th>Room</th><th>Instructor</th></tr></thead>
                <tbody>{enrolledSubjects.map((course) => (<tr key={course.code}><td className="sis-code">{course.code}</td><td>{course.title}</td><td>{course.days.join(' / ')}</td><td>{course.time}</td><td>{course.room}</td><td>{course.instructor}</td></tr>))}</tbody>
              </table>
            </div>
          </>
        )}

        {tab === 'enrollment' && (
          <>
            <ol className="sis-steps">
              <li className="done">Advising</li><li className="now">Select subjects</li><li>Assessment</li><li>Payment</li><li>Enrolled</li>
            </ol>
            <div className="sis-progress-row"><span><strong>{enrolledUnits}</strong> of {MAX_UNITS} maximum units selected</span><span>Registration open until Aug 15, 2026</span></div>
            <div className="sis-progress"><i style={{ width: `${Math.min(100, (enrolledUnits / MAX_UNITS) * 100)}%` }} /></div>

            <h2 className="sis-subhead">Currently enrolled ({enrolledSubjects.length})</h2>
            {enrolledSubjects.length ? (
              <div className="catalog">{enrolledSubjects.map((course) => (<CourseCard key={course.code} course={course} enrolled actionLabel="Drop subject" onAction={dropSubject} />))}</div>
            ) : <div className="empty"><p>No subjects enrolled yet. Add subjects below to begin registration.</p></div>}

            <h2 className="sis-subhead">Add subjects</h2>
            <div className="toolbar">
              <label className="search-field">
                <Icon name="search" size={16} /><span className="visually-hidden">Search available subjects</span>
                <input type="search" placeholder="Search code, title, or instructor" value={query} onChange={(event) => setQuery(event.target.value)} />
                {query && <button className="clear-search" type="button" onClick={() => setQuery('')} aria-label="Clear search"><Icon name="close" size={14} /></button>}
              </label>
              <p className="results" aria-live="polite">{available.length} available</p>
            </div>
            {available.length ? (
              <div className="catalog">{available.map((course) => (<CourseCard key={course.code} course={course} actionLabel={enrolledUnits + course.units > MAX_UNITS ? 'Unit limit reached' : 'Add subject'} actionDisabled={enrolledUnits + course.units > MAX_UNITS} onAction={addSubject} />))}</div>
            ) : <div className="empty"><p>No available subjects match “{query}”.</p></div>}

            {requests.length > 0 && (
              <article className="sis-panel" style={{ marginTop: 22 }}>
                <p className="kicker">Filed requests</p><h2>Add / drop log</h2>
                <ul className="sis-checklist">{requests.map((request, index) => (<li key={`${request.course.code}-${index}`} className={request.type === 'Add' ? 'done' : ''}><strong>{request.type}</strong> — {request.course.code} {request.course.title} · {request.status}</li>))}</ul>
              </article>
            )}
          </>
        )}

        {tab === 'catalog' && (
          <>
            <p className="page-standfirst" style={{ marginBottom: 16 }}>{courses.length} CEIT subject-code entries transcribed from the supplied references — common university subjects and selected departmental examples. Not a complete curriculum.</p>
            {referenceList.length ? (
              <div className="catalog">{referenceList.map((course) => <CourseCard key={course.code} course={course} />)}</div>
            ) : <div className="empty"><p>No subject codes match “{query}”.</p></div>}
            <section className="source-list-section">
              <p className="kicker">Source references</p>
              <h2>Check the current curriculum before relying on a code.</h2>
              <ul className="source-list">
                {referenceSources.map((source) => (
                  <li key={source.url}><span><strong>{source.label}</strong><small>{source.note}</small></span><a href={source.url} target="_blank" rel="noreferrer">Open source <Icon name="arrowUpRight" size={13} /></a></li>
                ))}
              </ul>
            </section>
          </>
        )}
      </section>
    </div>
  );
}
