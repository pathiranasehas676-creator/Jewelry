'use client';

import { useState } from 'react';
import ThreeDViewerModal from '../../components/ThreeDViewerModal';
import PriceTag from '../../components/PriceTag';
import RatingStars from '../../components/RatingStars';
import ProductCard from '../../components/ProductCard';
import { products } from '../../lib/data';

export default function ProductDetailPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="h-[420px] rounded-3xl border border-ivory/40 bg-ivory/50" />
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-24 rounded-2xl border border-ivory/40 bg-ivory/40" />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">AURA GEMS Signature</p>
            <h1 className="font-serif text-3xl">Solstice Diamond Ring</h1>
            <div className="mt-2 flex items-center gap-3">
              <RatingStars rating={4.9} />
              <span className="text-xs uppercase tracking-[0.2em] text-ink/50">128 reviews</span>
            </div>
          </div>
          <PriceTag price={4200} />
          <p className="text-sm text-ink/70">
            A sculpted halo ring with ethically sourced diamonds, framed in 18k gold. Designed for maximum brilliance
            under warm and cool light.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink/50">Metal</p>
              <select className="mt-2 w-full rounded-2xl border border-ivory/40 px-4 py-3 text-sm">
                <option>Yellow Gold</option>
                <option>White Gold</option>
                <option>Rose Gold</option>
              </select>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink/50">Stone</p>
              <select className="mt-2 w-full rounded-2xl border border-ivory/40 px-4 py-3 text-sm">
                <option>Diamond</option>
                <option>Ruby</option>
                <option>Sapphire</option>
              </select>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink/50">Size</p>
              <select className="mt-2 w-full rounded-2xl border border-ivory/40 px-4 py-3 text-sm">
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </select>
            </div>
          </div>
          <div className="rounded-3xl border border-ivory/40 bg-white p-6 text-sm text-ink/70">
            <p><strong>Specs:</strong> 18k gold, 2.1ct total diamonds, 3.2g weight.</p>
            <p>Certified by GIA • Lifetime cleaning • Insured shipping</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-[0.2em] text-ivory">
              Add to Cart
            </button>
            <button
              className="rounded-full border border-ink/20 px-6 py-3 text-xs uppercase tracking-[0.2em]"
              onClick={() => setOpen(true)}
            >
              View in 3D
            </button>
          </div>
          <div className="space-y-2 text-xs uppercase tracking-[0.2em] text-ink/60">
            <p>Delivery estimate: 3-5 business days</p>
            <p>Returns: 30 days, insured and prepaid</p>
          </div>
        </div>
      </div>
      <section className="mt-16">
        <h2 className="font-serif text-2xl">Related Products</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </section>
      <ThreeDViewerModal open={open} onClose={() => setOpen(false)} modelUrl="/models/sample-ring.glb" />
    </div>
  );
}
