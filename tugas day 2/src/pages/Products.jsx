import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';

export default function Products() {
  return (
    <main className="page-main flex-1 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="products-header mb-8 flex flex-col justify-between gap-2 border-b border-neutral-200 pb-6 sm:flex-row sm:items-end">
          <div>
            <h1 className="products-heading text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              Our Products
            </h1>
            <p className="products-subtitle mt-1.5 text-sm text-neutral-500 sm:text-base">
              Temukan produk favoritmu.
            </p>
          </div>
          <p className="text-xs font-medium text-neutral-500">
            Showing {products.length} products
          </p>
        </header>

        <ProductGrid products={products} />
      </div>
    </main>
  );
}
