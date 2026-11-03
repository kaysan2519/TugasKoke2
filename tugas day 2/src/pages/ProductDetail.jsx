import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import QuantitySelector from '../components/QuantitySelector';
import { formatCurrency } from '../utils/formatCurrency';
import { Button } from '@/components/ui/button';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="page-main flex-1 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="product-not-found mx-auto max-w-lg rounded-lg border border-neutral-200 bg-white p-10 text-center">
            <h1 className="text-xl font-bold text-neutral-900">Product Not Found</h1>
            <p className="mt-2 text-sm text-neutral-500">
              Sorry, the product you are looking for does not exist.
            </p>
            <div className="mt-6">
              <Button asChild variant="outline" className="btn-back-products">
                <Link to="/products">
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  <span>Back to Products</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <main className="page-main flex-1 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="product-detail-top mb-6">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="btn-back-products font-medium"
          >
            <Link to="/products">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Back to Products</span>
            </Link>
          </Button>
        </div>

        <section className="product-detail-card overflow-hidden rounded-lg border border-neutral-200 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Large Real Product Photography */}
            <div className="product-detail-image-box bg-neutral-100 lg:col-span-6 lg:border-r lg:border-neutral-200">
              <div className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-square w-full h-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-detail-image h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right: Editorial Product Information */}
            <div className="product-detail-info flex flex-col justify-center p-6 sm:p-8 lg:col-span-6 lg:p-10">
              <span className="product-detail-category mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-neutral-500">
                {product.category}
              </span>

              <h1 className="product-detail-title text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                {product.name}
              </h1>

              <p className="product-detail-price mt-3 text-2xl font-bold tracking-tight text-[#2563EB]">
                {formatCurrency(product.price)}
              </p>

              <div className="my-6 h-px w-full bg-neutral-200" />

              <p className="product-detail-description text-sm leading-relaxed text-neutral-600 sm:text-base">
                {product.description}
              </p>

              <div className="product-detail-purchase mt-8 border-t border-neutral-200 pt-6">
                <div className="product-detail-quantity-row mb-6 flex items-center gap-4">
                  <span className="product-detail-quantity-label text-sm font-semibold text-neutral-900">
                    Quantity:
                  </span>
                  <QuantitySelector
                    quantity={quantity}
                    onDecrease={handleDecrease}
                    onIncrease={handleIncrease}
                    min={1}
                  />
                </div>

                <div className="product-detail-actions flex flex-col gap-3 sm:flex-row">
                  <Button
                    type="button"
                    variant="emerald"
                    size="lg"
                    onClick={handleAddToCart}
                    className="btn-add-cart btn-detail-add w-full sm:w-auto sm:min-w-[200px] font-semibold"
                  >
                    <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                    <span>Add to Cart</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
