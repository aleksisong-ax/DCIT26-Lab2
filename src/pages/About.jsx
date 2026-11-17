import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

const values = [
  {
    icon: 'users',
    tone: 'value-lilac',
    title: 'People first',
    text: 'A campus is more than buildings and class lists. We make it easier to discover the people around you.',
  },
  {
    icon: 'compass',
    tone: 'value-peach',
    title: 'Room to explore',
    text: 'Learning paths are personal. Browse with curiosity and find a subject that feels like yours.',
  },
  {
    icon: 'heart',
    tone: 'value-mint',
    title: 'Made with care',
    text: 'Clear information, thoughtful details, and friendly design help make every visit feel welcoming.',
  },
];

export default function About() {
  return (
    <div className="page-wrap about-page">
      <section className="about-hero container">
        <div className="about-hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT US</p>
          <h1>Good things happen<br />when we <span>connect.</span></h1>
          <p className="page-intro">Northstar is a friendly starting point for student life: a simple place to discover classmates, browse learning opportunities, and feel a little more at home.</p>
          <Link className="button button-primary" to="/students">Meet the community <Icon name="arrowRight" size={17} /></Link>
        </div>
        <div className="about-hero-art" aria-hidden="true">
          <div className="about-circle circle-back" />
          <div className="about-circle circle-front"><Icon name="sparkles" size={56} strokeWidth={1.3} /></div>
          <div className="about-small-card about-small-card-one"><span className="small-card-icon"><Icon name="users" size={17} /></span><span><strong>People</strong><small>make the place</small></span></div>
          <div className="about-small-card about-small-card-two"><span className="small-card-icon small-card-icon-peach"><Icon name="book" size={17} /></span><span><strong>Ideas</strong><small>in every direction</small></span></div>
        </div>
      </section>

      <section className="about-purpose-section">
        <div className="container about-purpose-grid">
          <div className="purpose-mark"><Icon name="compass" size={34} strokeWidth={1.5} /><span>N</span></div>
          <div className="purpose-copy">
            <p className="eyebrow">WHY NORTHSTAR?</p>
            <h2>Campus life can feel big.<br /><span>Finding your place shouldn’t.</span></h2>
            <p>We imagined a portal that feels less like a filing cabinet and more like a friendly map. It brings people and courses together in one simple, welcoming experience—so you can spend less time searching and more time getting involved.</p>
          </div>
          <div className="purpose-aside">
            <span className="purpose-quote-mark">“</span>
            <p>A good first hello can turn an unfamiliar campus into your campus.</p>
            <span className="purpose-quote-rule" />
            <small>THE NORTHSTAR IDEA</small>
          </div>
        </div>
      </section>

      <section className="container values-section">
        <SectionHeading
          eyebrow="WHAT WE BELIEVE"
          title="A few things we keep close."
          description="The small principles behind a more human student portal."
          align="center"
        />
        <div className="values-grid">
          {values.map((value, index) => (
            <article className="value-card" key={value.title}>
              <div className={`value-icon ${value.tone}`}><Icon name={value.icon} size={21} /></div>
              <span className="value-number">0{index + 1}</span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container about-disclaimer">
        <div className="disclaimer-icon"><Icon name="check" size={19} /></div>
        <div>
          <strong>Built as a learning project</strong>
          <p>Northstar is a front-end demonstration. Its student and course records are fictional sample content and are not connected to a school database.</p>
        </div>
      </section>
    </div>
  );
}
