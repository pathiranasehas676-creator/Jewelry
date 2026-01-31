export default function AccountPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="font-serif text-3xl">Account</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <section className="rounded-3xl border border-ivory/40 bg-white p-6">
          <h2 className="font-serif text-xl">Login</h2>
          <div className="mt-4 space-y-4">
            <input className="w-full rounded-2xl border border-ivory/40 px-4 py-3" placeholder="Email" />
            <input className="w-full rounded-2xl border border-ivory/40 px-4 py-3" placeholder="Password" type="password" />
            <button className="w-full rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-[0.2em] text-ivory">
              Sign In
            </button>
          </div>
        </section>
        <section className="rounded-3xl border border-ivory/40 bg-white p-6">
          <h2 className="font-serif text-xl">Register</h2>
          <div className="mt-4 space-y-4">
            <input className="w-full rounded-2xl border border-ivory/40 px-4 py-3" placeholder="Full name" />
            <input className="w-full rounded-2xl border border-ivory/40 px-4 py-3" placeholder="Email" />
            <input className="w-full rounded-2xl border border-ivory/40 px-4 py-3" placeholder="Password" type="password" />
            <button className="w-full rounded-full border border-ink/20 px-6 py-3 text-xs uppercase tracking-[0.2em]">
              Create Account
            </button>
          </div>
        </section>
      </div>
      <section className="mt-10 rounded-3xl border border-ivory/40 bg-white p-6">
        <h2 className="font-serif text-xl">Order History</h2>
        <p className="mt-2 text-sm text-ink/60">No orders yet. Your next heirloom awaits.</p>
      </section>
    </div>
  );
}
