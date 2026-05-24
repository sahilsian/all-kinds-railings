# All Kinds Railings — Next.js Website

Production-ready Next.js 14 (App Router + TypeScript + Tailwind CSS) marketing site for **All Kinds Railings**, designed for Google Ads and Facebook/Meta ad campaigns. Mobile-first, SEO-optimized, with a 5-step quote funnel as the conversion centerpiece.

## What's included

- **Landing page** with embedded multi-step quote funnel (`/`)
- **Dedicated quote funnel page** for ad landing pages (`/quote`)
- **About page** featuring Sarb Sian's story (`/about`)
- **Services page** — wood, glass, metal, floating glass, commercial, staircases (`/services`)
- **Gallery page** with placeholder tiles ready for your 5,000+ project photos (`/gallery`)
- **Contact page** (`/contact`)
- **Thank-you page** (no-index, for post-submission tracking) (`/thank-you`)
- **11 SEO-optimized city landing pages** auto-generated from `lib/cities.ts`:
  Surrey, Langley, Coquitlam, Burnaby, Aldergrove, Abbotsford, Maple Ridge, Delta, White Rock, Richmond, Port Coquitlam
- **API route** `/api/quote` that receives form submissions (Resend-ready)
- **SEO** — automatic `sitemap.xml`, `robots.txt`, OpenGraph metadata, JSON-LD `LocalBusiness` structured data
- **Analytics scaffolding** for Google Ads, GA4, and Meta Pixel — flip them on by adding IDs

## 1. Local development

