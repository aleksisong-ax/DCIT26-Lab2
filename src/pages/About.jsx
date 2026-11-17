import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { degreeProgramGroups, referenceSources, subjectAreas, term } from '../data.js';

const programCount = degreeProgramGroups.reduce((count, group) => count + group.programs.length, 0);

export default function About() {
  return (
    <div className="page">
      <header className="container page-head">
        <p className="kicker">{term.short} / degree-program reference</p>
        <h1>Engineering, computing, architecture, and technology.</h1>
        <p className="page-standfirst">A compact reference to {programCount} CEIT degree programs and selected subject codes. This is an informational class-project view, not an official or complete curriculum.</p>
      </header>

      <section className="container program-index">
        <div className="program-index-heading">
          <span className="section-number">01</span>
          <div>
            <h2>Degree programs</h2>
            <p>Program groups and names transcribed from the supplied CEIT academic-program reference.</p>
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
          <p>The supplied notes describe foundational general education, physical education, and orientation subjects as common across CEIT programs. The subject-code page includes the listed examples and unit values where provided.</p>
          <p>Sequence-level FITT and NSTP units are shown as supplied; confirm whether those values apply per course or across the sequence.</p>
          <Link className="link-plain" to="/courses">Open subject-code catalog <Icon name="arrowRight" size={13} /></Link>
        </div>
        <div className="about-col">
          <p className="kicker">Code prefix guide</p>
          <h2>Prefixes in the reference</h2>
          <p>Major subject codes generally use a four-letter department prefix followed by a course number. The grouped prefixes below are the ones present in the supplied notes.</p>
          <dl className="prefix-table">
            {subjectAreas.map((area) => (
              <div key={area.department}>
                <dt>{area.department}</dt>
                <dd>{area.prefixes.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container sources-section">
        <p className="kicker">Sources & scope</p>
        <h2>Verify before using for advising or enrollment.</h2>
        <p className="source-list-intro">The program page in the supplied material is from 2018, and some code examples point to third-party checklists. Requirements and offerings may have changed. Use current university materials or contact the CEIT registrar for authoritative information.</p>
        <ul className="source-list">
          {referenceSources.map((source) => (
            <li key={source.url}>
              <span><strong>{source.label}</strong><small>{source.note}</small></span>
              <a href={source.url} target="_blank" rel="noreferrer">Open source <Icon name="arrowUpRight" size={13} /></a>
            </li>
          ))}
        </ul>
        <p className="source-disclaimer">The student directory remains fictional. Course-code entries are a partial reference list and do not imply that a subject is offered in a particular term.</p>
      </section>

      <section className="container about-links">
        <Link className="button" to="/students">Open student directory <Icon name="arrowRight" size={14} /></Link>
        <a className="link-plain" href="/portal-html.html">View the HTML-only version <Icon name="arrowUpRight" size={13} /></a>
      </section>
    </div>
  );
}
