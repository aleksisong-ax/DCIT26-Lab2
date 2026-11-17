// Student profiles are fictional. CEIT programs and subject-code examples below
// are transcribed from references supplied for this project; verify current details.
export const term = {
  label: '1st Semester · A.Y. 2026–2027',
  short: 'SIS',
};

export const degreeProgramGroups = [
  {
    id: 'engineering',
    title: 'Engineering programs',
    programs: [
      { name: 'BS Agricultural and Biosystems Engineering' },
      { name: 'BS Civil Engineering' },
      { name: 'BS Computer Engineering' },
      { name: 'BS Electrical Engineering' },
      { name: 'BS Electronics Engineering' },
      { name: 'BS Industrial Engineering' },
    ],
  },
  {
    id: 'computing-architecture',
    title: 'Computing & Architecture programs',
    programs: [
      { name: 'BS Computer Science' },
      { name: 'BS Information Technology' },
      { name: 'BS Architecture' },
    ],
  },
  {
    id: 'technology',
    title: 'Technology programs',
    programs: [
      {
        name: 'BS Industrial Technology',
        majors: ['Automotive Technology', 'Electrical Technology', 'Electronics Technology'],
      },
    ],
  },
];

export const subjectAreas = [
  {
    department: 'University & General Education',
    prefixes: ['CvSU', 'GNED', 'FITT', 'NSTP'],
    kind: 'Common university requirement',
  },
  {
    department: 'Information Technology & Computer Science',
    prefixes: ['DCIT', 'ITEC', 'COSC'],
    kind: 'Program subject example',
  },
  {
    department: 'Civil & General Engineering',
    prefixes: ['CENG', 'ENGS', 'MATH'],
    kind: 'Program subject example',
  },
  {
    department: 'Computer & Electronics Engineering',
    prefixes: ['CPEN', 'ECEN', 'EENG'],
    kind: 'Program subject example',
  },
];

const commonDepartment = subjectAreas[0].department;
const commonKind = subjectAreas[0].kind;
const commonSubjects = [
  { code: 'CvSU 101', title: 'Institutional Orientation', units: 1 },
  { code: 'GNED 01', title: 'Art Appreciation', units: 3 },
  { code: 'GNED 02', title: 'Ethics', units: 3 },
  { code: 'GNED 03', title: 'Mathematics in the Modern World', units: 3 },
  { code: 'GNED 04', title: 'Mga Babasahin Hinggil sa Kasaysayan ng Pilipinas', units: 3 },
  { code: 'GNED 05', title: 'Purposive Communication', units: 3 },
  { code: 'GNED 07', title: 'The Contemporary World', units: 3 },
  { code: 'GNED 10', title: 'Gender and Society', units: 3 },
  { code: 'GNED 11', title: 'Kontekstwalisadong Komunikasyon sa Filipino', units: 3 },
  {
    code: 'FITT 1–4',
    title: 'Movement Enhancement / Physical Activities Toward Health and Fitness',
    units: 2,
    unitNote: 'The supplied notes show 2 units for the grouped FITT sequence. Confirm how units are allocated across FITT 1–4.',
  },
  {
    code: 'NSTP 1–2',
    title: 'National Service Training Program 1 & 2',
    units: 3,
    unitNote: 'The supplied notes show 3 units for the grouped NSTP sequence. Confirm how units are allocated across NSTP 1–2.',
  },
].map((subject) => ({ ...subject, department: commonDepartment, kind: commonKind }));

