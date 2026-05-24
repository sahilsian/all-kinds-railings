import { siteConfig } from '@/lib/siteConfig';

export function TrustBar() {
  return (
    <div className="bg-brand-cream border-y border-brand-brown-soft">
      <div className="container-wide py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        <Stat value={`${siteConfig.stats.yearsInBusiness}+`} label="Years in business" />
        <Stat value={siteConfig.stats.projectsCompleted} label="Projects completed" />
        <Stat value="Family-owned" label="Since 1993" />
        <Stat value="Lower Mainland" label="Service area" />
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl md:text-3xl font-display font-semibold text-brand-red">
        {value}
      </div>
      <div className="text-xs uppercase tracking-wider text-gray-600 mt-1">{label}</div>
    </div>
  );
}
