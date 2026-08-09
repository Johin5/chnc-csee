# ConvergenSEE website

The live marketing site for ConvergenSEE (Mumbai digital marketing agency).
This folder is the only active one — see "Sibling folders" below before
assuming otherwise.

Vite 8 + React 19 SPA. No TypeScript, no test suite, no CSS framework.

## Running it

There are **no npm scripts defined** — use Vite directly:

- `npx vite` — dev server
- `npx vite build` — production build into `dist/`

Deploy is a commit and push: `git push origin main` on
https://github.com/Johin5/chnc-csee.

## Layout

- `src/App.jsx` — the home page's sections *and* the router. Everything under
  `Site()` at the bottom of the file.
- `src/<Name>Page.jsx` — one file per page (About, Solutions, CaseStudies,
  Mahindra, Team, Blog, BlogRead, Careers, Job, Work, Socials).
- `src/routes.js` — **the only file that knows about URLs.** Pages navigate by
  key (`onNavigate('about')`) and this maps keys to paths. Change a path here
  and every nav link, footer link and CTA follows.
- `src/Footer.jsx` — the site footer, used by every page. Nine hand-copied
  copies used to exist and had drifted apart; do not inline a footer into a
  page again.
- `src/careersTeams.js` — teams and their job openings. Adding an opening here
  gives it a page at `/careers/<slugified-title>` automatically.
- `src/teamRoster.js` — the ~40-person roster. Portraits are 640×880 crops in
  `public/team/`.
- `src/micro.css` — the few global classes (`.btn-outline`, `.footer-link`,
  `.social-icon`, hover states). Everything else is inline style objects.

## Conventions

- Styling is inline `style={{}}` objects, not classes. Colours are re-declared
  per file as `G` (#34cc32 green), `DARK` (#000718), `CARD` (#0f1520),
  `DIM` (#666a74), `BORDER` (rgba(255,255,255,0.1)).
- Boxes/panels are `background: transparent` with a 1–2px `BORDER` outline, not
  a filled `CARD` background.
- Pages take an `onNavigate` prop and call it with page keys, never paths.
- Deep links need an SPA fallback on the host — `vercel.json` and
  `public/_redirects` cover Vercel and Netlify. Anywhere else needs its own.

## Known gaps (pre-launch checklist)

1. No form submits anywhere — the home contact form and the CV upload in
   `JoinSection.jsx` both discard their input.
2. The green "📱 Preview screen sizes" dev tool in `App.jsx` renders in
   production. Remove before launch.
3. Every route serves the title `ConvergenSEE — Dark Home`. No per-page
   titles, description, OG tags, favicon, `robots.txt` or sitemap.
4. Placeholder copy: all blog posts, the Work page hero, and the team blurbs
   and groupings in `careersTeams.js` (self-flagged as unapproved).
5. No host connected yet.

## Sibling folders — none of these are the site

Everything else under `/Users/apple/CC CSEE/` is dead, untouched since March
2026: `csee-react` (the old csnc-v2.vercel.app deploy), `csee-react-2009`,
`CHNC-SCroll`, `framer`, `backups`, `sidebar icons`, and
`techdata-convergensee` (July 2026). `/Users/apple/CSEE Website/
reimagine-everything` is a separate Lovable app that also renders CHNC.
