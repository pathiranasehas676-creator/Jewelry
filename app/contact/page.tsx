export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <p className="text-xs uppercase tracking-[0.2em] text-gold">Concierge</p>
      <h1 className="mt-4 font-serif text-3xl">We are here to help.</h1>
      <p className="mt-4 text-sm text-ink/70">
        For bespoke requests, sourcing, or sizing guidance, reach out to our concierge team. Response within 24 hours.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <input className="w-full rounded-2xl border border-ivory/40 px-4 py-3" placeholder="Name" />
        <input className="w-full rounded-2xl border border-ivory/40 px-4 py-3" placeholder="Email" />
        <textarea className="sm:col-span-2 h-32 w-full rounded-2xl border border-ivory/40 px-4 py-3" placeholder="Message" />
        <button className="rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-[0.2em] text-ivory">
          Send Message
        </button>
      </div>
    </div>
  );
}
