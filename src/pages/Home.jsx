import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import StudentCard from '../components/StudentCard.jsx';
import CourseCard from '../components/CourseCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { courses, students, term } from '../data.js';

const programs = [...new Set(students.map((s) => s.program))];
const departments = [...new Set(courses.map((c) => c.department))];
const totalUnits = courses.reduce((sum, c) => sum + c.credits, 0);
const fullSections = courses.filter((c) => {
  const [taken, cap] = c.seats.split(' / ').map(Number);
  return taken >= cap;
}).length;

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
          <p className="kicker">{term.label}</p>
          <h1>Who is enrolled, what is offered, and where to find it.</h1>
          <p className="front-standfirst">
            A single index of this term’s student records and course sections. Open any row for the full record; search and filter on the Students and Courses pages.
          </p>
          <div className="front-actions">
            <Link className="button" to="/students">Open student directory <Icon name="arrowRight" size={14} /></Link>
            <Link className="link-plain" to="/courses">Course catalog <Icon name="arrowUpRight" size={13} /></Link>
          </div>
        </div>

        <aside className="front-index" aria-label="This term at a glance">
          <h2 className="index-title">At a glance</h2>
          <dl className="index-list">
            <div><dt>Students on record</dt><dd>{students.length}</dd></div>
            <div><dt>Programs</dt><dd>{programs.length}</dd></div>
            <div><dt>Course sections</dt><dd>{courses.length}</dd></div>
            <div><dt>Departments</dt><dd>{departments.length}</dd></div>
            <div><dt>Units offered</dt><dd>{totalUnits}</dd></div>
            <div><dt>Sections full</dt><dd className={fullSections ? 'is-flag' : ''}>{fullSections}</dd></div>
          </dl>
          <h2 className="index-title">Key dates</h2>
          <dl className="index-list index-dates">
            {dates.map(([label, date]) => (
              <div key={label}><dt>{label}</dt><dd><time dateTime={date}>{date}</time></dd></div>
            ))}
          </dl>
        </aside>
      </section>

      <section className="container section-block">
        <SectionHeading
          number="01"
          title="Recently updated records"
          description={`Three of ${students.length} students. Sorted by ID.`}
          action={<Link className="link-plain" to="/students">All students <Icon name="arrowRight" size={13} /></Link>}
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
          title="Sections closing soon"
          description="Sections at or within three seats of capacity."
          action={<Link className="link-plain" to="/courses">Full catalog <Icon name="arrowRight" size={13} /></Link>}
        />
        <div className="catalog">
          {courses
            .filter((c) => { const [t, cap] = c.seats.split(' / ').map(Number); return cap - t <= 3; })
            .slice(0, 3)
            .map((course) => <CourseCard key={course.code} course={course} />)}
        </div>
      </section>

      <section className="container notice">
        <p className="kicker">Notice</p>
        <p>This portal is a front-end demonstration built for a web development course. It uses sample records only. For official transcripts, enrollment, and grades, contact your registrar directly.</p>
        <Link className="link-plain" to="/about">About this project <Icon name="arrowRight" size={13} /></Link>
      </section>
    </>
  );
}
