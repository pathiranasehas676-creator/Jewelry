import ProductCard from '../components/ProductCard';
import { products } from '../lib/data';

export default function WishlistPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="font-serif text-3xl">Wishlist</h1>
      <p className="mt-2 text-sm text-ink/60">Saved pieces sync to your account.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </div>
    </div>
  );
}
