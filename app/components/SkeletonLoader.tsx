export default function SkeletonLoader() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-6 w-2/3 rounded-full bg-ivory/60" />
      <div className="h-40 rounded-3xl bg-ivory/60" />
      <div className="h-4 w-1/2 rounded-full bg-ivory/60" />
    </div>
  );
}
