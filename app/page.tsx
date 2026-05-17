import Link from 'next/link';
import { ArrowRight, Award, Hammer, Sparkles, MapPin } from 'lucide-react';
import { QuoteForm } from '@/components/QuoteForm';
import { TrustBar } from '@/components/TrustBar';
import { ServicesGrid } from '@/components/ServicesGrid';
import { GalleryGrid } from '@/components/GalleryGrid';
import { Testimonials } from '@/components/Testimonials';
import { FaqAccordion } from '@/components/FaqAccordion';
import { CTABanner } from '@/components/CTABanner';
import { cities } from '@/lib/cities';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Custom Wood, Glass & Metal Railings in Surrey BC',
  description:
    'Surrey’s trusted custom railing experts since 1993. Wood, glass, and metal railings for custom homes and commercial across the Lower Mainland. Free quotes in 24 hours.',
  path: '/',
  keywords: [
    'custom railings Surrey',
    'glass railings Lower Mainland',
    'custom home railings BC',
    'wood spindles Surrey',
    'metal railings Vancouver'
  ]
});

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-brand-ink">
        {/* Decorative background */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at 0% 0%, #B0182B 0%, transparent 55%), radial-gradient(ellipse at 100% 100%, #6B4226 0%, transparent 55%)'
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, #fff 0 1px, transparent 1px 60px)'
          }}
        />

        <div className="relative container-wide pt-16 md:pt-24 pb-12 md:pb-20 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Copy column */}
          <div className="text-white animate-slide-up">
            <span className="eyebrow text-brand-red-soft">Family-owned in Surrey since 1993</span>
            <h1 className="heading-xl mt-3">
              Custom railings that <span className="text-brand-red-soft italic">elevate</span> your home.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              Floating glass. Hand-built wood spindles. Sculpted metal. All Kinds Railings has been
              crafting one-of-a-kind railings for Lower Mainland homes and businesses for over <strong className="text-white">30 years and 5,000+ projects</strong>.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/quote" className="btn-primary btn-lg">
                Get Free Quote <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/gallery" className="btn-secondary btn-lg bg-white/5 text-white border-white hover:bg-white hover:text-brand-red">
                View Our Work
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
              <Bullet>30+ years of craftsmanship</Bullet>
              <Bullet>BC code-compliant, guaranteed</Bullet>
              <Bullet>Surrey · Langley · Coquitlam · Burnaby</Bullet>
            </div>
          </div>

          {/* Embedded quote funnel */}
          <div className="lg:pl-4">
            <QuoteForm variant="embedded" />
          </div>
        </div>
      </section>

      {/* ============ TRUST BAR ============ */}
      <TrustBar />

      {/* ============ SERVICES ============ */}
      <section className="section">
        <div className="container-wide">
          <div className="max-w-2xl">
            <span className="eyebrow">What we build</span>
            <h2 className="heading-lg mt-3 text-brand-ink">
              Every railing, custom-built to match your home.
            </h2>
            <div className="accent-rule mt-5" />
            <p className="mt-5 text-gray-700">
              From classic wood spindles that match a heritage home to floating frameless glass that disappears into a view,
              we design and install every railing custom to the space — never off the shelf.
            </p>
          </div>
          <div className="mt-12">
            <ServicesGrid />
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="inline-flex items-center gap-1 font-semibold text-brand-red hover:text-brand-red-dark">
              See all railing services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ THE SARB SIAN STORY ============ */}
      <section className="section bg-brand-cream">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">Meet Sarb Sian</span>
            <h2 className="heading-lg text-brand-ink mt-3">
              A legend in the Lower Mainland railing trade.
            </h2>
            <div className="accent-rule mt-5" />
            <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
              <p>
                When Sarb Sian arrived in Canada in <strong>1993</strong>, he brought with him a deep
                respect for craftsmanship and an obsessive eye for detail. Three decades later,
                he is one of the most respected railing builders in British Columbia — a name other
                carpenters and contractors send their clients to when they want it done right.
              </p>
              <p>
                Sarb still walks every site personally. He still cuts and finishes pieces by hand
                when a project deserves it. And he still gives the same answer to every customer
                who asks how long he’ll stand behind his work: <em className="text-brand-red">“As long as the railing stands.”</em>
              </p>
              <p>
                Today All Kinds Railings is family-run, with a small team trained directly by Sarb,
                serving the entire Lower Mainland, parts of Washington State, and as far east as Kelowna.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <Link href="/about" className="btn-primary">
                Read Sarb’s story <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/quote" className="btn-ghost">Request a quote</Link>
            </div>
          </div>

          {/* Right-side visual quote */}
          <div className="relative">
            <div className="card-classy p-8 md:p-10 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white font-display text-xl">SS</span>
                <div>
                  <div className="font-semibold text-brand-ink">Sarb Sian</div>
                  <div className="text-xs text-gray-500">Founder · Master Railing Craftsman · 1993–today</div>
                </div>
              </div>
              <p className="font-display text-2xl text-brand-ink leading-snug">
                “A railing is the first thing a guest touches when they walk into your home. We make sure that first impression lasts a lifetime.”
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                <KPI value="30+" label="Years" />
                <KPI value="5,000+" label="Projects" />
                <KPI value="5.0★" label="Avg rating" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="section">
        <div className="container-wide">
          <div className="max-w-2xl">
            <span className="eyebrow">How it works</span>
            <h2 className="heading-lg text-brand-ink mt-3">A simple, four-step process.</h2>
            <div className="accent-rule mt-5" />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            <Step n={1} icon={<Sparkles className="h-5 w-5" />} title="Tell us about it">
              Fill out our quick quote form. Project type, style, and rough size — takes ~60 seconds.
            </Step>
            <Step n={2} icon={<MapPin className="h-5 w-5" />} title="Free site visit">
              We come to you, take exact measurements, and show real material samples.
            </Step>
            <Step n={3} icon={<Award className="h-5 w-5" />} title="Custom design + quote">
              Detailed written quote with materials, timeline, and engineered stamps if needed.
            </Step>
            <Step n={4} icon={<Hammer className="h-5 w-5" />} title="Hand-built install">
              Our crew arrives on schedule, builds clean, and leaves your site spotless.
            </Step>
          </div>
        </div>
      </section>

      {/* ============ GALLERY TEASER ============ */}
      <section className="section bg-subtle-red">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <span className="eyebrow">Recent work</span>
              <h2 className="heading-lg text-brand-ink mt-3">5,000+ projects. No two alike.</h2>
            </div>
            <Link href="/gallery" className="btn-secondary">
              View full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <GalleryGrid limit={8} />
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="section">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">What clients say</span>
            <h2 className="heading-lg text-brand-ink mt-3">A reputation built one home at a time.</h2>
            <div className="accent-rule mt-5" />
          </div>
          <Testimonials />
        </div>
      </section>

      {/* ============ SERVICE AREAS ============ */}
      <section className="section bg-brand-cream">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow">Service areas</span>
            <h2 className="heading-lg text-brand-ink mt-3">Serving the entire Lower Mainland.</h2>
            <div className="accent-rule mt-5" />
            <p className="mt-5 text-gray-700">
              From Surrey HQ to as far east as Kelowna, and into Washington State on select projects.
              Tap your city for area-specific information.
            </p>
          </div>
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {cities.map(c => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="group card-classy p-4 flex items-center justify-between hover:border-brand-red"
              >
                <span className="font-medium text-brand-ink group-hover:text-brand-red">{c.name}</span>
                <ArrowRight className="h-4 w-4 text-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <span className="eyebrow">Common questions</span>
            <h2 className="heading-lg text-brand-ink mt-3">Frequently asked.</h2>
          </div>
          <FaqAccordion limit={6} />
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <CTABanner />
    </>
  );
}

/* ---- helpers ---- */

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-red-soft" />
      {children}
    </span>
  );
}

function KPI({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg bg-brand-cream py-3">
      <div className="text-lg font-display font-semibold text-brand-red">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-gray-500">{label}</div>
    </div>
  );
}

function Step({
  n,
  icon,
  title,
  children
}: {
  n: number;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-classy p-6 relative">
      <div className="absolute top-4 right-5 text-5xl font-display text-brand-red/10 select-none">{n}</div>
      <div className="h-10 w-10 rounded-lg bg-brand-red text-white flex items-center justify-center">
        {icon}
      </div>
      <h3 className="mt-4 font-semibold text-brand-ink">{title}</h3>
      <p className="mt-1 text-sm text-gray-600 leading-relaxed">{children}</p>
    </div>
  );
}
