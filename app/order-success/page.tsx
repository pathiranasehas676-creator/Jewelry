import Link from 'next/link';

export default function OrderSuccessPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-gold">Order Confirmed</p>
      <h1 className="mt-4 font-serif text-3xl">Your AURA GEMS piece is on its way.</h1>
      <p className="mt-4 text-sm text-ink/70">
        We have emailed your receipt and concierge details. Track your shipment in your account dashboard.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Link href="/account" className="rounded-full border border-ink/20 px-6 py-3 text-xs uppercase tracking-[0.2em]">
          View Orders
        </Link>
        <Link href="/shop" className="rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-[0.2em] text-ivory">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
