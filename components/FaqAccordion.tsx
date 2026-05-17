'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { faqs } from '@/lib/faq';

export function FaqAccordion({ limit }: { limit?: number }) {
  const [open, setOpen] = useState<number | null>(0);
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <div className="divide-y divide-gray-100 border-y border-gray-100">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left gap-4"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-brand-ink">{f.question}</span>
              <ChevronDown className={clsx('h-5 w-5 text-brand-red transition-transform', isOpen && 'rotate-180')} />
            </button>
            <div className={clsx('overflow-hidden transition-all', isOpen ? 'max-h-96 pb-5' : 'max-h-0')}>
              <p className="text-sm text-gray-700 leading-relaxed">{f.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