const majorSubjectRows = [
  ['DCIT 21', 'Computer Programming 1', 'Information Technology & Computer Science'],
  ['DCIT 22', 'Computer Programming 2', 'Information Technology & Computer Science'],
  ['DCIT 23', 'Discrete Mathematics', 'Information Technology & Computer Science'],
  ['DCIT 55', 'Operating Systems', 'Information Technology & Computer Science'],
  ['ITEC 55', 'System Analysis and Design', 'Information Technology & Computer Science'],
  ['ITEC 60', 'Multimedia Systems', 'Information Technology & Computer Science'],
  ['ITEC 65', 'Advanced Database Management System', 'Information Technology & Computer Science'],
  ['MATH 13', 'Differential Equations', 'Civil & General Engineering'],
  ['ENGS 21', 'Statics of Rigid Bodies', 'Civil & General Engineering'],
  ['CENG 50', 'Fundamentals of Surveying', 'Civil & General Engineering'],
  ['CPEN 21', 'Programming Logic and Design', 'Computer & Electronics Engineering'],
  ['CPEN 50', 'Computer Hardware Fundamentals', 'Computer & Electronics Engineering'],
  ['CPEN 55', 'Data Structures and Algorithm Analysis', 'Computer & Electronics Engineering'],
  ['ECEN 60', 'Electronics I', 'Computer & Electronics Engineering'],
  ['EENG 60', 'Circuits I', 'Computer & Electronics Engineering'],
];

const majorSubjects = majorSubjectRows.map(([code, title, department]) => ({
  code,
  title,
  department,
  kind: 'Program subject example',
  referenceNote: 'This code and title are an example from the supplied notes, not a complete curriculum or current class schedule. Confirm details with the department.',
}));

export const courses = [...commonSubjects, ...majorSubjects];

export const referenceSources = [
  {
    label: 'CvSU CEIT Academic Programs (2018)',
    url: 'https://cvsu.edu.ph/2018/01/13/ceit-academic-programs/',
    note: 'Program list; the page is dated 2018.',
  },
  {
    label: 'Cavite City campus schedule page',
    url: 'https://cavitecity.cvsu.edu.ph/schedule/',
    note: 'Common-subject reference supplied for this project.',
  },
  {
    label: 'BSIT checklist on Studocu',
    url: 'https://www.studocu.com/ph/document/cavite-state-university/computer-programming-1/bs-information-technology/58139214',
    note: 'IT and computing subject-code examples.',
  },
  {
    label: 'BSCE checklist on Scribd',
    url: 'https://www.scribd.com/document/474149259/Checklist-BSCE-xlsx',
    note: 'Common and engineering subject-code examples.',
  },
];

