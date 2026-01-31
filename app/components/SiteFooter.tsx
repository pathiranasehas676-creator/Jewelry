import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="border-t border-ivory/10 bg-ink text-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="space-y-4">
          <h3 className="font-serif text-lg tracking-[0.2em]">AURA GEMS</h3>
          <p className="text-sm text-ivory/70">
            Luxury jewelry designed for a luminous future. Certified stones. Artisan craftsmanship. Trusted delivery.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="uppercase tracking-[0.2em] text-ivory/60">Shop</p>
          <Link href="/shop" className="block text-ivory/80">Collections</Link>
          <Link href="/wishlist" className="block text-ivory/80">Wishlist</Link>
          <Link href="/cart" className="block text-ivory/80">Cart</Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="uppercase tracking-[0.2em] text-ivory/60">Company</p>
          <Link href="/about" className="block text-ivory/80">About</Link>
          <Link href="/contact" className="block text-ivory/80">Contact</Link>
          <Link href="/policies" className="block text-ivory/80">Policies</Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="uppercase tracking-[0.2em] text-ivory/60">Follow</p>
          <a className="block text-ivory/80" href="#">Instagram</a>
          <a className="block text-ivory/80" href="#">Pinterest</a>
          <a className="block text-ivory/80" href="#">LinkedIn</a>
        </div>
      </div>
      <div className="border-t border-ivory/10 py-6 text-center text-xs uppercase tracking-[0.2em] text-ivory/50">
        © 2026 Aura Gems. All rights reserved.
      </div>
    </footer>
  );
}
