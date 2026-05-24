import Link from 'next/link';

type LogoProps = { variant?: 'dark' | 'light'; size?: 'sm' | 'md' | 'lg' };

export function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const textClass = variant === 'light' ? 'text-white' : 'text-brand-ink';
  const accent = variant === 'light' ? 'text-brand-red-soft' : 'text-brand-red';

  const markPx = size === 'sm' ? 32 : size === 'lg' ? 56 : 44;
  const textSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-xl';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${textClass}`}
      aria-label="All Kinds Railings — Home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo.svg"
        alt=""
        width={markPx}
        height={markPx}
        className="shrink-0"
      />
      <span className={`${textSize} font-display font-semibold leading-none whitespace-nowrap`}>
        All Kinds <span className={accent}>Railings</span>
      </span>
    </Link>
  );
}
