# Yogesh Dumane — Portfolio

A dark, mono/display-typed personal portfolio built with React + Vite, matching the
provided design reference: hero with orbit graphic, about, experience, selected
work, education, and contact sections.

## Stack
- React 18 + Vite
- Plain CSS (CSS variables for design tokens, one stylesheet per component)
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (labels/mono)

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Structure

```
src/
  components/
    Nav.jsx / Nav.css
    Hero.jsx / Hero.css
    GhostDivider.jsx / GhostDivider.css
    About.jsx / About.css
    Experience.jsx / Experience.css
    Work.jsx / Work.css
    Education.jsx / Education.css
    Contact.jsx / Contact.css
    Footer.jsx / Footer.css
  App.jsx
  index.css      # design tokens (colors, fonts, spacing) + global resets
```

## Customizing content

All copy currently lives directly in each component file as plain arrays/JSX
(e.g. `SKILLS` in `About.jsx`, `PROJECTS` in `Work.jsx`, `ROLES` in
`Experience.jsx`) — edit those to swap in real project links, resume URL, and
contact details. The contact form is currently front-end only (no submit
endpoint wired up yet).

## Design tokens

See `:root` in `src/index.css`:
- `--bg` / `--surface` — background layers
- `--lime` — accent color
- `--text` / `--text-dim` / `--text-dimmer` — text hierarchy
- `--font-display` / `--font-body` / `--font-mono` — type roles
