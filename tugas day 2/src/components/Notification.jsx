import React from 'react';
import { Check, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Notification() {
  const { notification, hideNotification } = useCart();

  if (!notification || !notification.visible) {
    return null;
  }

  return (
    <div
      className="toast-notification fixed bottom-5 right-5 left-5 sm:left-auto z-50 flex items-center gap-3 rounded-md bg-[#078B59] px-4 py-3 text-sm font-medium text-white shadow-md transition-opacity"
      role="status"
      aria-live="polite"
      data-testid="toast-notification"
    >
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
        <Check className="h-3.5 w-3.5 text-white" aria-hidden="true" />
      </span>
      <span className="toast-message flex-1">{notification.message}</span>
      <button
        type="button"
        onClick={hideNotification}
        aria-label="Close notification"
        className="toast-close ml-2 inline-flex h-6 w-6 items-center justify-center rounded-sm text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
