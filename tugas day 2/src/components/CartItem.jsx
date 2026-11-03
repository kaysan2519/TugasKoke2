import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import QuantitySelector from './QuantitySelector';
import { formatCurrency } from '../utils/formatCurrency';
import { Button } from '@/components/ui/button';

export default function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const subtotal = item.price * item.quantity;

  return (
    <article
      className="cart-item flex flex-col gap-4 rounded-lg border border-neutral-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
      data-testid={`cart-item-${item.id}`}
    >
      <div className="flex items-center gap-4 min-w-0">
        <Link
          to={`/products/${item.id}`}
          className="cart-item-image-link shrink-0 overflow-hidden rounded-md border border-neutral-200 bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
        >
          <img
            src={item.image}
            alt={item.name}
            className="cart-item-image h-20 w-24 object-cover object-center"
          />
        </Link>

        <div className="cart-item-details min-w-0 flex-1">
          <span className="cart-item-category block text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
            {item.category}
          </span>
          <h3 className="cart-item-title truncate text-base font-semibold text-neutral-900">
            <Link
              to={`/products/${item.id}`}
              className="transition-colors hover:text-[#2563EB] focus-visible:outline-none focus-visible:underline"
            >
              {item.name}
            </Link>
          </h3>
          <p className="cart-item-price mt-0.5 text-sm font-medium text-neutral-600">
            {formatCurrency(item.price)}
          </p>
        </div>
      </div>

      <div className="cart-item-controls flex flex-wrap items-center justify-between gap-4 border-t border-neutral-100 pt-3 sm:flex-nowrap sm:justify-end sm:border-t-0 sm:pt-0">
        <QuantitySelector
          quantity={item.quantity}
          onDecrease={() => decreaseQuantity(item.id)}
          onIncrease={() => increaseQuantity(item.id)}
          min={1}
        />

        <div className="cart-item-subtotal min-w-[115px] text-left sm:text-right">
          <span className="cart-item-subtotal-label block text-[11px] font-medium uppercase tracking-wider text-neutral-400">
            Subtotal
          </span>
          <strong className="cart-item-subtotal-value text-sm font-bold text-neutral-900">
            {formatCurrency(subtotal)}
          </strong>
        </div>

        <Button
          type="button"
          variant="destructive"
          size="sm"
          onClick={() => removeFromCart(item.id)}
          aria-label={`Remove ${item.name} from cart`}
          className="btn-remove h-8 px-2.5 text-xs font-medium"
        >
          <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Remove</span>
        </Button>
      </div>
    </article>
  );
}
