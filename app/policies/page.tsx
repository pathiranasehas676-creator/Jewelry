export default function PoliciesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 space-y-10">
      <div>
        <h1 className="font-serif text-3xl">Policies</h1>
        <p className="mt-2 text-sm text-ink/60">Transparent, luxury-grade service guidelines.</p>
      </div>
      <section>
        <h2 className="font-serif text-2xl">Shipping</h2>
        <p className="mt-2 text-sm text-ink/70">Insured, tracked delivery within 3-5 business days. Signature required.</p>
      </section>
      <section>
        <h2 className="font-serif text-2xl">Returns</h2>
        <p className="mt-2 text-sm text-ink/70">30-day returns with prepaid labels. Pieces must be unworn and certified.</p>
      </section>
      <section>
        <h2 className="font-serif text-2xl">Privacy</h2>
        <p className="mt-2 text-sm text-ink/70">We protect your data with encrypted storage and never sell personal information.</p>
      </section>
    </div>
  );
}
