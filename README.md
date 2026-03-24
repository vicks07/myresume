# VikramT Portfolio

Astro-based personal portfolio designed for GitHub Pages and a custom domain at `vikramt.com`.

## What is in the repo

- `src/pages/index.astro`: homepage
- `src/data/site.ts`: profile, skills, experience, and case study content
- `src/styles/global.css`: global visual system
- `.github/workflows/deploy.yml`: GitHub Pages deployment workflow
- `docs/`: planning and content blueprints

## Local development

```sh
npm install
npm run dev
```

Open `http://localhost:4321`.

## Build

```sh
npm run build
```

The production output is generated in `dist/`.

## GitHub Pages

This repo is set up for GitHub Pages deployment through GitHub Actions.

1. Push the repo to GitHub.
2. In GitHub, open `Settings -> Pages`.
3. Set the source to `GitHub Actions`.
4. Push to `main` to trigger deployment.

The `public/CNAME` file is already configured for `vikramt.com`.

## Next recommended changes

- replace placeholder social links in `src/data/site.ts`
- add your latest resume PDF to `public/`
- rewrite the experience bullets with stronger measurable outcomes
- add screenshots or deeper project pages for the strongest case studies
