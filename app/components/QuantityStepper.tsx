'use client';

interface QuantityStepperProps {
  quantity: number;
  onChange: (value: number) => void;
}

export default function QuantityStepper({ quantity, onChange }: QuantityStepperProps) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-ivory/40 px-3 py-1">
      <button className="focus-ring text-sm" onClick={() => onChange(Math.max(1, quantity - 1))}>
        −
      </button>
      <span className="text-sm">{quantity}</span>
      <button className="focus-ring text-sm" onClick={() => onChange(quantity + 1)}>
        +
      </button>
    </div>
  );
}
