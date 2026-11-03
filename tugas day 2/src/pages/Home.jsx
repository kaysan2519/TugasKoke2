import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <main className="page-main flex-1 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Welcome Hero Section */}
        <section className="welcome-section overflow-hidden rounded-lg border border-neutral-200 bg-white">
          <div className="grid grid-cols-1 items-center lg:grid-cols-12">
            <div className="p-6 sm:p-10 lg:col-span-7 lg:p-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Curated Everyday Essentials
              </p>
              <h1 className="welcome-heading text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                Welcome to MyStore!
              </h1>
              <p className="welcome-description mt-3.5 max-w-xl text-base leading-relaxed text-neutral-600">
                Discover amazing products at great prices. Find everything you need in one place.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  variant="blue"
                  size="lg"
                  className="btn-explore font-semibold"
                >
                  <Link to="/products">
                    <span>Explore Products</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="border-t border-neutral-200 bg-neutral-100 lg:col-span-5 lg:border-l lg:border-t-0 h-full">
              <div className="grid grid-cols-2 gap-px bg-neutral-200 h-full">
                <Link
                  to="/products/1"
                  className="group relative aspect-square overflow-hidden bg-neutral-100 block"
                >
                  <img
                    src={products[0].image}
                    alt={products[0].name}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <Link
                  to="/products/2"
                  className="group relative aspect-square overflow-hidden bg-neutral-100 block"
                >
                  <img
                    src={products[1].image}
                    alt={products[1].name}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <Link
                  to="/products/3"
                  className="group relative aspect-square overflow-hidden bg-neutral-100 block"
                >
                  <img
                    src={products[2].image}
                    alt={products[2].name}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <Link
                  to="/products/6"
                  className="group relative aspect-square overflow-hidden bg-neutral-100 block"
                >
                  <img
                    src={products[5].image}
                    alt={products[5].name}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Preview */}
        <section className="mt-12" aria-labelledby="featured-heading">
          <div className="mb-6 flex items-end justify-between border-b border-neutral-200 pb-4">
            <div>
              <h2
                id="featured-heading"
                className="text-xl font-bold tracking-tight text-neutral-900"
              >
                Featured Selection
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                Handpicked essentials across electronics, fashion, and accessories.
              </p>
            </div>
            <Link
              to="/products"
              className="text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] focus-visible:outline-none focus-visible:underline"
            >
              View all 6 products →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
