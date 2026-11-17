import { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Icon from './components/Icon.jsx';
import Home from './pages/Home.jsx';
import Students from './pages/Students.jsx';
import Courses from './pages/Courses.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand-block">
          <Link className="brand footer-brand" to="/">
            <span className="brand-mark"><Icon name="sparkles" size={19} /></span>
            <span className="brand-name">northstar</span>
          </Link>
          <p>A little more connected, a little more inspired.</p>
        </div>
        <div className="footer-nav" aria-label="Footer navigation">
          <Link to="/students">Student directory</Link>
          <Link to="/courses">Course catalog</Link>
          <Link to="/about">About the portal</Link>
          <a href="/portal-html.html">HTML-only version</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Northstar Student Portal</span>
        <span><Icon name="heart" size={14} /> Made for campus community</span>
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
