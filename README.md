# Dilsav landing page

Single-page marketing site for Dilsav, built with [Astro](https://astro.build) and Tailwind CSS v4. The build is fully static (`dist/`), meant to be served from S3 + CloudFront.

## Getting started

Requires Node 22.23+.

```sh
npm install
npm run dev      # http://localhost:4321
npm run check    # type-check .astro and .ts files
npm run build    # static output in dist/
npm run preview  # serve dist/ locally
```

## Structure

```
src/
  data/site.ts        All page copy: nav, hero, capabilities, work, about, contact
  layouts/Layout.astro  <head>, fonts, global styles
  pages/index.astro   Section order
  components/         One component per section, plus small shared pieces
  assets/images/      Background photos (optimized to AVIF/WebP at build time)
  styles/global.css   Tailwind theme tokens (colors, fonts, tracking)
```

Nav links are in-page anchors: `#services`, `#work`, `#about`, `#contact`.

## Placeholders to replace

| What | Where | How |
| --- | --- | --- |
| Logo | `src/components/Logo.astro`, `public/favicon.svg` | Replace the text wordmark with the logo SVG |
| Video | `approach.video.src` in `src/data/site.ts` | Set to the hosted MP4 URL |
| Work, About copy | `src/data/site.ts` | Entries marked `PLACEHOLDER` |
| Fonts | `src/layouts/Layout.astro`, `src/styles/global.css` | Currently Inter Tight + Inter via Fontsource |

## Images

- `hero.jpg`: hero background. Overwrite to change it; higher resolution (≥2400px wide) looks sharper on large screens.
- `approach.jpg`: the "Our approach" scene, with the four glass cards painted into it. On desktop the card labels are laid over the image at the positions in `capabilities[].area` (`src/data/site.ts`); on mobile the cards in `capabilities/*.jpg` (cropped from the same image) are shown in a swipe row. If the scene image changes, re-measure the card areas and re-crop the four card images.

## Contact form

Where submissions go (inbox or CRM) is still undecided. The form POSTs JSON (`name`, `email`, `company`, `message`) to `PUBLIC_CONTACT_ENDPOINT`; copy `.env.example` to `.env` and set it. Until then, submitting shows a "not connected yet" message.
