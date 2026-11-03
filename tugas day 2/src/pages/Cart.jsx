import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { formatCurrency } from '../utils/formatCurrency';
import { Button } from '@/components/ui/button';

export default function Cart() {
  const { cartItems, clearCart, getCartTotal, getCartCount } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="page-main flex-1 py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 border-b border-neutral-200 pb-5">
            <h1 className="cart-heading text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              Your Cart
            </h1>
          </div>

          <section className="cart-empty-card mx-auto max-w-lg rounded-lg border border-neutral-200 bg-white px-6 py-14 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-500">
              <ShoppingBag className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="cart-empty-text text-base font-medium text-neutral-600">
              Your cart is currently empty.
            </p>
            <div className="mt-6">
              <Button
                asChild
                variant="blue"
                size="lg"
                className="btn-continue-shopping font-semibold"
              >
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="page-main flex-1 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="cart-header-row mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 pb-5">
          <div>
            <h1 className="cart-heading text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              Your Cart
            </h1>
            <p className="mt-1 text-sm text-neutral-500">
              {getCartCount()} {getCartCount() === 1 ? 'item' : 'items'} in your bag
            </p>
          </div>

          <Button
            type="button"
            variant="destructive"
            size="sm"
            onClick={clearCart}
            className="btn-clear-cart font-medium"
          >
            <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Clear Cart</span>
          </Button>
        </div>

        <div className="cart-layout grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <section
            className="cart-items-list flex flex-col gap-3.5 lg:col-span-8"
            aria-label="Cart Items"
          >
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </section>

          <aside
            className="cart-summary-card rounded-lg border border-neutral-200 bg-white p-6 lg:col-span-4 lg:sticky lg:top-[94px]"
            aria-label="Order Summary"
          >
            <h2 className="cart-summary-title text-lg font-bold tracking-tight text-neutral-900">
              Order Summary
            </h2>

            <div className="mt-5 space-y-3 text-sm">
              <div className="cart-summary-row flex items-center justify-between text-neutral-600">
                <span>Total Items</span>
                <span className="font-medium text-neutral-900">{getCartCount()}</span>
              </div>
              <div className="flex items-center justify-between text-neutral-600">
                <span>Shipping</span>
                <span className="font-medium text-neutral-900">Calculated at checkout</span>
              </div>
            </div>

            <div className="cart-summary-divider my-5 h-px w-full bg-neutral-200" />

            <div className="cart-summary-total-row mb-6 flex items-baseline justify-between">
              <span className="text-base font-bold text-neutral-900">Total</span>
              <strong
                className="cart-summary-total-price text-xl font-bold tracking-tight text-[#2563EB]"
                data-testid="cart-total-price"
              >
                {formatCurrency(getCartTotal())}
              </strong>
            </div>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="btn-continue-shopping w-full font-semibold"
            >
              <Link to="/products">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                <span>Continue Shopping</span>
              </Link>
            </Button>
          </aside>
        </div>
      </div>
    </main>
  );
}
