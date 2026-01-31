const filterGroups = [
  { label: 'Category', options: ['Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Bridal Sets'] },
  { label: 'Metal Type', options: ['Yellow Gold', 'White Gold', 'Rose Gold', 'Platinum'] },
  { label: 'Stone Type', options: ['Diamond', 'Ruby', 'Sapphire', 'Emerald'] },
  { label: 'Availability', options: ['In stock', 'Pre-order'] },
  { label: 'Rating', options: ['4+ stars', '3+ stars'] }
];

export default function FilterSidebar() {
  return (
    <aside className="space-y-6 rounded-3xl border border-ivory/40 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-lg">Filters</h2>
        <button className="text-xs uppercase tracking-[0.2em] text-ink/50">Reset</button>
      </div>
      {filterGroups.map((group) => (
        <div key={group.label} className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/50">{group.label}</p>
          <div className="space-y-1 text-sm">
            {group.options.map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input type="checkbox" className="accent-gold" />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-ink/50">Price Range</p>
        <input type="range" min="200" max="5000" className="w-full accent-gold" />
        <div className="flex justify-between text-xs text-ink/50">
          <span>$200</span>
          <span>$5,000</span>
        </div>
      </div>
    </aside>
  );
}
