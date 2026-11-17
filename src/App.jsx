import { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Students from './pages/Students.jsx';
import Courses from './pages/Courses.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';
import { term } from './data.js';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-title">Student Information Portal</p>
          <p className="footer-note">Student profiles are fictional; curriculum entries are a partial reference and may be out of date. No login, enrollment, or official record service is provided.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link to="/students">Students</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about">About</Link>
          <a href="/portal-html.html">HTML-only version</a>
        </nav>
        <div className="footer-meta">
          <span>{term.label}</span>
          <span>FICTIONAL SAMPLE DATA · NOT AN OFFICIAL PORTAL</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-shell">
        <Navbar />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
