import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import StudentCard from '../components/StudentCard.jsx';
import CourseCard from '../components/CourseCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { courses, students } from '../data.js';

const programCount = new Set(students.map((student) => student.program)).size;
const yearCount = new Set(students.map((student) => student.year)).size;

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow-pill"><Icon name="sparkles" size={15} /> A BRIGHTER WAY TO FIND YOUR WAY</span>
            <h1>Your campus,<br /><span>all in one place.</span></h1>
            <p className="hero-description">
              Meet the people, discover the courses, and find your next spark. Welcome to a more connected campus.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/students">Explore the community <Icon name="arrowRight" size={17} /></Link>
              <Link className="button button-quiet" to="/courses">Browse courses <Icon name="arrowUpRight" size={16} /></Link>
            </div>
            <div className="hero-social-proof">
              <div className="mini-avatar-stack" aria-hidden="true">
                {students.slice(0, 4).map((student) => (
                  <span className={`mini-avatar mini-${student.accent}`} key={student.id}>{student.initials}</span>
                ))}
              </div>
              <p><strong>A campus full of possibility.</strong><br />Start by finding your people.</p>
            </div>
          </div>

          <div className="hero-art" aria-label="A sample student portal dashboard card">
            <div className="hero-art-orbit orbit-one" />
            <div className="hero-art-orbit orbit-two" />
            <div className="hero-spark spark-one"><Icon name="sparkles" size={21} /></div>
            <div className="hero-spark spark-two"><Icon name="sparkles" size={15} /></div>
            <div className="hero-dashboard-card">
              <div className="dashboard-topline">
                <span className="dashboard-dot" />
                <span>YOUR CAMPUS SNAPSHOT</span>
                <Icon name="arrowUpRight" size={17} />
              </div>
              <p className="dashboard-kicker">A good place to begin</p>
              <h2>Find your<br /><span>next thing.</span></h2>
              <div className="dashboard-rule" />
              <div className="dashboard-links">
                <span className="dashboard-link-icon lavender-icon"><Icon name="users" size={17} /></span>
                <span><strong>People who get it</strong><small>Make campus feel smaller</small></span>
                <Icon name="arrowRight" size={16} className="dashboard-arrow" />
              </div>
              <div className="dashboard-links">
                <span className="dashboard-link-icon peach-icon"><Icon name="book" size={17} /></span>
                <span><strong>Ideas to explore</strong><small>Find a course to love</small></span>
                <Icon name="arrowRight" size={16} className="dashboard-arrow" />
              </div>
            </div>
            <div className="floating-note note-courses">
              <span className="note-icon"><Icon name="layers" size={17} /></span>
              <span><strong>{String(courses.length).padStart(2, '0')} courses</strong><small>to explore</small></span>
            </div>
            <div className="floating-note note-community">
              <span className="community-check"><Icon name="check" size={14} /></span>
              <span><strong>Find your community</strong><small>One hello at a time</small></span>
            </div>
          </div>
        </div>
        <div className="hero-bottom-shape" />
      </section>

      <section className="container stats-row" aria-label="Portal overview">
        <div className="stat-item">
          <span className="stat-icon stat-icon-lilac"><Icon name="users" size={19} /></span>
          <span className="stat-copy"><strong>{String(students.length).padStart(2, '0')}</strong><small>student stories</small></span>
        </div>
        <div className="stat-item">
          <span className="stat-icon stat-icon-peach"><Icon name="book" size={19} /></span>
          <span className="stat-copy"><strong>{String(courses.length).padStart(2, '0')}</strong><small>courses to explore</small></span>
        </div>
        <div className="stat-item">
          <span className="stat-icon stat-icon-mint"><Icon name="graduation" size={19} /></span>
          <span className="stat-copy"><strong>{String(programCount).padStart(2, '0')}</strong><small>degree programs</small></span>
        </div>
        <div className="stat-item">
          <span className="stat-icon stat-icon-sky"><Icon name="compass" size={19} /></span>
          <span className="stat-copy"><strong>{String(yearCount).padStart(2, '0')}</strong><small>years represented</small></span>
        </div>
      </section>

      <section className="section-block container home-directory-section">
        <SectionHeading
          eyebrow="THE PEOPLE MAKE THE PLACE"
          title="A community worth knowing."
          description="A few friendly faces to get you started. Every profile is a doorway to a new conversation."
          action={<Link className="section-link" to="/students">Meet all students <Icon name="arrowRight" size={16} /></Link>}
        />
        <div className="student-grid home-student-grid">
          {students.slice(0, 3).map((student) => <StudentCard key={student.id} student={student} />)}
        </div>
      </section>

      <section className="section-block course-feature-section">
        <div className="container">
          <SectionHeading
            eyebrow="LEARN SOMETHING NEW"
            title="Curiosity looks good on you."
            description="Explore a small sample of the subjects and skills waiting to be discovered."
            action={<Link className="section-link" to="/courses">See the course catalog <Icon name="arrowRight" size={16} /></Link>}
          />
          <div className="course-grid home-course-grid">
            {courses.slice(0, 3).map((course) => <CourseCard key={course.code} course={course} />)}
          </div>
        </div>
      </section>

      <section className="container invitation-section">
        <div className="invitation-card">
          <div className="invitation-decoration invitation-decoration-one" />
          <div className="invitation-decoration invitation-decoration-two" />
          <div className="invitation-content">
            <span className="eyebrow-pill eyebrow-pill-light"><Icon name="compass" size={15} /> YOUR NEXT CHAPTER STARTS HERE</span>
            <h2>There’s more to campus<br />than a class schedule.</h2>
            <p>Get to know the Northstar portal and find your own way to belong.</p>
            <Link className="button button-light" to="/about">Get to know us <Icon name="arrowRight" size={17} /></Link>
          </div>
          <div className="invitation-symbol" aria-hidden="true"><Icon name="sparkles" size={74} strokeWidth={1.2} /></div>
        </div>
      </section>
    </>
  );
}
