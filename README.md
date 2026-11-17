# Student Information Portal (SIS)

A centralized, web-based **Student Information Portal** where a student can view and manage their academic records online. Built with React, reusable JSX components, and React Router. This demo includes one fictional student profile and that student’s grades and schedule only.

**Signed-in demo student:** Mira Santos · 2023-10481 · BS Computer Science · BSCS 3-2

## Key features

- **Grades & Academic Records** — midterm and final grades per semester, automatic GWA computation, transcript-style summary, and evaluation remarks (PH 1.00–5.00 scale).
- **Class Schedules** — weekly timetable and subject table with days, time, room assignments, and instructor details.
- **Enrollment & Registration** — online subject selection with a live 24-unit counter, 5-step registration status, and add/drop requests with an adviser-approval log.
- **Account & Profile Management** — editable personal information, password change with strength meter, student ID photo upload, and a draw-your-own e-signature pad.
- **My Profile (`/students`)** — shows only the single demo student’s own record and profile controls; no student directory or classmates’ records are included.
- CEIT subject-code catalog and degree-program reference with source links.
- Responsive layout, accessible labels, mobile navigation, and a not-found route. No image assets are used (icons are inline SVG, avatars are initials).

## Privacy and demo limitations

This is a **front-end-only demonstration**, not a secure student system. It has no real sign-in, backend, or server-side authorization. The source and browser can be inspected, so never add real student information. A production portal must authenticate each student and authorize access to records on the server.

## Run locally

```bash
npm install
npm run dev
```

To verify the production build:

```bash
npm run build
npm run preview
```

## Routes

| URL | Page |
| --- | --- |
| `/` | Dashboard — SIS home for the signed-in student (grades, schedule, enrollment status, announcements) |
| `/students` | My Profile & Account for the one fictional student (not a directory) |
| `/courses` | Class Schedule · Enrollment & Add/Drop · Subject-Code Catalog |
| `/about` | About the SIS, rubric compliance, CEIT degree programs & sources |
| `/portal-html.html` | Static HTML-only version (no React, no CSS, no JavaScript) |

## Project structure

```text
src/
├── components/
│   ├── CourseCard.jsx     # reusable subject / offering card (add-drop aware)
│   ├── GradeTable.jsx     # reusable grades + GWA table
│   ├── Icon.jsx
│   ├── Navbar.jsx
│   ├── ScheduleGrid.jsx   # reusable weekly timetable
│   ├── SectionHeading.jsx
│   └── StudentCard.jsx
├── pages/
│   ├── About.jsx
│   ├── Courses.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   └── Students.jsx
├── data.js                # one fictional student, their grades, schedule catalog, CEIT reference
├── App.jsx
└── main.jsx
public/
└── portal-html.html       # HTML-only version, maintained in both branches
```

## Git: identity, branches, and GitHub submission

This project is a local Git repository with two branches:

- `main` — the completed, styled SIS portal (this branch).
- `no-style` — the same portal content and routing **without** the stylesheet (`src/styles.css` is not included there).

The HTML-only version (`public/portal-html.html`) is maintained in both branches. Review history with `git log --oneline --decorate --all`.

**Before submitting, set YOUR Git identity** (the workspace used a placeholder):

```bash
git config user.name "Your Full Name"
git config user.email "you@example.com"
```

**Connect to GitHub and push both branches** — create an empty repository on GitHub first, then:

```bash
git remote add origin https://github.com/YOUR-USERNAME/student-information-portal.git
git push -u origin main
git push -u origin no-style
```

Replace the sample URL with your actual repository URL, then submit that repository link as the final output. No GitHub account or remote was provided in this workspace, so the push must be done with your own account.
