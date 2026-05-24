'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { gallery, getGallerySubset, type GalleryItem } from '@/lib/gallery';

/**
 * Renders a masonry-style gallery of real project photos with a click-to-zoom
 * lightbox modal. Keyboard: Esc closes, ← / → navigate.
 *
 * - `items`  — pass an explicit list to override
 * - `limit`  — cap the number of tiles shown (default: all)
 * - `seed`   — when used with `limit`, deterministically rotates the subset
 *              so different pages show a different mix
 */
export function GalleryGrid({
  items,
  limit,
  seed = 0
}: {
  items?: GalleryItem[];
  limit?: number;
  seed?: number;
}) {
  const data: GalleryItem[] = items ?? (limit ? getGallerySubset(limit, seed) : gallery);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const close = useCallback(() => setOpenIdx(null), []);
  const prev = useCallback(
    () => setOpenIdx(i => (i === null ? null : (i - 1 + data.length) % data.length)),
    [data.length]
  );
  const next = useCallback(
    () => setOpenIdx(i => (i === null ? null : (i + 1) % data.length)),
    [data.length]
  );

  // Keyboard nav + body scroll lock while open
  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [openIdx, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-3">
        {data.map((item, i) => {
          const spanClass =
            item.span === 'tall'
              ? 'row-span-2'
              : item.span === 'wide'
              ? 'col-span-2'
              : '';
          return (
            <button
              key={`${item.src}-${i}`}
              type="button"
              onClick={() => setOpenIdx(i)}
              aria-label={`Open photo: ${item.alt}`}
              className={`relative overflow-hidden rounded-lg group bg-brand-brown-soft cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 ${spanClass}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width:1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          );
        })}
      </div>

      {openIdx !== null && (
        <Lightbox
          item={data[openIdx]}
          index={openIdx}
          total={data.length}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}

function Lightbox({
  item,
  index,
  total,
  onClose,
  onPrev,
  onNext
}: {
  item: GalleryItem;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 md:top-6 md:right-6 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Prev */}
      <button
        type="button"
        onClick={e => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous photo"
        className="absolute left-2 md:left-6 z-10 inline-flex h-11 w-11 md:h-14 md:w-14 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={e => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next photo"
        className="absolute right-2 md:right-6 z-10 inline-flex h-11 w-11 md:h-14 md:w-14 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      {/* Image — stopPropagation so clicking the image itself doesn't close */}
      <div
        className="relative w-[92vw] h-[82vh] md:w-[88vw] md:h-[88vh]"
        onClick={e => e.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="92vw"
          className="object-contain"
          priority
        />
      </div>

      {/* Counter / caption */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium tracking-wide select-none">
        {index + 1} / {total}
      </div>
    </div>
  );
}
