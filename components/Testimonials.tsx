import { Star } from 'lucide-react';
import { testimonials } from '@/lib/testimonials';

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {testimonials.map(t => (
        <figure key={t.name} className="card-classy p-6 flex flex-col">
          <div className="flex gap-0.5 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
            ))}
          </div>
          <blockquote className="text-sm text-gray-700 leading-relaxed flex-1 italic">
            “{t.quote}”
          </blockquote>
          <figcaption className="mt-5 pt-4 border-t border-gray-100">
            <div className="text-sm font-semibold text-brand-ink">{t.name}</div>
            <div className="text-xs text-gray-500">{t.location}</div>
            <div className="text-xs text-brand-red mt-1">{t.project}</div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
