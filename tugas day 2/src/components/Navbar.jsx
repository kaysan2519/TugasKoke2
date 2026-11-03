import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-neutral-200">
      <div className="mx-auto flex h-[68px] sm:h-[70px] max-w-6xl items-center justify-between px-3.5 sm:px-6 lg:px-8">
        <Link
          to="/"
          aria-label="MyStore Home"
          className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 transition-colors hover:text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 rounded-sm shrink-0"
        >
          MyStore
        </Link>

        <nav aria-label="Main Navigation" className="flex items-center gap-1 sm:gap-7">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-2 sm:px-2.5 py-1.5 text-xs sm:text-sm transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 ${
                isActive
                  ? 'font-semibold text-neutral-900'
                  : 'font-medium text-neutral-500 hover:text-neutral-900'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `px-2 sm:px-2.5 py-1.5 text-xs sm:text-sm transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 ${
                isActive
                  ? 'font-semibold text-neutral-900'
                  : 'font-medium text-neutral-500 hover:text-neutral-900'
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `navbar-cart-link inline-flex items-center gap-1.5 sm:gap-2 rounded-md border px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 ${
                isActive
                  ? 'border-neutral-900 bg-neutral-900 text-white font-medium'
                  : 'border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300 font-medium'
              }`
            }
          >
            <ShoppingCart className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" aria-hidden="true" />
            <span>Cart</span>
            <span
              data-testid="cart-badge"
              className="navbar-cart-badge inline-flex h-4 sm:h-5 min-w-[18px] sm:min-w-[20px] items-center justify-center rounded-full bg-[#2563EB] px-1 sm:px-1.5 text-[11px] sm:text-xs font-semibold leading-none text-white"
            >
              {cartCount}
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