export const students = [
  {
    id: 'STU-2601',
    name: 'Mira Santos',
    program: 'BS Computer Science',
    year: 3,
    yearLabel: '3rd year',
    email: 'mira.santos@example.edu',
    campus: 'Main',
    adviser: 'Prof. Camille Tan',
    units: 21,
    standing: 'Regular',
    bio: 'Peer mentor for the first-year programming lab. Capstone track: web accessibility tooling.',
    interests: ['UI design', 'React', 'Mentoring'],
  },
  {
    id: 'STU-2602',
    name: 'Liam Dela Cruz',
    program: 'BS Information Technology',
    year: 2,
    yearLabel: '2nd year',
    email: 'liam.delacruz@example.edu',
    campus: 'Main',
    adviser: 'Prof. Miguel Flores',
    units: 18,
    standing: 'Regular',
    bio: 'Student assistant at the registrar’s records desk, Tue–Thu afternoons.',
    interests: ['Databases', 'Figma', 'Volunteering'],
  },
  {
    id: 'STU-2603',
    name: 'Amara Villanueva',
    program: 'BS Computer Science',
    year: 4,
    yearLabel: '4th year',
    email: 'amara.villanueva@example.edu',
    campus: 'Annex B',
    adviser: 'Prof. Rafael Lim',
    units: 15,
    standing: 'Graduating',
    bio: 'Thesis: bias audits for small classification models. Expected to graduate June 2027.',
    interests: ['Machine learning', 'Research', 'Chess'],
  },
  {
    id: 'STU-2604',
    name: 'Enzo Reyes',
    program: 'BS Information Technology',
    year: 1,
    yearLabel: '1st year',
    email: 'enzo.reyes@example.edu',
    campus: 'Main',
    adviser: 'Prof. Ana Rivera',
    units: 24,
    standing: 'Regular',
    bio: 'Entered 1S 2026–27. Member of the robotics interest group.',
    interests: ['Python', 'Robotics', 'Basketball'],
  },
  {
    id: 'STU-2605',
    name: 'Bea Mercado',
    program: 'BS Information Technology',
    year: 3,
    yearLabel: '3rd year',
    email: 'bea.mercado@example.edu',
    campus: 'Annex A',
    adviser: 'Prof. Sofia Mendoza',
    units: 18,
    standing: 'Regular',
    bio: 'Editor of the department newsletter. Interested in service design and accessible forms.',
    interests: ['Service design', 'Accessibility', 'Writing'],
  },
  {
    id: 'STU-2606',
    name: 'Joaquin Flores',
    program: 'BS Computer Science',
    year: 2,
    yearLabel: '2nd year',
    email: 'joaquin.flores@example.edu',
    campus: 'Main',
    adviser: 'Prof. Rafael Lim',
    units: 21,
    standing: 'Regular',
    bio: 'Maintains the student-run timetable script used by the CS block sections.',
    interests: ['Algorithms', 'Open source', 'Music'],
  },
  {
    id: 'STU-2607',
    name: 'Chloe Navarro',
    program: 'BS Computer Science',
    year: 1,
    yearLabel: '1st year',
    email: 'chloe.navarro@example.edu',
    campus: 'Main',
    adviser: 'Prof. Ana Rivera',
    units: 24,
    standing: 'Regular',
    bio: 'Entered 1S 2026–27. Scholarship: Academic Merit (Tier 2).',
    interests: ['Game development', 'Illustration', 'Statistics'],
  },
  {
    id: 'STU-2608',
    name: 'Nico Bautista',
    program: 'BS Information Technology',
    year: 4,
    yearLabel: '4th year',
    email: 'nico.bautista@example.edu',
    campus: 'Annex B',
    adviser: 'Prof. Miguel Flores',
    units: 12,
    standing: 'Graduating',
    bio: 'On internship with the campus IT office; completing final 12 units.',
    interests: ['Networks', 'Cybersecurity', 'Photography'],
  },
];

/* ---- SIS demo data: the signed-in student, grades, schedule & enrollment ---- */
export const MAX_UNITS = 24;

export const portalStudent = {
  ...students[0],
  studentNo: '2023-10481',
  section: 'BSCS 3-2',
  mobile: '0917 214 8890',
  address: 'Blk 4 Lot 12, Dasmariñas, Cavite',
  guardian: 'Rosa Santos — 0918 552 0147',
  completedUnits: 86,
  curriculumUnits: 176,
  enrolledSince: '1st Sem, A.Y. 2023–2024',
};

