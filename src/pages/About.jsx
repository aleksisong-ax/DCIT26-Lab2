import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { degreeProgramGroups, referenceSources, subjectAreas, term } from '../data.js';

const programCount = degreeProgramGroups.reduce((count, group) => count + group.programs.length, 0);

const FEATURES = [
  { title: 'Grades & Academic Records', body: 'View midterm and final grades, semester GWA, transcript summaries, and evaluation results — on the Dashboard’s grades section.' },
  { title: 'Class Schedules', body: 'Check enrolled subjects, days and time, room assignments, and instructor details in a weekly timetable on the Courses page.' },
  { title: 'Enrollment & Registration', body: 'Handle online subject selection with a live 24-unit counter, registration steps, and add/drop requests with an adviser-approval log.' },
  { title: 'My Account & Profile', body: 'Review and edit the signed-in demo student’s personal information, ID photo, e-signature, and password check on the My Profile page. No classmates’ profiles are included.' },
];

export default function About() {
  return (
    <div className="page">
      <header className="container page-head">
        <p className="kicker">{term.short} / about this system</p>
        <h1>One portal for your whole academic life.</h1>
        <p className="page-standfirst">A <strong>Student Information Portal</strong> (Student Information System / SIS) is a centralized, web-based platform where students can view and manage their academic records online — instead of lining up at the registrar for every transaction.</p>
      </header>

      <section className="container section-block" style={{ paddingTop: 0 }}>
        <p className="kicker">Key features in this build</p>
        <div className="sis-feature-grid">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="sis-panel"><h2>{feature.title}</h2><p>{feature.body}</p></article>
          ))}
        </div>
        <p className="footnote">Reference portals: <a href="https://portal.mseuf.edu.ph/ecampnet/" target="_blank" rel="noreferrer">MSEUF eCampNet</a> · <a href="https://our.upou.edu.ph/student" target="_blank" rel="noreferrer">UPOU Student Portal</a> · <a href="https://chmsu.edu.ph/student-portal/" target="_blank" rel="noreferrer">CHMSU Student Portal</a>. This demo is not affiliated with any university.</p>
      </section>

      <section className="container section-block">
        <p className="kicker">Laboratory rubric</p>
        <h2 className="sis-profile-title">How this project complies</h2>
        <ul className="sis-rubric">
          <li><strong>Project Structure</strong> — Local Git repository initialized with a configured username and email (replace the placeholder identity in the README with your own).</li>
          <li><strong>Reusable Components</strong> — Shared <code>Navbar</code>, <code>StudentCard</code>, <code>CourseCard</code>, <code>GradeTable</code>, and <code>ScheduleGrid</code> components in <code>src/components</code>, with pages in <code>src/pages</code>.</li>
          <li><strong>React Routing</strong> — React Router routes for Home (Dashboard), Students, Courses, and About, with CSS styling and JavaScript interactivity on the <code>main</code> branch.</li>
          <li><strong>Page Implementation</strong> — <code>no-style</code> and <code>main</code> branches are maintained, the HTML-only version lives at <code>public/portal-html.html</code>, and changes are committed with descriptive messages.</li>
          <li><strong>Output &amp; Display</strong> — Push both branches to your GitHub repository and submit the repository link (commands in the README).</li>
        </ul>
        <pre className="sis-cmd">{`git config user.name "Your Full Name"
git config user.email "you@example.com"
git remote add origin https://github.com/YOUR-USERNAME/student-information-portal.git
git push -u origin main
git push -u origin no-style`}</pre>
      </section>

      <section className="container program-index">
        <div className="program-index-heading">
          <span className="section-number">CEIT</span>
          <div>
            <h2>Degree programs</h2>
            <p>{programCount} program entries transcribed from the supplied CEIT academic-program reference (2018 — verify current offerings).</p>
          </div>
        </div>
        <div className="program-group-list">
          {degreeProgramGroups.map((group, index) => (
            <article className="program-group" key={group.id}>
              <span className="program-group-number">0{index + 1}</span>
              <div className="program-group-content">
                <h3>{group.title}</h3>
                <ul className="degree-list">
                  {group.programs.map((program) => (
                    <li key={program.name}>
                      <span>{program.name}</span>
                      {program.majors && <small>Majors: {program.majors.join(' · ')}</small>}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container about-grid">
        <div className="about-col">
          <p className="kicker">Common requirements</p>
          <h2>Shared university subjects</h2>
          <p>General education, physical education, NSTP, and orientation subjects are shared across CEIT programs. The subject-code catalog on the Courses page lists the supplied examples and units where provided.</p>
          <Link className="link-plain" to="/courses">Open subject catalog <Icon name="arrowRight" size={13} /></Link>
        </div>
        <div className="about-col">
          <p className="kicker">Code prefix guide</p>
          <h2>Prefixes in the reference</h2>
          <dl className="prefix-table">
            {subjectAreas.map((area) => (
              <div key={area.department}><dt>{area.department}</dt><dd>{area.prefixes.join(' · ')}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container sources-section">
        <p className="kicker">Sources & scope</p>
        <h2>Verify before using for advising or enrollment.</h2>
        <p className="source-list-intro">The program page in the supplied material is from 2018, and some code examples point to third-party checklists. Requirements and offerings may have changed.</p>
        <ul className="source-list">
          {referenceSources.map((source) => (
            <li key={source.url}>
              <span><strong>{source.label}</strong><small>{source.note}</small></span>
              <a href={source.url} target="_blank" rel="noreferrer">Open source <Icon name="arrowUpRight" size={13} /></a>
            </li>
          ))}
        </ul>
        <p className="source-disclaimer">This build contains one fictional student profile and that student’s demo grades, schedule, and enrollment only; it has no directory or classmates’ records. It is front-end-only and does not provide authentication or enforce privacy. Never enter real student data. Subject-code entries are a partial reference and do not imply a subject is offered in a particular term.</p>
      </section>
    </div>
  );
}
