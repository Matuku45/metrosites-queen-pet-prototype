import React from "react";
import { CreditCard } from "lucide-react";

export default function CartSummary({ cartItems }) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="p-6 rounded-2xl shadow-md bg-white animate-fadeIn border border-pink-100">
      <h2 className="text-2xl font-bold mb-4 text-[oklch(70%_0.05_50)]">Order Summary</h2>
      
      <div className="space-y-2 text-gray-700">
        <p>Subtotal: <span className="font-medium">R{subtotal.toFixed(2)}</span></p>
        <p>Tax (10%): <span className="font-medium">R{tax.toFixed(2)}</span></p>
        <p className="font-bold text-lg mt-2">Total: R{total.toFixed(2)}</p>
      </div>

      <button className="mt-6 w-full bg-gradient-to-r from-pink-400 to-yellow-400 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform">
        <CreditCard size={18} /> Proceed to Checkout
      </button>
    </div>
  );
}
