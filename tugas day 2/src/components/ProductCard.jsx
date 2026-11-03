import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import { Button } from '@/components/ui/button';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className="product-card group flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white transition-colors duration-200 hover:border-neutral-300">
      <Link
        to={`/products/${product.id}`}
        className="product-card-image-link relative block aspect-[4/3] w-full overflow-hidden bg-neutral-100 border-b border-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral-900"
      >
        <img
          src={product.image}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          className={`product-card-image h-full w-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.02] ${
            imageLoaded ? 'opacity-100' : 'opacity-95'
          }`}
        />
      </Link>

      <div className="product-card-body flex flex-1 flex-col p-5">
        <span className="product-card-category mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
          {product.category}
        </span>

        <h3 className="product-card-title mb-1.5 text-base font-semibold leading-snug text-neutral-900">
          <Link
            to={`/products/${product.id}`}
            className="transition-colors hover:text-[#2563EB] focus-visible:outline-none focus-visible:underline"
          >
            {product.name}
          </Link>
        </h3>

        <p className="product-card-price mb-5 text-base font-bold tracking-tight text-[#2563EB]">
          {formatCurrency(product.price)}
        </p>

        <div className="product-card-actions mt-auto grid grid-cols-2 gap-2.5">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="btn-detail h-9 w-full font-medium"
          >
            <Link
              to={`/products/${product.id}`}
              aria-label={`Detail for ${product.name}`}
            >
              Detail
            </Link>
          </Button>

          <Button
            type="button"
            variant="emerald"
            size="sm"
            onClick={() => addToCart(product, 1)}
            aria-label={`Add ${product.name} to cart`}
            className="btn-add-cart h-9 w-full font-semibold"
          >
            <ShoppingCart className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Add to Cart</span>
          </Button>
        </div>
      </div>
    </article>
  );
}
