# Gallery Images

This folder contains **56 real project photos** named `project-01.jpg` through `project-56.jpg`.
All photos are wired into the site automatically via `lib/gallery.ts` — no further setup needed.

## Where they show up

- `/gallery` — full gallery, all 56 photos
- `/` (landing page) — 12-photo teaser in the "Recent work" section
- `/service-areas/<city>` — 12-photo subset per city, seeded by the city slug
  so each city page shows a different deterministic mix (good for SEO uniqueness)

## To add more photos

1. Drop a new file in this folder named `project-NN.jpg` (next sequential number)
2. Open `lib/gallery.ts` and bump the `TOTAL` constant
3. Commit and push — Vercel rebuilds and your new photos appear

## To categorize photos (optional future work)

If you want photos tagged by material (glass/wood/metal) or city, edit
`lib/gallery.ts` to add `category` or `city` fields on each item, then filter
in the relevant pages.
