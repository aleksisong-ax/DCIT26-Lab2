import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';

export default function NotFound() {
  return (
    <section className="not-found container">
      <span className="not-found-orbit"><Icon name="compass" size={43} strokeWidth={1.4} /></span>
      <p className="eyebrow">A SMALL DETOUR</p>
      <h1>Looks like this page<br /><span>is still finding its way.</span></h1>
      <p>That address doesn’t lead anywhere in the Northstar portal. Let’s get you back on track.</p>
      <Link className="button button-primary" to="/">Back to the home page <Icon name="arrowRight" size={17} /></Link>
    </section>
  );
}
