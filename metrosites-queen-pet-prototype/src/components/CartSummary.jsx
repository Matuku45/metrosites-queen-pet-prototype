import React from "react";
import { CreditCard } from "lucide-react";

export default function CartSummary({ cartItems }) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="p-6 border rounded-lg shadow-lg w-full md:w-1/3 bg-white animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      <div className="space-y-2">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Tax (10%): ${tax.toFixed(2)}</p>
        <p className="font-bold">Total: ${total.toFixed(2)}</p>
      </div>
      <button className="mt-6 w-full btn btn-primary flex items-center justify-center gap-2">
        <CreditCard size={18} /> Proceed to Checkout
      </button>
    </div>
  );
}
