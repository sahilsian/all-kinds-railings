import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/services';

export function ServicesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map(s => (
        <div key={s.slug} id={s.slug} className="card-classy flex flex-col overflow-hidden">
          <div className="relative h-52 w-full">
            <Image
              src={s.image}
              alt={s.name}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
              priority={s.slug === 'glass-railings'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <span className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-widest text-white/90">
              {s.shortName}
            </span>
          </div>
          <div className="flex flex-col flex-1 p-6">
            <h3 className="text-xl font-display font-semibold text-brand-ink">{s.name}</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-1">{s.blurb}</p>
            <ul className="mt-4 space-y-1.5">
              {s.highlights.slice(0, 3).map(h => (
                <li key={h} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-brand-red" />
                  {h}
                </li>
              ))}
            </ul>
            <Link href="/quote" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-red hover:text-brand-red-dark">
              Quote this style <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
