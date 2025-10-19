# random_quote_generation — Vite + React

Lightweight Vite + React starter for a random quote generator app.

Overview
--------

This repository contains a simple React + Vite application that displays random quotes. It is bootstrapped with Vite and includes ESLint configuration and a multi-stage Dockerfile for building and previewing production bundles.

Quick links
-----------

- Source: `src/` (React components and entry)
- Entry point: `src/main.jsx` -> `src/App.jsx`
- HTML: `index.html`
- Dockerfile: multi-stage build which serves `dist/` using `vite preview` on port 4173

Requirements
------------

- Node.js v18+ (recommended)
- npm (bundled with Node)
- Docker (optional, for container builds)

Development — quick start
-------------------------

1. Install dependencies

```powershell
npm install
```

2. Start the dev server (HMR)

```powershell
npm run dev
```

Open the address printed by Vite (usually http://localhost:5173). `package.json` runs Vite with `--host` so it binds to the network interface.

Scripts (from package.json)
---------------------------

- `dev` — start Vite dev server
- `build` — build production assets into `dist/`
- `preview` / `start` — serve built `dist/` using `vite preview`
- `lint` — run ESLint

Build & preview (production)
----------------------------

```powershell
npm install
npm run build
npm run preview
```

This generates `dist/` and serves it locally for inspection.

Docker (build and run)
----------------------

The `Dockerfile` performs a multi-stage build:

- Stage 1: build assets with Node and produce `dist/`
- Stage 2: copy `dist/` into fresh Node image and run `npx vite preview` on port 4173

Build and run the container:

```powershell
docker build -t random-quote-app .
docker run --rm -p 4173:4173 random-quote-app
```

Then open http://localhost:4173.

Note: for production deployments consider serving `dist/` using a static server like nginx for better performance.

Project structure
-----------------

- `index.html` — HTML entry that loads `src/main.jsx`
- `src/` — React source
	- `main.jsx` — app bootstrap
	- `App.jsx` — main component (renders `Quote` component)
	- `Quote.jsx` — example component used by the app
	- `index.css`, `App.css` — styles
- `package.json` — scripts and dependencies
- `Dockerfile` — multi-stage build for container
- `vite.config.js`, `eslint.config.js` — tooling configuration

Tailwind
--------

Tailwind is listed as a dependency in `package.json`. If you intend to use Tailwind, ensure you have `tailwind.config.js` and `postcss.config.js` present and import Tailwind directives in your CSS (`@tailwind base; @tailwind components; @tailwind utilities;`).

Linting
-------

Run ESLint:

```powershell
npm run lint
```

Troubleshooting
---------------

- If the dev server won't start: ensure Node.js is updated and the port is free.
- If Docker build fails: verify Docker daemon is running and you can pull base images.
- If dependency installation fails: remove `node_modules` and `package-lock.json`, then run `npm install` again.

Contributing
------------

Contributions welcome:

1. Fork the repo
2. Create a feature branch
3. Test locally (`npm run dev` / `npm run build`)
4. Open a pull request describing your changes

License
-------

No license file is included. Add a license if you plan to publish or share.

