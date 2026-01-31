export default function AdminPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-3xl">Admin Panel</h1>
        <span className="rounded-full border border-ink/20 px-4 py-2 text-xs uppercase tracking-[0.2em]">
          Role: Admin
        </span>
      </div>
      <div className="mt-10 grid gap-8">
        <section className="rounded-3xl border border-ivory/40 bg-white p-6">
          <h2 className="font-serif text-xl">Products</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-ivory/40">
            <table className="w-full text-left text-sm">
              <thead className="bg-ivory/60 text-xs uppercase tracking-[0.2em] text-ink/60">
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Stock</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-ivory/40">
                  <td className="p-3">Solstice Diamond Ring</td>
                  <td className="p-3">Rings</td>
                  <td className="p-3">12</td>
                  <td className="p-3">Active</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="mt-4 rounded-full border border-ink/20 px-6 py-3 text-xs uppercase tracking-[0.2em]">
            Add Product
          </button>
        </section>
        <section className="rounded-3xl border border-ivory/40 bg-white p-6">
          <h2 className="font-serif text-xl">Orders</h2>
          <p className="mt-2 text-sm text-ink/60">Update statuses, manage fulfillment, and handle returns.</p>
        </section>
      </div>
    </div>
  );
}
