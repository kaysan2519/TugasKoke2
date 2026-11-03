import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="products-empty rounded-lg border border-neutral-200 bg-white p-12 text-center text-sm text-neutral-500">
        <p>No products available.</p>
      </div>
    );
  }

  return (
    <div className="product-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
