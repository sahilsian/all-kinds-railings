import Link from 'next/link';
import { CheckCircle, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import { buildMetadata } from '@/lib/seo';

export const metadata = {
  ...buildMetadata({
    title: 'Thank You — Your Quote Request Was Received',
    description: 'Thanks for reaching out to All Kinds Railings. We\'ll be in touch within 24 hours.',
    path: '/thank-you'
  }),
  robots: { index: false, follow: false }
};

export default function ThankYouPage() {
  return (
    <section className="section">
      <div className="container-narrow text-center max-w-xl">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-red text-white mx-auto">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h1 className="heading-xl text-brand-ink mt-6">Thanks — we got it.</h1>
        <p className="mt-4 text-lg text-gray-700">
          Your request is in front of our team. A senior estimator will reach out within 24 hours
          (often same day) to confirm details and book your free site visit.
        </p>

        <div className="mt-8 card-classy p-6 bg-brand-cream text-left">
          <h2 className="font-display text-lg text-brand-ink">While you wait:</h2>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>· <Link href="/gallery" className="text-brand-red hover:underline">Browse our project gallery</Link> for design ideas</li>
            <li>· <Link href="/about" className="text-brand-red hover:underline">Read Sarb’s story</Link> — 30 years of craftsmanship</li>
            <li>· <Link href="/services" className="text-brand-red hover:underline">Explore our services</Link> — glass, wood, metal, and custom</li>
          </ul>
        </div>

        <div className="mt-8">
          <p className="text-sm text-gray-600 mb-3">Need to reach us sooner?</p>
          <a href={siteConfig.phoneHref} className="btn-primary btn-lg">
            <Phone className="h-5 w-5" /> Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
