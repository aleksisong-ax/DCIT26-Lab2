import { useMemo, useRef, useState } from 'react';
import Icon from '../components/Icon.jsx';
import StudentCard from '../components/StudentCard.jsx';
import { portalStudent, students } from '../data.js';

const yearOptions = [
  { value: 'all', label: 'All years' },
  { value: '1', label: '1st year' },
  { value: '2', label: '2nd year' },
  { value: '3', label: '3rd year' },
  { value: '4', label: '4th year' },
];
const initials = (name) => name.split(' ').map((word) => word[0]).slice(0, 2).join('').toUpperCase();

// Students page = directory + account & profile management for the signed-in student.
export default function Students() {
  const [query, setQuery] = useState('');
  const [year, setYear] = useState('all');

  const [profile, setProfile] = useState({
    name: portalStudent.name, email: portalStudent.email, mobile: portalStudent.mobile,
    address: portalStudent.address, guardian: portalStudent.guardian,
  });
  const [photo, setPhoto] = useState(null);
  const [signature, setSignature] = useState(null);
  const [saved, setSaved] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [pwMessage, setPwMessage] = useState('');
  const canvasRef = useRef(null);
  const drawing = useRef(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return students.filter((student) => {
      const matchesYear = year === 'all' || String(student.year) === year;
      const text = [student.name, student.program, student.yearLabel, student.id, student.adviser, student.campus, ...student.interests].join(' ').toLowerCase();
      return matchesYear && (!q || text.includes(q));
    });
  }, [query, year]);
  const clear = () => { setQuery(''); setYear('all'); };

  const onPhoto = (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPhoto(reader.result);
    reader.readAsDataURL(file);
  };
  const canvasPos = (event) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const point = event.touches ? event.touches[0] : event;
    return { x: (point.clientX - rect.left) * (canvasRef.current.width / rect.width), y: (point.clientY - rect.top) * (canvasRef.current.height / rect.height) };
  };
  const drawStart = (event) => { drawing.current = true; const ctx = canvasRef.current.getContext('2d'); const p = canvasPos(event); ctx.beginPath(); ctx.moveTo(p.x, p.y); event.preventDefault(); };
  const drawMove = (event) => { if (!drawing.current) return; const ctx = canvasRef.current.getContext('2d'); const p = canvasPos(event); ctx.lineWidth = 2.2; ctx.lineCap = 'round'; ctx.strokeStyle = '#17241b'; ctx.lineTo(p.x, p.y); ctx.stroke(); event.preventDefault(); };
  const drawEnd = () => { drawing.current = false; };
  const saveProfile = (event) => {
    event.preventDefault();
    if (canvasRef.current) setSignature(canvasRef.current.toDataURL('image/png'));
    setSaved(`Profile saved for ${profile.name}. ID photo and e-signature ${photo ? 'are' : 'will be'} attached to the student ID record. (Demo — saved in this page only.)`);
  };
  const changePassword = (event) => {
    event.preventDefault();
    setPwMessage(password.length >= 8 && password === confirm ? 'Password updated. Use it on your next sign-in. (Demo only.)' : 'Passwords must match and be at least 8 characters.');
    if (password.length >= 8 && password === confirm) { setPassword(''); setConfirm(''); }
  };
  const pwScore = [password.length >= 8, /[A-Z]/.test(password) && /[a-z]/.test(password), /\d/.test(password), /[^A-Za-z0-9]/.test(password)].filter(Boolean).length;

  return (
    <div className="page">
      <header className="container page-head">
        <p className="kicker">SIS / student directory & account</p>
        <h1>Students & my profile</h1>
        <p className="page-standfirst">Search the fictional student directory, then manage the signed-in student’s profile, ID photo, e-signature, and password below.</p>
      </header>

      <section className="container">
        <div className="toolbar">
          <label className="search-field">
            <Icon name="search" size={16} /><span className="visually-hidden">Search students</span>
            <input type="search" placeholder="Search records" value={query} onChange={(event) => setQuery(event.target.value)} />
            {query && <button className="clear-search" type="button" onClick={() => setQuery('')} aria-label="Clear search"><Icon name="close" size={14} /></button>}
          </label>
          <label className="filter-select">
            <span className="filter-label">Year</span>
            <select value={year} onChange={(event) => setYear(event.target.value)}>
              {yearOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
            </select>
            <Icon name="chevronDown" size={14} />
          </label>
          <p className="results" aria-live="polite">{filtered.length} of {students.length} shown{(query || year !== 'all') && <> · <button className="text-button" type="button" onClick={clear}>Clear</button></>}</p>
        </div>

        {filtered.length > 0 ? (
          <div className="ledger">
            <div className="ledger-head" aria-hidden="true"><span>ID</span><span>Name</span><span>Program</span><span>Year</span><span>Standing</span><span /></div>
            {filtered.map((student) => <StudentCard key={student.id} student={student} />)}
          </div>
        ) : (
          <div className="empty"><p>No records match “{query}”.</p><button className="text-button" type="button" onClick={clear}>Reset filters</button></div>
        )}
      </section>

      <section className="container section-block">
        <p className="kicker">Account & profile management</p>
        <h2 className="sis-profile-title">My student profile — {portalStudent.studentNo}</h2>
        <div className="sis-profile-grid">
          <article className="sis-idcard" aria-label="Student ID card preview">
            <div className="sis-idcard-top"><span>STUDENT INFORMATION PORTAL</span><strong>Student ID Card</strong></div>
            <div className="sis-idcard-body">
              <span className="sis-avatar">{photo ? <img src={photo} alt="Uploaded student ID" /> : initials(profile.name)}</span>
              <dl>
                <div><dt>Name</dt><dd>{profile.name}</dd></div>
                <div><dt>Student no.</dt><dd>{portalStudent.studentNo}</dd></div>
                <div><dt>Program</dt><dd>{portalStudent.program} · {portalStudent.section}</dd></div>
                <div><dt>Valid for</dt><dd>1st Sem · A.Y. 2026–2027</dd></div>
              </dl>
              {signature && <img className="sis-sig-preview" src={signature} alt="Saved e-signature" />}
            </div>
          </article>

          <form className="sis-panel sis-form" onSubmit={saveProfile}>
            <label>Full name<input type="text" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} required /></label>
            <label>School email<input type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} required /></label>
            <label>Mobile number<input type="tel" value={profile.mobile} onChange={(e) => setProfile({ ...profile, mobile: e.target.value })} /></label>
            <label>Home address<textarea rows="2" value={profile.address} onChange={(e) => setProfile({ ...profile, address: e.target.value })} /></label>
            <label>Guardian / emergency contact<input type="text" value={profile.guardian} onChange={(e) => setProfile({ ...profile, guardian: e.target.value })} /></label>
            <label>Student ID photo<input type="file" accept="image/*" onChange={onPhoto} /><small>Upload a photo for your student ID. Demo only — it stays in this browser page.</small></label>
            <label>E-signature
              <canvas ref={canvasRef} className="sis-sig-pad" width="520" height="180"
                onMouseDown={drawStart} onMouseMove={drawMove} onMouseUp={drawEnd} onMouseLeave={drawEnd}
                onTouchStart={drawStart} onTouchMove={drawMove} onTouchEnd={drawEnd} />
              <small>Draw with mouse or touch, then save.</small>
            </label>
            <button className="button" type="submit">Save profile changes</button>
            {saved && <p className="sis-notice" role="status">{saved}</p>}
          </form>

          <form className="sis-panel sis-form" onSubmit={changePassword}>
            <p className="kicker">Account security</p>
            <h2>Change password</h2>
            <label>New password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength="8" placeholder="At least 8 characters" /></label>
            <div className="sis-strength"><i style={{ width: `${pwScore * 25}%` }} /></div>
            <small>{['Too weak', 'Fair', 'Good', 'Strong'][Math.max(0, pwScore - 1)] || 'Use letters, numbers, and symbols.'}</small>
            <label>Confirm password<input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} /></label>
            <button className="button" type="submit">Update password</button>
            {pwMessage && <p className="sis-notice" role="status">{pwMessage}</p>}
            <p className="footnote">Notification preferences, ID re-printing, and account recovery are handled at Student Affairs, Window 3.</p>
          </form>
        </div>
      </section>

      <p className="container footnote">Names, IDs, advisers, contact details, and standing labels are fictional. No official student record is shown.</p>
    </div>
  );
}
