import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon.jsx';
import { term } from '../data.js';

const links = [
  { label: 'Home', to: '/', end: true },
  { label: 'My Profile', to: '/students' },
  { label: 'Courses', to: '/courses' },
  { label: 'About', to: '/about' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <header className="site-header">
      <div className="utility-band">
        <div className="container utility-inner">
          <span>ACADEMIC SERVICES</span>
          <span>SINGLE-STUDENT DEMO · FICTIONAL RECORDS</span>
        </div>
      </div>
      <div className="container nav-shell">
        <Link className="masthead" to="/" aria-label="Student Information Portal home">
          <span className="masthead-title">Student Information Portal</span>
          <span className="masthead-term"><span>SIS · GRADES / SCHEDULE / ENROLLMENT</span><i aria-hidden="true">/</i>{term.label}</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={18} />
        </button>

        <nav id="primary-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {links.map(({ label, to, end }, index) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}>
              <span className="nav-index">{String(index + 1).padStart(2, '0')}</span>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
