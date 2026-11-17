import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import GradeTable from '../components/GradeTable.jsx';
import ScheduleGrid from '../components/ScheduleGrid.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { announcements, defaultEnrolledCodes, gradeBook, gwaOf, MAX_UNITS, portalStudent, scheduleCatalog, term } from '../data.js';

const enrolledSubjects = scheduleCatalog.filter((course) => defaultEnrolledCodes.includes(course.code));
const enrolledUnits = enrolledSubjects.reduce((sum, course) => sum + course.units, 0);
const fmt = (value) => Number(value).toFixed(2);

// Home = the SIS dashboard for the signed-in student.
export default function Home() {
  const [semIndex, setSemIndex] = useState(0);
  const rows = gradeBook[semIndex].rows;
  const gwa = useMemo(() => gwaOf(rows), [rows]);
  const progress = Math.round((portalStudent.completedUnits / portalStudent.curriculumUnits) * 100);
  const today = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()];
  const todaysClasses = enrolledSubjects.filter((course) => course.days.includes(today));

  return (
    <>
      <section className="container sis-hero">
        <div>
          <p className="kicker">Student Information Portal · {term.label}</p>
          <h1>Welcome back, {portalStudent.name.split(' ')[0]}.</h1>
          <p className="front-standfirst">A centralized, web-based portal where you can view and manage your academic records online — grades, class schedules, enrollment, and your student account in one place.</p>
          <div className="front-actions">
            <a className="button" href="#grades">View my grades <Icon name="arrowRight" size={14} /></a>
            <Link className="link-plain" to="/courses">Manage enrollment <Icon name="arrowUpRight" size={13} /></Link>
          </div>
          <p className="portal-disclosure"><strong>SINGLE-STUDENT DEMO ACCOUNT</strong><span>{portalStudent.studentNo} · {portalStudent.program} · {portalStudent.section}. Only one fictional student record is included. This front-end demo has no real authentication or server-side access controls.</span></p>
        </div>
        <aside className="sis-adviser-card" aria-label="Student summary">
          <span>ACADEMIC ADVISER</span>
          <strong>{portalStudent.adviser}</strong>
          <dl>
            <div><dt>Curriculum progress</dt><dd>{portalStudent.completedUnits}/{portalStudent.curriculumUnits} units</dd></div>
            <div><dt>Enrolled this term</dt><dd>{enrolledUnits} units · {enrolledSubjects.length} subjects</dd></div>
            <div><dt>Registration</dt><dd>Enrolled</dd></div>
            <div><dt>Standing</dt><dd>{portalStudent.standing}</dd></div>
          </dl>
        </aside>
      </section>

      <section className="container sis-stats" aria-label="Academic summary">
        <article className="sis-stat"><span>Current GWA</span><strong>{fmt(gwa)}</strong><small>{gwa <= 1.75 ? 'On track for honors' : 'Good standing'} · 1.00 scale</small></article>
        <article className="sis-stat"><span>Units enrolled</span><strong>{enrolledUnits} / {MAX_UNITS}</strong><small>{enrolledSubjects.length} subjects this semester</small></article>
        <article className="sis-stat"><span>Classes today</span><strong>{todaysClasses.length}</strong><small>{todaysClasses[0] ? `${todaysClasses[0].time} · ${todaysClasses[0].room}` : 'No classes today'}</small></article>
        <article className="sis-stat"><span>Degree progress</span><strong>{progress}%</strong><small>{portalStudent.completedUnits} of {portalStudent.curriculumUnits} units earned</small></article>
      </section>

      <section className="container section-block" id="grades">
        <SectionHeading number="01" title="Grades & academic records" description="Midterm and final grades as posted by instructors. Switch semesters to view earlier evaluation results."
          action={<div className="sis-tabs" role="tablist">{gradeBook.map((book, index) => (<button key={book.sem} type="button" className={index === semIndex ? 'is-selected' : ''} onClick={() => setSemIndex(index)}>{book.sem}</button>))}</div>} />
        <GradeTable rows={rows} />
        <p className="footnote">Semester GWA: <strong>{fmt(gwa)}</strong> · PH scale 1.00 (highest) to 5.00, passing at 3.00. Final rating is the rounded average of midterm and final grades. Demo grades only — see Courses for enrollment and My Profile for account management.</p>
      </section>

      <section className="container section-block">
        <SectionHeading number="02" title="Class schedule" description={`Your weekly timetable with room assignments and instructors (${enrolledUnits} units).`}
          action={<Link className="link-plain" to="/courses">Open schedule & enrollment <Icon name="arrowRight" size={13} /></Link>} />
        <ScheduleGrid subjects={enrolledSubjects} />
      </section>

      <section className="container sis-two-col section-block">
        <article className="sis-panel">
          <p className="kicker">Enrollment checklist</p>
          <h2>Registration status</h2>
          <ul className="sis-checklist">
            <li className="done">Advising with {portalStudent.adviser}</li>
            <li className="done">Subjects selected ({enrolledUnits} units)</li>
            <li className="done">Assessment generated</li>
            <li><strong>Payment validation</strong> — present your assessment slip at the cashier or pay online.</li>
          </ul>
          <Link className="button sis-btn-small" to="/courses">Continue enrollment</Link>
        </article>
        <article className="sis-panel">
          <p className="kicker">Announcements</p>
          <h2>From the registrar</h2>
          {announcements.map((item) => (
            <div key={item.title} className="sis-announce"><h3>{item.title}</h3><p>{item.body}</p><span>{item.when}</span></div>
          ))}
        </article>
      </section>
    </>
  );
}
