import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import StudentCard from '../components/StudentCard.jsx';
import CourseCard from '../components/CourseCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { courses, students, term } from '../data.js';

const programs = [...new Set(students.map((student) => student.program))];
const departments = [...new Set(courses.map((course) => course.department))];
const formatDate = (date) => new Intl.DateTimeFormat('en-PH', {
  day: 'numeric', month: 'short', year: 'numeric',
}).format(new Date(`${date}T12:00:00`));

const dates = [
  ['Enrollment opens', term.enrollmentOpens],
  ['Classes begin', term.classesBegin],
  ['Add/drop ends', term.addDropEnds],
];

export default function Home() {
  return (
    <>
      <section className="container front">
        <div className="front-lead">
          <p className="kicker">STUDENT SERVICES / {term.short}</p>
          <h1>People, programs, and course sections.</h1>
          <p className="front-standfirst">
            Browse the student directory and course catalog for the sample academic term. Find a class, check a section’s details, or see who is studying alongside you.
          </p>
          <div className="front-actions">
            <Link className="button" to="/students">Student directory <Icon name="arrowRight" size={14} /></Link>
            <Link className="link-plain" to="/courses">Course catalog <Icon name="arrowUpRight" size={13} /></Link>
          </div>
          <p className="portal-disclosure"><strong>DEMONSTRATION SITE</strong><span>Fictional records only. No sign-in, grades, payments, or official enrollment.</span></p>
        </div>

        <figure className="front-photo">
          <img src="/campus-courtyard.jpg" alt="Illustrative university courtyard with students walking between academic buildings" />
          <figcaption>
            <span className="photo-kicker">CAMPUS SCENE · ILLUSTRATIVE</span>
            <span>A place to learn, meet, and get to class.</span>
          </figcaption>
        </figure>
      </section>

      <section className="container term-summary" aria-label="Sample term information">
        <div className="term-summary-intro">
          <p className="kicker">TERM BRIEF / SAMPLE DATA</p>
          <h2>{term.label}</h2>
          <p>A small index of the sample records in this demonstration.</p>
        </div>
        <div className="term-summary-body">
          <dl className="term-stat-list">
            <div><dt>Student profiles</dt><dd>{String(students.length).padStart(2, '0')}</dd></div>
            <div><dt>Course sections</dt><dd>{String(courses.length).padStart(2, '0')}</dd></div>
            <div><dt>Programs represented</dt><dd>{String(programs.length).padStart(2, '0')}</dd></div>
            <div><dt>Departments represented</dt><dd>{String(departments.length).padStart(2, '0')}</dd></div>
          </dl>
          <div className="term-date-block">
            <h3>Calendar dates <span>sample</span></h3>
            <dl className="term-date-list">
              {dates.map(([label, date]) => (
                <div key={label}><dt>{label}</dt><dd><time dateTime={date}>{formatDate(date)}</time></dd></div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="container section-block">
        <SectionHeading
          number="01"
          title="Student directory"
          description={`Three sample profiles from ${students.length} fictional records.`}
          action={<Link className="link-plain" to="/students">View all students <Icon name="arrowRight" size={13} /></Link>}
        />
        <div className="ledger">
          <div className="ledger-head" aria-hidden="true">
            <span>ID</span><span>Name</span><span>Program</span><span>Year</span><span>Standing</span><span />
          </div>
          {students.slice(0, 3).map((student) => <StudentCard key={student.id} student={student} />)}
        </div>
      </section>

      <section className="container section-block">
        <SectionHeading
          number="02"
          title="Course catalog"
          description="Sample sections with fictional schedules, rooms, and seat counts."
          action={<Link className="link-plain" to="/courses">View full catalog <Icon name="arrowRight" size={13} /></Link>}
        />
        <div className="catalog">
          {courses.slice(0, 3).map((course) => <CourseCard key={course.code} course={course} />)}
        </div>
      </section>

      <section className="container notice">
        <p className="kicker">For official information</p>
        <p>This project is not connected to a school system. The names, dates, course sections, and seat counts are invented. For grades, enrollment, tuition, or transcripts, use your school’s official portal or contact its registrar.</p>
        <Link className="link-plain" to="/about">About this demonstration <Icon name="arrowRight" size={13} /></Link>
      </section>
    </>
  );
}
