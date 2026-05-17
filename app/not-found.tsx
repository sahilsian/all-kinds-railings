import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-narrow text-center">
        <div className="text-7xl font-display text-brand-red">404</div>
        <h1 className="heading-lg text-brand-ink mt-3">Page not found</h1>
        <p className="mt-4 text-gray-700">The page you’re looking for doesn’t exist or has moved.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">Back to home</Link>
          <Link href="/quote" className="btn-secondary">Request a quote</Link>
        </div>
      </div>
    </section>
  );
}
