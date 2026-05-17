# Gallery Images

Drop your real project photos in this folder.

**Recommended:**
- 1600×1200 (4:3) or 1600×1067 (3:2) source files
- JPG or WebP, under 400KB each (Next.js will further optimize at build)
- Use descriptive filenames: `glass-deck-southsurrey-01.jpg`, `wood-staircase-langley-03.jpg`

**Wiring images into the gallery:**

Open `components/GalleryGrid.tsx` and edit the `placeholders` array — or pass real items
via the `items={[...]}` prop:

```tsx
<GalleryGrid items={[
  { src: '/images/gallery/glass-deck-southsurrey-01.jpg', alt: 'Frameless glass deck — South Surrey', span: 'tall' },
  { src: '/images/gallery/wood-staircase-langley-03.jpg', alt: 'Custom wood staircase — Langley' },
  // ...
]} />
```

For the city-specific galleries, you can later make a `galleryByCity` map keyed off the city slug
and pass the right subset into each `/service-areas/[city]/page.tsx`.
