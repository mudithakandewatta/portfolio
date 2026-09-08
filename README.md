# Portfolio Site

A frontend-only personal portfolio built with **React + TypeScript + Vite + Tailwind CSS v4** and **Framer Motion** for animation. No backend — everything is static content you edit directly.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Customize

All the content you'll want to replace lives in two places:

### 1. Profile, bio, skills, socials
Edit [`src/data/profile.ts`](src/data/profile.ts) — name, role, tagline, bio, email, GitHub/LinkedIn links, resume URL, and the skills list.

### 2. Projects
Edit [`src/data/projects.ts`](src/data/projects.ts). Each entry has `title`, `description`, `tags`, `github`, `demo`, and an `image` — the image field is just a filename with no extension.

Replace the placeholder screenshots in [`src/assets/projects/`](src/assets/projects/) with real ones. Drop in a file named to match the `image` slug (e.g. `healthlink.png`, `healthlink.jpg`, or `healthlink.jpeg` all work) — extension doesn't matter, it's resolved automatically.

### 3. AIESEC / experience timeline
Edit [`src/data/experience.ts`](src/data/experience.ts). Each entry has `role`, `organization`, `period`, `description`, `bullets`, and an `image` slug, resolved the same way from [`src/assets/experience/`](src/assets/experience/).

### 4. Achievements carousel (currently demo Dean's List images)
Drop image files (`.png`, `.jpg`, `.jpeg`, `.webp`, `.svg`) into [`src/assets/achievements/`](src/assets/achievements/) — they're picked up automatically and shown in the auto-scrolling carousel, no code changes needed. Reload the dev server (or rebuild) after adding files. Filenames are sorted alphabetically, so prefix with numbers (`1-`, `2-`, …) to control order.

### 5. Contact form
The form in [`Contact.tsx`](src/components/Contact.tsx) opens the visitor's email client via a `mailto:` link addressed to `profile.email` (no backend/email service needed). Update the address in `src/data/profile.ts`.

### 6. Site title / favicon
- Title & meta description: `index.html`
- Favicon: `public/favicon-32.png`, `public/favicon-512.png`, `public/apple-touch-icon.png`

### 7. Resume
Drop a `resume.pdf` into `public/` — it's already linked from `profile.resumeUrl`.

## Build for production

```bash
npm run build
```

Output goes to `dist/` — deployable to any static host (Vercel, Netlify, GitHub Pages, etc.).
