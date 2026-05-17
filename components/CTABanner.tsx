import Link from 'next/link';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export function CTABanner({
  title = 'Ready for railings that elevate your home?',
  subtitle = 'Free quote in 24 hours. No obligation. 30+ years of craftsmanship behind every install.'
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="bg-brand-ink relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, #B0182B 0%, transparent 45%), radial-gradient(circle at 80% 70%, #6B4226 0%, transparent 45%)'
        }}
      />
      <div className="container-narrow relative py-16 md:py-20 text-center">
        <span className="eyebrow text-brand-red-soft">Get Started</span>
        <h2 className="heading-lg text-white mt-3 max-w-3xl mx-auto">{title}</h2>
        <p className="mt-4 text-white/70 max-w-xl mx-auto">{subtitle}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/quote" className="btn-primary btn-lg">
            Start My Free Quote
          </Link>
          <a href={siteConfig.phoneHref} className="btn-secondary btn-lg bg-white/5 border-white text-white hover:bg-white hover:text-brand-red">
            <Phone className="h-5 w-5" /> {siteConfig.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
