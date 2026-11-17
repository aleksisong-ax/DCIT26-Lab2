import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';

const stack = [
  ['Framework', 'React 18 with Vite 6'],
  ['Routing', 'React Router 7 — /, /students, /courses, /about, and a 404 route'],
  ['Components', 'Navbar, StudentCard, CourseCard, SectionHeading, Icon in src/components'],
  ['Pages', 'Home, Students, Courses, About, NotFound in src/pages'],
  ['Data', 'Static sample records in src/data.js; no backend'],
  ['Branches', 'main (styled) and no-style (unstyled) in the same repository'],
];

export default function About() {
  return (
    <div className="page">
      <header className="container page-head">
        <p className="kicker">About</p>
        <h1>What this portal is, and what it isn’t.</h1>
        <p className="page-standfirst">
          A student information portal built as a front-end class project. It shows how a records directory and a course catalog can share one navigation, one set of reusable components, and one data file.
        </p>
      </header>

      <section className="container about-grid">
        <div className="about-col">
          <h2>Scope</h2>
          <p>Three things: a directory of student records, a catalog of course sections, and the navigation between them. Every list on the site is built from the same two components, <code>StudentCard</code> and <code>CourseCard</code>, so a change to the record layout appears everywhere at once.</p>
          <p>There is no login, no database, and no network request. Everything you see is in <code>src/data.js</code>.</p>
        </div>
        <div className="about-col">
          <h2>Not included</h2>
          <p>Grades, transcripts, payments, enrollment actions, and anything that touches a real student record. If you need any of those, go to your registrar. The names, IDs, advisers, and schedules here are invented.</p>
        </div>
      </section>

      <section className="container">
        <h2 className="table-title">Build notes</h2>
        <dl className="spec-table">
          {stack.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </dl>
      </section>

      <section className="container about-links">
        <Link className="button" to="/students">Open the directory <Icon name="arrowRight" size={14} /></Link>
        <a className="link-plain" href="/portal-html.html">View the HTML-only version <Icon name="arrowUpRight" size={13} /></a>
      </section>
    </div>
  );
}
