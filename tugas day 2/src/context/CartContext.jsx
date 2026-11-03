import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { products } from '../data/products';

const CartContext = createContext();

const CART_STORAGE_KEY = 'mystore_cart_items';

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          return parsed.map((item) => {
            const matchedProduct = products.find((p) => p.id === item.id);
            return matchedProduct
              ? { ...item, image: matchedProduct.image, name: matchedProduct.name, price: matchedProduct.price, category: matchedProduct.category }
              : item;
          });
        }
      }
    } catch (error) {
      console.error('Failed to load cart from LocalStorage:', error);
    }
    return [];
  });

  const [notification, setNotification] = useState({
    visible: false,
    message: '',
  });

  const timerRef = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error('Failed to save cart to LocalStorage:', error);
    }
  }, [cartItems]);

  const showNotification = useCallback((message = 'Product added to cart!') => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setNotification({
      visible: true,
      message,
    });
    timerRef.current = setTimeout(() => {
      setNotification((prev) => ({ ...prev, visible: false }));
    }, 2800);
  }, []);

  const hideNotification = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setNotification((prev) => ({ ...prev, visible: false }));
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const addToCart = useCallback(
    (product, quantityToAdd = 1) => {
      if (!product || !product.id) return;
      const validQty = Math.max(1, Number(quantityToAdd) || 1);

      setCartItems((prevItems) => {
        const existingIndex = prevItems.findIndex((item) => item.id === product.id);
        if (existingIndex > -1) {
          return prevItems.map((item, index) =>
            index === existingIndex
              ? { ...item, quantity: item.quantity + validQty }
              : item
          );
        }
        return [
          ...prevItems,
          {
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            image: product.image,
            quantity: validQty,
          },
        ];
      });

      showNotification('Product added to cart!');
    },
    [showNotification]
  );

  const removeFromCart = useCallback((productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  }, []);

  const increaseQuantity = useCallback((productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }, []);

  const decreaseQuantity = useCallback((productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getCartCount = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const getCartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getCartCount,
    getCartTotal,
    notification,
    showNotification,
    hideNotification,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export default CartContext;
