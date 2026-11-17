import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';

export default function NotFound() {
  return (
    <section className="container page-head not-found">
      <p className="kicker">Error 404</p>
      <h1>No page at this address.</h1>
      <p className="page-standfirst">The portal has four pages: Home, My Profile, Courses, and About. Check the address or start from the front page.</p>
      <Link className="button" to="/">Front page <Icon name="arrowRight" size={14} /></Link>
    </section>
  );
}
