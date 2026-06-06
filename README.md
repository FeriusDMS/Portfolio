# Portfolio

Personal portfolio built with Angular 21. The site is bilingual, responsive, and organized around a home page plus detailed pages for projects, studies, companies, and contact information.

## Features

- Bilingual interface in French and English.
- Main sections on the home page: hero, about, projects, skills, and contact.
- Detail pages for projects, schools, companies, and about content.
- Share modal in the header for copying or sharing the site link.
- Patch notes panel that summarizes the latest changes deployed to `main`.
- SSR-ready Angular app with an Express server entry point.

## Tech Stack

- Angular 21
- TypeScript
- SCSS
- Angular SSR
- Express

## Routes

- `/` home page
- `/about`
- `/about/me`
- `/schools/:id`
- `/companies/:id`
- `/projects`
- `/projects/:id`
- `/skills`
- `/contact`

## Deployment

The app is configured with a base href of `/Portfolio/`, which matches the GitHub Pages deployment path.
