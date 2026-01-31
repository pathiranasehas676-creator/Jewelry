'use client';

import { useState } from 'react';
import QuantityStepper from '../components/QuantityStepper';
import Toast from '../components/Toast';

export default function CartPage() {
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="font-serif text-3xl">Your Cart</h1>
      <div className="mt-8 space-y-6">
        <div className="flex flex-col gap-6 rounded-3xl border border-ivory/40 bg-white p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Solstice Diamond Ring</p>
            <p className="text-sm text-ink/70">18k Yellow Gold • Size 6</p>
          </div>
          <QuantityStepper quantity={quantity} onChange={setQuantity} />
          <div className="text-sm font-semibold">$4,200</div>
          <button className="text-xs uppercase tracking-[0.2em] text-ink/50">Remove</button>
        </div>
        <div className="rounded-3xl border border-ivory/40 bg-white p-6">
          <div className="flex items-center justify-between text-sm">
            <span>Subtotal</span>
            <span>$4,200</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm">
            <span>Shipping estimate</span>
            <span>$60</span>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <input className="flex-1 rounded-full border border-ivory/40 px-4 py-3 text-sm" placeholder="Coupon code" />
            <button className="rounded-full border border-ink/20 px-6 py-3 text-xs uppercase tracking-[0.2em]">
              Apply
            </button>
          </div>
          <button
            className="mt-6 w-full rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-[0.2em] text-ivory"
            onClick={() => setShowToast(true)}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      <Toast message="Luxury checkout is ready" show={showToast} onHide={() => setShowToast(false)} />
    </div>
  );
}
