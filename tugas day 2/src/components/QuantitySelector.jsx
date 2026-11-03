import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function QuantitySelector({
  quantity = 1,
  onDecrease,
  onIncrease,
  min = 1,
}) {
  return (
    <div
      className="quantity-selector inline-flex items-center rounded-md border border-neutral-200 bg-white"
      role="group"
      aria-label="Quantity selector"
    >
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={onDecrease}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className="quantity-btn h-8 w-8 rounded-none rounded-l-md text-neutral-700 hover:bg-neutral-100 disabled:opacity-35"
      >
        <Minus className="h-3.5 w-3.5" aria-hidden="true" />
      </Button>

      <span
        className="quantity-value min-w-[38px] border-x border-neutral-200 px-2.5 text-center text-sm font-semibold text-neutral-900 select-none"
        data-testid="quantity-value"
      >
        {quantity}
      </span>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className="quantity-btn h-8 w-8 rounded-none rounded-r-md text-neutral-700 hover:bg-neutral-100"
      >
        <Plus className="h-3.5 w-3.5" aria-hidden="true" />
      </Button>
    </div>
  );
}
