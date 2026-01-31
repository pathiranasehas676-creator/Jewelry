import AddressForm from '../components/AddressForm';

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="font-serif text-3xl">Checkout</h1>
      <div className="mt-10 grid gap-10 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-8">
          <section className="rounded-3xl border border-ivory/40 bg-white p-6">
            <h2 className="font-serif text-xl">Customer</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input className="w-full rounded-2xl border border-ivory/40 px-4 py-3" placeholder="Email" />
              <input className="w-full rounded-2xl border border-ivory/40 px-4 py-3" placeholder="Phone" />
            </div>
          </section>
          <section className="rounded-3xl border border-ivory/40 bg-white p-6">
            <h2 className="font-serif text-xl">Shipping</h2>
            <div className="mt-4">
              <AddressForm />
            </div>
          </section>
          <section className="rounded-3xl border border-ivory/40 bg-white p-6">
            <h2 className="font-serif text-xl">Payment</h2>
            <p className="mt-2 text-sm text-ink/70">Stripe-ready placeholder. Enter any details for demo checkout.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input className="sm:col-span-2 w-full rounded-2xl border border-ivory/40 px-4 py-3" placeholder="Card number" />
              <input className="w-full rounded-2xl border border-ivory/40 px-4 py-3" placeholder="MM / YY" />
              <input className="w-full rounded-2xl border border-ivory/40 px-4 py-3" placeholder="CVC" />
            </div>
          </section>
        </div>
        <div className="rounded-3xl border border-ivory/40 bg-white p-6">
          <h2 className="font-serif text-xl">Order Summary</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span>Solstice Diamond Ring</span>
              <span>$4,200</span>
            </div>
            <div className="flex items-center justify-between text-ink/60">
              <span>Shipping</span>
              <span>$60</span>
            </div>
            <div className="border-t border-ivory/40 pt-4 flex items-center justify-between font-semibold">
              <span>Total</span>
              <span>$4,260</span>
            </div>
          </div>
          <button className="mt-6 w-full rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-[0.2em] text-ivory">
            Place Order
          </button>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-ink/50">
            By placing order you agree to our policies.
          </p>
        </div>
      </div>
    </div>
  );
}
