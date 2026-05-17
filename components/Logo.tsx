import Link from 'next/link';

type LogoProps = { variant?: 'dark' | 'light'; size?: 'sm' | 'md' | 'lg' };

export function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const textClass = variant === 'light' ? 'text-white' : 'text-brand-ink';
  const accent = 'text-brand-red';
  const sizeClass = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-xl';

  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${textClass}`} aria-label="All Kinds Railings — Home">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-red text-white shadow-red-glow">
        {/* Inline SVG mark — replace with /public/images/logo/logo.svg if you have brand artwork */}
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M3 20V8" />
          <path d="M9 20V4" />
          <path d="M15 20V8" />
          <path d="M21 20V4" />
          <path d="M2 20h20" />
        </svg>
      </span>
      <span className={`${sizeClass} font-display font-semibold leading-none`}>
        All Kinds <span className={accent}>Railings</span>
      </span>
    </Link>
  );
}
