import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import { collections, products } from './lib/data';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-3xl">Featured Collections</h2>
          <Link href="/shop" className="text-xs uppercase tracking-[0.2em] text-ink/60">
            Explore All
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {collections.map((collection) => (
            <div key={collection.title} className="rounded-3xl border border-ivory/40 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">{collection.title}</p>
              <p className="mt-4 text-sm text-ink/70">{collection.description}</p>
              <button className="mt-6 text-xs uppercase tracking-[0.2em] text-ink/60">View collection</button>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-ivory/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-3xl">Best Sellers</h2>
            <span className="text-xs uppercase tracking-[0.2em] text-ink/60">Curated weekly</span>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 rounded-3xl border border-ivory/40 bg-white p-8 md:grid-cols-4">
          {[
            'Certified Stones',
            'Secure Payments',
            'Insured Global Shipping',
            '30-Day Returns'
          ].map((item) => (
            <div key={item}>
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Trust</p>
              <p className="mt-3 text-sm text-ink/70">{item}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-ink text-ivory">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-3xl">Private access to new drops.</h2>
              <p className="mt-3 text-sm text-ivory/70">Join the AURA list for early access, concierge invites, and bespoke offers.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                className="rounded-full border border-ivory/30 bg-transparent px-5 py-3 text-sm"
                placeholder="Email address"
                aria-label="Email address"
              />
              <button className="rounded-full bg-gold px-6 py-3 text-xs uppercase tracking-[0.2em] text-ink">
                Notify me
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
