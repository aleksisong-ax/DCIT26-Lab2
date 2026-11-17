// Student profiles are fictional. CEIT programs and subject-code examples below
// are transcribed from references supplied for this project; verify current details.
export const term = {
  label: 'CEIT degree and subject reference',
  short: 'CEIT',
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
