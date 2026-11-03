import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="page-main flex-1 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section className="not-found-card mx-auto max-w-md rounded-lg border border-neutral-200 bg-white p-10 text-center">
          <p className="not-found-code text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Error 404
          </p>
          <h1 className="not-found-title mt-2 text-2xl font-bold tracking-tight text-neutral-900">
            Page Not Found
          </h1>
          <p className="not-found-description mt-2.5 text-sm leading-relaxed text-neutral-500">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-6">
            <Button asChild variant="default" className="btn-explore">
              <Link to="/">
                <Home className="h-4 w-4" aria-hidden="true" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
