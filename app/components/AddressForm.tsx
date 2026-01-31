export default function AddressForm() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <input className="w-full rounded-2xl border border-ivory/40 px-4 py-3" placeholder="First name" />
      <input className="w-full rounded-2xl border border-ivory/40 px-4 py-3" placeholder="Last name" />
      <input className="sm:col-span-2 w-full rounded-2xl border border-ivory/40 px-4 py-3" placeholder="Address" />
      <input className="sm:col-span-2 w-full rounded-2xl border border-ivory/40 px-4 py-3" placeholder="Apartment, suite (optional)" />
      <input className="w-full rounded-2xl border border-ivory/40 px-4 py-3" placeholder="City" />
      <input className="w-full rounded-2xl border border-ivory/40 px-4 py-3" placeholder="Postal code" />
      <input className="w-full rounded-2xl border border-ivory/40 px-4 py-3" placeholder="Country" />
      <input className="w-full rounded-2xl border border-ivory/40 px-4 py-3" placeholder="Phone" />
    </div>
  );
}
