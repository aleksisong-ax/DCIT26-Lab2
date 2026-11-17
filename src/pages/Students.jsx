import { useRef, useState } from 'react';
import StudentCard from '../components/StudentCard.jsx';
import { portalStudent } from '../data.js';

const initials = (name) => name.split(' ').map((word) => word[0]).slice(0, 2).join('').toUpperCase();

// The /students route is the current student's own profile, never a directory.
export default function Students() {
  const [profile, setProfile] = useState({
    name: portalStudent.name,
    email: portalStudent.email,
    mobile: portalStudent.mobile,
    address: portalStudent.address,
    guardian: portalStudent.guardian,
  });
  const [photo, setPhoto] = useState(null);
  const [signature, setSignature] = useState(null);
  const [saved, setSaved] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [pwMessage, setPwMessage] = useState('');
  const canvasRef = useRef(null);
  const drawing = useRef(false);

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
  const drawStart = (event) => {
    drawing.current = true;
    const ctx = canvasRef.current.getContext('2d');
    const point = canvasPos(event);
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
    event.preventDefault();
  };
  const drawMove = (event) => {
    if (!drawing.current) return;
    const ctx = canvasRef.current.getContext('2d');
    const point = canvasPos(event);
    ctx.lineWidth = 2.2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#17241b';
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
    event.preventDefault();
  };
  const drawEnd = () => { drawing.current = false; };
  const saveProfile = (event) => {
    event.preventDefault();
    if (canvasRef.current) setSignature(canvasRef.current.toDataURL('image/png'));
    setSaved(`Profile saved for ${profile.name}. This front-end demo keeps the change in this page only.`);
  };
  const changePassword = (event) => {
    event.preventDefault();
    setPwMessage(password.length >= 8 && password === confirm
      ? 'Password check passed in this demo only. No password was stored or sent.'
      : 'Passwords must match and be at least 8 characters.');
    if (password.length >= 8 && password === confirm) { setPassword(''); setConfirm(''); }
  };
  const pwScore = [password.length >= 8, /[A-Z]/.test(password) && /[a-z]/.test(password), /\d/.test(password), /[^A-Za-z0-9]/.test(password)].filter(Boolean).length;
  const displayStudent = { ...portalStudent, ...profile };

  return (
    <div className="page">
      <header className="container page-head">
        <p className="kicker">SIS / my records</p>
        <h1>My student profile</h1>
        <p className="page-standfirst">View and manage the personal information attached to this demo student account. Grades, schedule, and enrollment details elsewhere in the portal belong to this same profile.</p>
      </header>

      <aside className="container" aria-label="Privacy scope">
        <div className="sis-panel">
          <p className="kicker">Single-student demo</p>
          <p>No student directory or classmates’ records are included. This front-end-only project has no real sign-in or server-side access controls; do not enter real student information.</p>
        </div>
      </aside>

      <section className="container section-block" aria-labelledby="my-record-heading">
        <p className="kicker">My student record</p>
        <h2 className="sis-profile-title" id="my-record-heading">{profile.name} · {portalStudent.studentNo}</h2>
        <div className="ledger">
          <StudentCard student={displayStudent} />
        </div>
      </section>

      <section className="container section-block" aria-labelledby="profile-management-heading">
        <p className="kicker">Account &amp; profile management</p>
        <h2 className="sis-profile-title" id="profile-management-heading">Manage my account</h2>
        <div className="sis-profile-grid">
          <article className="sis-idcard" aria-label="Student ID card preview">
            <div className="sis-idcard-top"><span>STUDENT INFORMATION PORTAL</span><strong>Student ID Card · Demo</strong></div>
            <div className="sis-idcard-body">
              <span className="sis-avatar">{photo ? <img src={photo} alt="Your uploaded student ID" /> : initials(profile.name)}</span>
              <dl>
                <div><dt>Name</dt><dd>{profile.name}</dd></div>
                <div><dt>Student no.</dt><dd>{portalStudent.studentNo}</dd></div>
                <div><dt>Program</dt><dd>{portalStudent.program} · {portalStudent.section}</dd></div>
                <div><dt>Valid for</dt><dd>1st Sem · A.Y. 2026–2027</dd></div>
              </dl>
              {signature && <img className="sis-sig-preview" src={signature} alt="Your saved e-signature" />}
            </div>
          </article>

          <form className="sis-panel sis-form" onSubmit={saveProfile}>
            <label>Full name<input type="text" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} required /></label>
            <label>School email<input type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} required /></label>
            <label>Mobile number<input type="tel" value={profile.mobile} onChange={(e) => setProfile({ ...profile, mobile: e.target.value })} /></label>
            <label>Home address<textarea rows="2" value={profile.address} onChange={(e) => setProfile({ ...profile, address: e.target.value })} /></label>
            <label>Guardian / emergency contact<input type="text" value={profile.guardian} onChange={(e) => setProfile({ ...profile, guardian: e.target.value })} /></label>
            <label>Student ID photo<input type="file" accept="image/*" onChange={onPhoto} /><small>Demo only — this preview stays in this browser page.</small></label>
            <label>E-signature
              <canvas ref={canvasRef} className="sis-sig-pad" width="520" height="180"
                onMouseDown={drawStart} onMouseMove={drawMove} onMouseUp={drawEnd} onMouseLeave={drawEnd}
                onTouchStart={drawStart} onTouchMove={drawMove} onTouchEnd={drawEnd} />
              <small>Draw your signature, then save this page’s demo profile.</small>
            </label>
            <button className="button" type="submit">Save my profile</button>
            {saved && <p className="sis-notice" role="status">{saved}</p>}
          </form>

          <form className="sis-panel sis-form" onSubmit={changePassword}>
            <p className="kicker">Account security · demo only</p>
            <h2>Change password</h2>
            <label>New password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength="8" placeholder="At least 8 characters" /></label>
            <div className="sis-strength"><i style={{ width: `${pwScore * 25}%` }} /></div>
            <small>{['Too weak', 'Fair', 'Good', 'Strong'][Math.max(0, pwScore - 1)] || 'Use letters, numbers, and symbols.'}</small>
            <label>Confirm password<input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} /></label>
            <button className="button" type="submit">Check password</button>
            {pwMessage && <p className="sis-notice" role="status">{pwMessage}</p>}
            <p className="footnote">No account service is connected; this control does not change a real password.</p>
          </form>
        </div>
      </section>

      <p className="container footnote">All personal and academic details are fictional. This portal is a school project, not an official student system.</p>
    </div>
  );
}
