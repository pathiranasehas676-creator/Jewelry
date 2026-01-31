import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';
import SkeletonLoader from '../components/SkeletonLoader';
import { products } from '../lib/data';

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink/60">Shop</p>
          <h1 className="font-serif text-3xl">Collections</h1>
        </div>
        <div className="flex gap-3">
          <select className="rounded-full border border-ivory/40 px-4 py-2 text-sm">
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Best Sellers</option>
          </select>
        </div>
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[280px,1fr]">
        <FilterSidebar />
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
          </div>
          <div className="flex justify-center">
            <button className="rounded-full border border-ink/10 px-6 py-3 text-xs uppercase tracking-[0.2em] text-ink/70">
              Load more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
