import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Notification from './components/Notification';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <footer className="mt-auto border-t border-neutral-200 bg-white py-6">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-xs text-neutral-500 sm:flex-row sm:px-6 lg:px-8">
            <span className="font-semibold text-neutral-900">MyStore</span>
            <span>© {new Date().getFullYear()} MyStore Retail. All rights reserved.</span>
          </div>
        </footer>
        <Notification />
      </Router>
    </CartProvider>
  );
}