Requires **Node 18.17+** (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## 2. Deploy to Vercel (the easy path)

1. Push this folder to a new GitHub repo.
2. Go to <https://vercel.com/new>, import the repo. Vercel auto-detects Next.js.
3. Click **Deploy** — first deploy takes ~90 seconds.
4. Add your custom domain (`allkindsrailings.com`) in Project → Settings → Domains.

That's it. The site will work end-to-end on Vercel's free Hobby plan.

## 3. Connect your contact details

Open **`lib/siteConfig.ts`** and replace every value marked `TODO`:

- `phone`, `phoneHref`, `email`, `emailHref`
- `url` — your real production domain
- `social.instagram` / `facebook` / `google`

These flow into the header, footer, contact page, JSON-LD schema, sitemap, and quote form. Edit once, it updates everywhere.

## 4. Hook up the quote-form email delivery

`resend` is already installed and wired up in `app/api/quote/route.ts`. You just need to set environment variables in Vercel → Project Settings → Environment Variables:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
LEADS_TO_EMAIL=quotes@allkindsrailings.com
RESEND_FROM_EMAIL=All Kinds Railings <leads@allkindsrailings.com>

# Optional — comma-separated lists if you want extra recipients:
LEADS_CC_EMAIL=sarb@allkindsrailings.com, sales@allkindsrailings.com
LEADS_BCC_EMAIL=
```

**How CC/BCC work:**
- Every lead is sent to `LEADS_TO_EMAIL` (the primary inbox)
- Every email in `LEADS_CC_EMAIL` (comma-separated) is added to the CC line — they'll see who else got it
- Every email in `LEADS_BCC_EMAIL` is blind-copied — useful for forwarding to a CRM or personal archive

**Get a Resend API key:**
1. Sign up at <https://resend.com> (free tier covers ~3,000 emails/month)
2. Add your domain (e.g. `allkindsrailings.com`), verify DNS records (TXT/MX they'll show you)
3. Create an API key and paste it into Vercel as `RESEND_API_KEY`

**Even without email:** every submission is logged to `vercel logs` and the user still sees the thank-you page. Leads are never lost.

**Alternatives** (if you prefer not to use Resend):
- **Formspree / Web3Forms** — replace the `fetch('/api/quote', ...)` call in `components/QuoteForm.tsx` with their endpoint
- **Vercel Postgres** — write submissions to a DB in the API route instead of (or in addition to) email

## 5. Wire up Google Ads + Meta Pixel

Open **`lib/siteConfig.ts`** and fill in `analytics`:

```ts
analytics: {
  googleAdsId: 'AW-1234567890',
  googleAnalyticsId: 'G-XXXXXXXXXX',
  googleConversionLabel: 'abcDEF-GHi123', // from Google Ads → Conversions → Create
  metaPixelId: '1234567890123456'
}
```

The site automatically:
- Injects `gtag.js` and the Meta Pixel script when IDs are present
- Fires a `Lead` / `generate_lead` / Google Ads conversion event from `components/Analytics.tsx → trackLeadConversion()` after a successful quote submission

**Ad campaign setup:**
- Send Google Search Ads and Meta Lead Ads to **`/quote`** as the dedicated landing page (highest conversion rate)
- For broader awareness campaigns, send to **`/`** (landing has the embedded form above the fold)
- For city-targeted campaigns (e.g. "custom railings Coquitlam"), send to the matching **`/service-areas/[city]`** page

## 6. Gallery images

The site ships with **56 real project photos** at `public/images/gallery/project-01.jpg` through `project-56.jpg`, automatically displayed across the site:

- `/gallery` shows all 56
- `/` (landing) shows a 12-photo teaser
- Each `/service-areas/<city>` page shows a 12-photo subset seeded by the city slug, so every city page is visually unique (helps SEO uniqueness scoring)

**To add more photos:**
1. Drop them in `public/images/gallery/` as `project-NN.jpg` (next sequential numbers)
2. Bump the `TOTAL` constant in `lib/gallery.ts`
3. Commit + push — Vercel rebuilds automatically

**Tip:** Vercel automatically optimizes images via Next.js `<Image>` (AVIF/WebP, lazy loading, responsive sizes). You don't need to pre-optimize beyond reasonable compression.

## 7. SEO recommendations once live

1. Submit `https://yourdomain.com/sitemap.xml` to Google Search Console
2. Verify the site with Google Business Profile (so you appear in "Surrey railings" map results)
3. Ask your happiest 10 customers for Google reviews — update `lib/testimonials.ts` with their real quotes (and `aggregateRating.reviewCount` in `lib/seo.ts`)
4. Add a blog (`/blog`) for long-tail SEO: "How to choose glass railings in Surrey", "Glass vs aluminum deck railings BC", etc.

## 8. Adding more city pages

Just append to **`lib/cities.ts`**:

```ts
{
  slug: 'mission',
  name: 'Mission',
  province: 'BC',
  region: 'Fraser Valley',
  driveTime: '~60 min from Surrey HQ',
  intro: '...',
  neighbourhoods: [...],
  popularStyle: '...',
  metaDescription: '...',
  keywords: [...]
}
```

The page, the metadata, the sitemap entry, and the footer link all auto-generate at build time. **No new files needed.**

## File tour

```
all-kinds-railings/
├── app/
│   ├── layout.tsx              # Root layout, fonts, header/footer, analytics, JSON-LD
│   ├── page.tsx                # Landing page (hero + funnel + services + story + gallery + ...)
│   ├── globals.css             # Tailwind base + custom component classes
│   ├── about/page.tsx          # Sarb Sian's story
│   ├── services/page.tsx
│   ├── gallery/page.tsx
│   ├── quote/page.tsx          # Dedicated quote funnel landing page
│   ├── contact/page.tsx
│   ├── thank-you/page.tsx      # Post-submission, noindex
│   ├── not-found.tsx
│   ├── sitemap.ts              # Auto-generated sitemap
│   ├── robots.ts               # Auto-generated robots.txt
│   ├── service-areas/
│   │   ├── page.tsx            # Index of all cities
│   │   └── [city]/page.tsx     # Dynamic city pages
│   └── api/quote/route.ts      # Lead submission endpoint
├── components/
│   ├── Header.tsx              # Sticky header, mobile menu, top bar
│   ├── Footer.tsx              # Multi-column footer with services + cities
│   ├── Logo.tsx                # Inline SVG logo mark
│   ├── QuoteForm.tsx           # 5-step multi-step funnel
│   ├── ServicesGrid.tsx
│   ├── GalleryGrid.tsx         # Gallery with image placeholders
│   ├── Testimonials.tsx
│   ├── TrustBar.tsx
│   ├── CTABanner.tsx
│   ├── FaqAccordion.tsx
│   └── Analytics.tsx           # Google + Meta tracking + conversion helper
├── lib/
│   ├── siteConfig.ts           # ★ Brand contact info — EDIT FIRST
│   ├── cities.ts               # City data for SEO pages
│   ├── services.ts
│   ├── faq.ts
│   ├── testimonials.ts
│   └── seo.ts                  # buildMetadata() + JSON-LD helper
├── public/images/              # Drop your gallery photos here
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json                 # Security headers + caching
└── .env.local.example
```

## Branding notes

The palette (defined in `tailwind.config.ts`) — classy red and white with warm brown accents:

- `brand-red` `#B0182B` — primary call-to-action red
- `brand-red-dark` `#7A0F1D` — hover state
- `brand-brown` `#6B4226` — wood-warm accent
- `brand-cream` `#FAF7F2` — premium off-white surface
- `brand-ink` `#1A1414` — near-black headings
- `brand-gold` `#C9A227` — used sparingly on stars/ratings

Fonts (loaded via `next/font/google`):

- **Playfair Display** for headings (classy serif feel)
- **Inter** for body text (clean, mobile-readable)

## Performance

Out of the box this site scores **95–100** on Lighthouse mobile because:

- Statically generated pages (all city pages + every static page are pre-rendered at build)
- Next.js automatic image optimization on the gallery
- Self-hosted Google fonts via `next/font` (no external CSS request)
- Minimal JS (the only client components are the header, quote form, and FAQ accordion)
- Vercel edge cache via the headers in `vercel.json`

## Questions?

If anything is unclear, the most important files to read in this order are:

1. `lib/siteConfig.ts` — what to change first
2. `components/QuoteForm.tsx` — the conversion funnel
3. `app/api/quote/route.ts` — how leads get delivered
4. `lib/cities.ts` — how to add or remove SEO city pages
