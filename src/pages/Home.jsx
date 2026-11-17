import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import StudentCard from '../components/StudentCard.jsx';
import CourseCard from '../components/CourseCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { courses, degreeProgramGroups, students, subjectAreas, term } from '../data.js';

const degreeProgramCount = degreeProgramGroups.reduce((count, group) => count + group.programs.length, 0);
const commonSubjects = courses.filter((course) => course.kind === 'Common university requirement');
const majorSubjects = courses.filter((course) => course.kind === 'Program subject example');
const featuredCodes = ['CvSU 101', 'DCIT 21', 'CENG 50'];
const featuredCourses = featuredCodes.map((code) => courses.find((course) => course.code === code)).filter(Boolean);

export default function Home() {
  return (
    <>
      <section className="container front">
        <div className="front-lead">
          <p className="kicker">{term.short} / DEGREE & SUBJECT REFERENCE</p>
          <h1>People, programs, and subject codes.</h1>
          <p className="front-standfirst">
            Find the CEIT degree-program list, common university subjects, and selected departmental code examples collected for this portal.
          </p>
          <div className="front-actions">
            <Link className="button" to="/about">View degree programs <Icon name="arrowRight" size={14} /></Link>
            <Link className="link-plain" to="/courses">Browse subject codes <Icon name="arrowUpRight" size={13} /></Link>
          </div>
          <p className="portal-disclosure"><strong>REFERENCE PROJECT</strong><span>Student profiles are fictional. Program and subject details are for reference; verify with current CvSU CEIT materials.</span></p>
        </div>

        <aside className="front-term-panel" aria-label="CEIT reference shortcuts">
          <div className="front-panel-head">
            <span>ACADEMIC SERVICES</span>
            <span>REFERENCE / 01</span>
          </div>
          <div className="front-panel-session">
            <span className="front-panel-code">CEIT</span>
            <span className="front-panel-year"><small>INDEX</small><strong>Programs<br />& subject codes</strong></span>
          </div>
          <p className="front-panel-title">College reference index</p>
          <p className="front-panel-copy">Degree programs, shared requirements, and selected code examples.</p>
          <nav className="front-panel-links" aria-label="Reference sections">
            <Link to="/about"><span>01</span><span>Degree programs</span><Icon name="arrowRight" size={15} /></Link>
            <Link to="/courses"><span>02</span><span>Subject-code catalog</span><Icon name="arrowRight" size={15} /></Link>
          </nav>
          <p className="front-panel-note">SOURCE-LINKED · NOT AN OFFICIAL CURRICULUM</p>
        </aside>
      </section>

      <section className="container term-summary" aria-label="Reference index overview">
        <div className="term-summary-intro">
          <p className="kicker">REFERENCE INDEX / {term.short}</p>
          <h2>{term.label}</h2>
          <p>Student profiles are examples; curriculum entries are a partial reference list.</p>
        </div>
        <div className="term-summary-body">
          <dl className="term-stat-list">
            <div><dt>Sample student profiles</dt><dd>{String(students.length).padStart(2, '0')}</dd></div>
            <div><dt>Degree programs listed</dt><dd>{String(degreeProgramCount).padStart(2, '0')}</dd></div>
            <div><dt>Common subject entries</dt><dd>{String(commonSubjects.length).padStart(2, '0')}</dd></div>
            <div><dt>Departmental examples</dt><dd>{String(majorSubjects.length).padStart(2, '0')}</dd></div>
          </dl>
          <div className="term-date-block">
            <h3>Code families <span>{subjectAreas.length} areas</span></h3>
            <dl className="term-date-list">
              {subjectAreas.map((area) => (
                <div key={area.department}><dt>{area.department}</dt><dd>{area.prefixes.join(' · ')}</dd></div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="container section-block">
        <SectionHeading
          number="01"
          title="Student directory"
          description={`Three fictional profiles from ${students.length} sample records.`}
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
          title="Subject-code examples"
          description="Selected entries from the supplied CEIT reference notes—not a term schedule."
          action={<Link className="link-plain" to="/courses">Browse all codes <Icon name="arrowRight" size={13} /></Link>}
        />
        <div className="catalog">
          {featuredCourses.map((course) => <CourseCard key={course.code} course={course} />)}
        </div>
      </section>

      <section className="container notice">
        <p className="kicker">For official information</p>
        <p>This portal is not connected to Cavite State University. Student profiles are fictional; program and subject-code details are a partial reference and may be outdated. Confirm current offerings, units, prerequisites, and enrollment rules with the university or CEIT registrar.</p>
        <Link className="link-plain" to="/about">Read the source notes <Icon name="arrowRight" size={13} /></Link>
      </section>
    </>
  );
}
