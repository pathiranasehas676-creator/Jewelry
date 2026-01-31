interface PriceTagProps {
  price: number;
  discount?: number;
}

export default function PriceTag({ price, discount }: PriceTagProps) {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price);

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="font-semibold text-ink">{formatted}</span>
      {discount ? (
        <span className="rounded-full bg-gold/10 px-2 py-0.5 text-xs uppercase tracking-[0.2em] text-gold">
          {discount}% off
        </span>
      ) : null}
    </div>
  );
}
