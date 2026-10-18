# Red Medici RM-01 launch site

Single-page product launch site. Vite + TypeScript + GSAP; builds to static files.

## Run

```bash
npm install
npm run dev
```

## Build and deploy

```bash
npm run build
```

Upload the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages). No server is needed.

## Edit content

- **Price, specs, close-up details:** `src/data.ts`. These figures are preliminary placeholders; replace them with final numbers. They are rendered into the HTML at build time (see `vite.config.ts`).
- **Copy:** `index.html`.
- **Waitlist:** `src/modules/waitlist.ts` validates in the browser only. Connect it to your email provider where the comment says `Send email to the waitlist provider here`.
- **Close-up focal points:** each detail's `x`, `y` (fraction of the photo) and `scale` in `src/data.ts`.

## Media

`public/media/` holds the optimized assets; `source/` keeps the originals (not deployed).
The video was re-encoded without its audio track, as H.264 (`hover.mp4`) and VP9 (`hover.webm`), plus a poster frame. To redo it with ffmpeg:

```bash
ffmpeg -i source/hover-original.mp4 -an -c:v libx264 -crf 23 -preset slow -pix_fmt yuv420p -movflags +faststart public/media/hover.mp4
```

## Design system

See `DESIGN.md`.
