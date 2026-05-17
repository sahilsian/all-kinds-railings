import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'About Sarb Sian & All Kinds Railings',
  description:
    'The story of Sarb Sian, founder of All Kinds Railings — a Surrey BC craftsman who has shaped the railing trade across the Lower Mainland since 1993.',
  path: '/about'
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-ink text-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at 10% 20%, #B0182B 0%, transparent 50%), radial-gradient(ellipse at 90% 80%, #6B4226 0%, transparent 50%)'
          }}
        />
        <div className="relative container-narrow py-20 md:py-28">
          <span className="eyebrow text-brand-red-soft">Our Story</span>
          <h1 className="heading-xl mt-3">The man behind the railings.</h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">
            Three decades. Five thousand projects. One craftsman who refuses to cut corners.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <article className="prose-content space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              In <strong className="text-brand-ink">1993</strong>, Sarb Sian stepped off a plane in Vancouver with two things: a small bag of tools
              and a craftsman’s belief that there is no acceptable substitute for doing the work right.
              He had built railings, fences, and stairs back home for years — but Canada was a fresh start,
              and the Lower Mainland was just starting its great wave of custom-home construction.
            </p>
            <p>
              He took every job he could. Wood spindles for a heritage home in New Westminster.
              Wrought iron for a Surrey townhouse complex. Cedar deck rails for a Langley acreage.
              Word travelled fast: <em>this guy actually finishes the job, and it actually looks the way he promised.</em>
            </p>
            <p>
              By the late 90s, other carpenters in the region were sending their clients to Sarb for the
              railing portion of their builds. By the 2010s, he was being asked to consult on engineering
              for projects with no margin for error — view-deck glass railings hanging off cliffside lots,
              floating staircases in custom-home magazines, commercial work for builders he had taught.
            </p>
            <p>
              Today, <strong className="text-brand-ink">All Kinds Railings</strong> is family-run, with a tight crew personally trained by Sarb.
              The company has completed over <strong className="text-brand-ink">5,000 projects</strong> across the Lower Mainland, parts of
              Washington State, and as far east as Kelowna. Sarb still walks every site himself.
            </p>
            <p>
              The values have never changed. When a customer asks how long he’ll stand behind his work,
              the answer is the same as it has been since 1993:
            </p>
            <blockquote className="border-l-4 border-brand-red pl-5 italic text-2xl font-display text-brand-ink">
              “As long as the railing stands.”
            </blockquote>
            <p>
              That is the standard every project leaves the shop with. It is why builders, designers,
              and homeowners across the Lower Mainland still call All Kinds Railings first.
            </p>
          </article>

          <aside className="space-y-6">
            <div className="card-classy p-6">
              <h3 className="font-display text-xl text-brand-ink mb-4">By the numbers</h3>
              <dl className="space-y-3">
                <Row k="Founded" v="1993, in Surrey BC" />
                <Row k="Projects completed" v="5,000+" />
                <Row k="Service area" v="Lower Mainland → Kelowna, WA select" />
                <Row k="Specialties" v="Glass · Wood · Metal · Custom" />
                <Row k="Warranty" v='"As long as the railing stands."' />
              </dl>
              <Link href="/quote" className="btn-primary w-full mt-6 justify-center">
                Request Your Quote
              </Link>
            </div>

            <div className="card-classy p-6 bg-brand-cream">
              <h3 className="font-display text-lg text-brand-ink mb-3">Why builders use us</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>· Engineered stamps available on commercial work</li>
                <li>· On-schedule installs, every time</li>
                <li>· Direct line to Sarb for spec questions</li>
                <li>· Inspection passes on the first try</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTABanner
        title="Want your project built by a 30-year veteran?"
        subtitle="Sarb personally reviews every quote. Free, no obligation, response within 24 hours."
      />
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between text-sm gap-3">
      <dt className="text-gray-500">{k}</dt>
      <dd className="font-medium text-brand-ink text-right">{v}</dd>
    </div>
  );
}
