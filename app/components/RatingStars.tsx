interface RatingStarsProps {
  rating: number;
}

export default function RatingStars({ rating }: RatingStarsProps) {
  return (
    <div className="text-xs uppercase tracking-[0.2em] text-ink/50">{rating.toFixed(1)} ★</div>
  );
}
