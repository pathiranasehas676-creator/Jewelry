import Link from 'next/link';
import PriceTag from './PriceTag';
import RatingStars from './RatingStars';

interface ProductCardProps {
  title: string;
  price: number;
  slug: string;
  image?: string;
  rating?: number;
  badge?: string;
}

export default function ProductCard({ title, price, slug, image, rating = 4.8, badge }: ProductCardProps) {
  return (
    <article className="group rounded-3xl border border-ivory/40 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/products/${slug}`} className="block">
        <div className="flex h-44 items-center justify-center rounded-2xl bg-ivory/60">
          <span className="text-xs uppercase tracking-[0.2em] text-ink/40">{image ? 'Image' : 'Visual'}</span>
        </div>
        <div className="mt-4 space-y-2">
          {badge ? <span className="text-xs uppercase tracking-[0.2em] text-gold">{badge}</span> : null}
          <h3 className="font-serif text-lg text-ink">{title}</h3>
          <RatingStars rating={rating} />
          <PriceTag price={price} />
        </div>
      </Link>
    </article>
  );
}
