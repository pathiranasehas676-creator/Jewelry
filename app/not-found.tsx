import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-gold">404</p>
      <h1 className="mt-4 font-serif text-3xl">This page drifted out of orbit.</h1>
      <p className="mt-4 text-sm text-ink/70">Return to the collection and continue your search for brilliance.</p>
      <Link href="/" className="mt-6 inline-block rounded-full border border-ink/20 px-6 py-3 text-xs uppercase tracking-[0.2em]">
        Back to Home
      </Link>
    </div>
  );
}
