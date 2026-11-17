# Student Information Portal

A responsive student information portal built with React, reusable JSX components, and React Router. The sample records are fictional and are included for classroom demonstration only.

## Features

- Client-side routes for **Home**, **Students**, **Courses**, and **About**.
- Reusable `Navbar`, `StudentCard`, and `CourseCard` components.
- Expandable student profiles and course details.
- Live student search and year filtering; course search and department filtering.
- Responsive layouts, semantic page structure, accessible labels, and a mobile navigation menu.
- A plain, semantic HTML-only copy at [`public/portal-html.html`](public/portal-html.html), served at `/portal-html.html`.
- Not-found route for unknown URLs.

## Run locally

```bash
npm install
npm run dev
```

Vite will print a local URL. To verify the production build:

```bash
npm run build
npm run preview
```

## Routes

| URL | Page |
| --- | --- |
| `/` | Home |
| `/students` | Searchable student directory |
| `/courses` | Filterable course catalog |
| `/about` | About the project |
| `/portal-html.html` | Static HTML-only demonstration |

## Project structure

```text
src/
├── components/
│   ├── CourseCard.jsx
│   ├── Icon.jsx
│   ├── Navbar.jsx
│   ├── SectionHeading.jsx
│   └── StudentCard.jsx
├── pages/
│   ├── About.jsx
│   ├── Courses.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   └── Students.jsx
├── data.js
├── App.jsx
└── main.jsx
```

## Git branches and submission

This project is prepared with two local branches:

- `no-style` — the routed React portal and reusable cards before the custom stylesheet is added.
- `main` — the completed styled portal, with responsive CSS and interactive page controls.

The standalone HTML-only file is kept in both branches. Review history with `git log --oneline --decorate --all` and switch branches with `git switch no-style` or `git switch main`.

Git identity was not supplied, so this workspace uses a clearly marked placeholder identity. Before submitting, set your own local author details:

```bash
git config user.name "Your Name"
git config user.email "you@example.com"
```

To connect the repository to your own GitHub repository and push both branches, create an empty repository on GitHub, then run:

```bash
git remote add origin https://github.com/YOUR-USERNAME/student-information-portal.git
git push -u origin main
git push -u origin no-style
```

Replace the sample URL with your actual repository URL. No remote or GitHub account was provided, so this workspace is not pushed to GitHub.
