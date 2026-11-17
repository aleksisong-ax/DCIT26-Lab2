import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon.jsx';

const links = [
  { label: 'Home', to: '/', end: true },
  { label: 'Students', to: '/students' },
  { label: 'Courses', to: '/courses' },
  { label: 'About', to: '/about' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand" to="/" aria-label="Northstar student portal home">
          <span className="brand-mark"><Icon name="sparkles" size={20} /></span>
          <span className="brand-name-wrap">
            <span className="brand-name">northstar</span>
            <span className="brand-caption">STUDENT PORTAL</span>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={21} />
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links${menuOpen ? ' is-open' : ''}`}
          aria-label="Main navigation"
        >
          <div className="nav-link-list">
            {links.map(({ label, to, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
              >
                {label}
              </NavLink>
            ))}
          </div>
          <Link className="nav-cta" to="/students">
            Find your people <Icon name="arrowRight" size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
