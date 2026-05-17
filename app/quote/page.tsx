import { QuoteForm } from '@/components/QuoteForm';
import { buildMetadata } from '@/lib/seo';
import { Star, Shield, Clock, Award } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Get a Free Custom Railing Quote',
  description:
    'Tell us about your project — wood, glass or metal railings — and a senior estimator from All Kinds Railings will follow up within 24 hours. Free, no obligation.',
  path: '/quote',
  keywords: ['free railing quote', 'custom railing quote Surrey', 'glass railing estimate BC']
});

export default function QuotePage() {
  return (
    <div className="bg-subtle-red">
      <div className="container-narrow py-12 md:py-20">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
          {/* Left: value props */}
          <div>
            <span className="eyebrow">Free Quote · No obligation</span>
            <h1 className="heading-xl text-brand-ink mt-3">
              Custom railing quote in <span className="text-brand-red">24 hours</span>.
            </h1>
            <p className="mt-5 text-lg text-gray-700 leading-relaxed">
              Tell us about your project — wood, glass, metal or a creative custom design.
              A senior estimator from our team will reach out personally to confirm details and book a free site visit.
            </p>

            <ul className="mt-8 space-y-4">
              <Trust icon={<Award className="h-5 w-5" />} title="30+ years of craftsmanship">
                Founded by Sarb Sian in 1993. 5,000+ completed projects across the Lower Mainland.
              </Trust>
              <Trust icon={<Shield className="h-5 w-5" />} title="Code-compliant, guaranteed">
                Every install meets BC Building Code. Workmanship backed by written guarantee.
              </Trust>
              <Trust icon={<Clock className="h-5 w-5" />} title="Fast response">
                Most quotes returned within a day, often same day. Site visits within the week.
              </Trust>
              <Trust icon={<Star className="h-5 w-5" />} title="5-star rated">
                Trusted by homeowners, builders and developers from Vancouver to Kelowna.
              </Trust>
            </ul>

            <div className="mt-10 hidden lg:block p-6 rounded-xl bg-white border border-brand-brown-soft">
              <p className="text-sm italic text-gray-700">
                “Sarb and his team built the frameless glass railing on our deck and I cannot believe how clean the finish is. Would absolutely hire again.”
              </p>
              <p className="mt-3 text-xs font-semibold text-brand-ink">— Jaspreet K., South Surrey</p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:sticky lg:top-28">
            <QuoteForm variant="full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Trust({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-red text-white">
        {icon}
      </span>
      <div>
        <h3 className="font-semibold text-brand-ink">{title}</h3>
        <p className="text-sm text-gray-600 mt-0.5">{children}</p>
      </div>
    </li>
  );
}