export const scheduleCatalog = [
  { code: 'DCIT 21', title: 'Computer Programming 1', units: 3, dept: 'Computing', days: ['Mon', 'Wed'], time: '7:00 – 10:00 AM', room: 'ComLab 3', instructor: 'Prof. Miguel Flores', slots: 38 },
  { code: 'DCIT 22', title: 'Computer Programming 2', units: 3, dept: 'Computing', days: ['Tue', 'Thu'], time: '10:00 AM – 1:00 PM', room: 'ComLab 2', instructor: 'Prof. Ana Rivera', slots: 35 },
  { code: 'DCIT 23', title: 'Discrete Mathematics', units: 3, dept: 'Computing', days: ['Mon', 'Thu'], time: '1:00 – 2:30 PM', room: 'Room 204', instructor: 'Dr. Josefa Cruz', slots: 40 },
  { code: 'DCIT 55', title: 'Operating Systems', units: 3, dept: 'Computing', days: ['Wed', 'Fri'], time: '9:00 AM – 12:00 NN', room: 'ComLab 1', instructor: 'Prof. Rafael Lim', slots: 32 },
  { code: 'ITEC 55', title: 'System Analysis and Design', units: 3, dept: 'Computing', days: ['Tue', 'Fri'], time: '1:00 – 4:00 PM', room: 'Room 305', instructor: 'Prof. Camille Tan', slots: 36 },
  { code: 'ITEC 60', title: 'Multimedia Systems', units: 3, dept: 'Computing', days: ['Mon', 'Wed'], time: '4:00 – 7:00 PM', room: 'ComLab 4', instructor: 'Prof. Miguel Flores', slots: 30 },
  { code: 'ITEC 65', title: 'Advanced Database Management System', units: 3, dept: 'Computing', days: ['Thu'], time: '7:00 AM – 12:00 NN', room: 'ComLab 2', instructor: 'Dr. Josefa Cruz', slots: 28 },
  { code: 'COSC 55', title: 'Data Structures and Algorithms', units: 3, dept: 'Computing', days: ['Tue', 'Thu'], time: '7:30 – 10:30 AM', room: 'ComLab 3', instructor: 'Prof. Camille Tan', slots: 34 },
  { code: 'GNED 03', title: 'Mathematics in the Modern World', units: 3, dept: 'General Education', days: ['Mon', 'Fri'], time: '10:30 AM – 12:00 NN', room: 'Room 112', instructor: 'Prof. Ana Rivera', slots: 45 },
  { code: 'GNED 05', title: 'Purposive Communication', units: 3, dept: 'General Education', days: ['Wed'], time: '1:00 – 4:00 PM', room: 'Room 118', instructor: 'Prof. Marco Dela Cruz', slots: 45 },
  { code: 'GNED 07', title: 'The Contemporary World', units: 3, dept: 'General Education', days: ['Tue'], time: '4:00 – 7:00 PM', room: 'Room 120', instructor: 'Dr. Liza Santos', slots: 42 },
  { code: 'MATH 13', title: 'Differential Equations', units: 3, dept: 'Engineering', days: ['Mon', 'Wed', 'Fri'], time: '8:00 – 9:00 AM', room: 'Engg 201', instructor: 'Engr. Daniel Go', slots: 40 },
  { code: 'ENGS 21', title: 'Statics of Rigid Bodies', units: 3, dept: 'Engineering', days: ['Tue', 'Thu'], time: '9:00 – 10:30 AM', room: 'Engg 204', instructor: 'Engr. Daniel Go', slots: 38 },
  { code: 'CENG 50', title: 'Fundamentals of Surveying', units: 3, dept: 'Engineering', days: ['Sat'], time: '7:00 AM – 12:00 NN', room: 'Field / Engg 102', instructor: 'Engr. Ana Rivera', slots: 30 },
  { code: 'CPEN 55', title: 'Data Structures and Algorithm Analysis', units: 3, dept: 'Engineering', days: ['Wed', 'Fri'], time: '10:00 AM – 1:00 PM', room: 'ComLab 5', instructor: 'Engr. Rafael Lim', slots: 30 },
  { code: 'ECEN 60', title: 'Electronics I', units: 4, dept: 'Engineering', days: ['Tue', 'Thu'], time: '1:00 – 4:30 PM', room: 'ECE Lab', instructor: 'Engr. Ana Rivera', slots: 26 },
  { code: 'EENG 60', title: 'Circuits I', units: 4, dept: 'Engineering', days: ['Mon', 'Thu'], time: '2:30 – 6:00 PM', room: 'EE Lab', instructor: 'Engr. Daniel Go', slots: 26 },
  { code: 'NSTP 1', title: 'National Service Training Program 1', units: 3, dept: 'General Education', days: ['Sat'], time: '1:00 – 4:00 PM', room: 'Covered Court', instructor: 'NSTP Coordinator', slots: 60 },
];

