import { Star } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export function TrustBar() {
  return (
    <div className="bg-brand-cream border-y border-brand-brown-soft">
      <div className="container-wide py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        <Stat value={`${siteConfig.stats.yearsInBusiness}+`} label="Years in business" />
        <Stat value={siteConfig.stats.projectsCompleted} label="Projects completed" />
        <Stat value="5.0" label="Average rating" stars />
        <Stat value="Lower Mainland" label="Service area" />
      </div>
    </div>
  );
}

function Stat({ value, label, stars }: { value: string; label: string; stars?: boolean }) {
  return (
    <div>
      <div className="text-2xl md:text-3xl font-display font-semibold text-brand-red flex items-center justify-center gap-1">
        {value}
        {stars && <Star className="h-5 w-5 fill-brand-gold text-brand-gold" />}
      </div>
      <div className="text-xs uppercase tracking-wider text-gray-600 mt-1">{label}</div>
    </div>
  );
}