export const defaultEnrolledCodes = ['DCIT 55', 'ITEC 55', 'ITEC 65', 'COSC 55', 'GNED 07', 'DCIT 23', 'ITEC 60'];

const GRADE_STEPS = [1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 5.0];
const toRating = (mid, fin) => {
  const raw = (mid + fin) / 2;
  return GRADE_STEPS.reduce((best, step) => (Math.abs(step - raw) < Math.abs(best - raw) ? step : best), GRADE_STEPS[0]);
};
const gradeRows = (rows) => rows.map(([code, title, units, mid, fin]) => {
  const rating = toRating(mid, fin);
  return { code, title, units, mid, fin, rating, passed: rating <= 3.0 };
});

export const gradeBook = [
  { sem: '1st Sem · A.Y. 2026–2027', label: 'Current semester', rows: gradeRows([
    ['ITEC 65', 'Advanced Database Management System', 3, 1.25, 1.5],
    ['DCIT 55', 'Operating Systems', 3, 1.5, 1.75],
    ['COSC 55', 'Data Structures and Algorithms', 3, 1.75, 1.5],
    ['ITEC 55', 'System Analysis and Design', 3, 1.25, 1.25],
    ['ITEC 60', 'Multimedia Systems', 3, 2.0, 1.75],
    ['DCIT 23', 'Discrete Mathematics', 3, 1.75, 2.0],
    ['GNED 07', 'The Contemporary World', 3, 1.5, 1.25],
  ]) },
  { sem: '2nd Sem · A.Y. 2025–2026', label: 'Previous semester', rows: gradeRows([
    ['DCIT 22', 'Computer Programming 2', 3, 1.5, 1.25],
    ['ITEC 50', 'Web Systems and Technologies', 3, 1.25, 1.5],
    ['GNED 05', 'Purposive Communication', 3, 1.75, 1.5],
    ['GNED 03', 'Mathematics in the Modern World', 3, 2.0, 1.75],
    ['FITT 2', 'Physical Activities Toward Health and Fitness 2', 2, 1.25, 1.25],
    ['NSTP 2', 'National Service Training Program 2', 3, 1.5, 1.5],
    ['DCIT 24', 'Information Management', 3, 1.75, 1.75],
  ]) },
  { sem: '1st Sem · A.Y. 2025–2026', label: 'Earlier semester', rows: gradeRows([
    ['DCIT 21', 'Computer Programming 1', 3, 1.75, 1.5],
    ['GNED 01', 'Art Appreciation', 3, 1.5, 1.75],
    ['GNED 02', 'Ethics', 3, 1.25, 1.5],
    ['CvSU 101', 'Institutional Orientation', 1, 1.0, 1.0],
    ['FITT 1', 'Movement Enhancement', 2, 1.5, 1.25],
    ['NSTP 1', 'National Service Training Program 1', 3, 1.75, 1.5],
    ['GNED 10', 'Gender and Society', 3, 2.0, 2.25],
  ]) },
];

export const gwaOf = (rows) => {
  const units = rows.reduce((sum, row) => sum + row.units, 0);
  return units ? rows.reduce((sum, row) => sum + row.rating * row.units, 0) / units : 0;
};

export const announcements = [
  { title: 'Enrollment for 1st Sem 2026–2027 is now open', body: 'Online subject selection runs until August 15, 2026. Secure your assessment before slots close.', when: 'Registrar · Aug 1' },
  { title: 'Midterm grade encoding deadline', body: 'Faculty may encode midterm grades until October 3. Grades appear here once posted by your instructor.', when: 'CEIT Dean’s Office' },
  { title: 'Student ID re-printing schedule', body: 'Bring your Certificate of Registration at the ID section, Window 3, every Tuesday and Thursday.', when: 'Student Affairs' },
  { title: 'Library clearance for graduating students', body: 'Settle library accountabilities early to avoid enrollment holds next term.', when: 'University Library' },
];
