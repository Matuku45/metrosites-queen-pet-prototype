import React, { useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import CartSummary from "../components/CartSummary";

// Mock cart data
const MOCK_CART = [
  { id: 1, name: "Premium Dog Food", price: 25.99, quantity: 2, image: "" },
  { id: 2, name: "Cat Toy", price: 9.99, quantity: 1, image: "" },
];

export default function Checkout() {
  const [cartItems, setCartItems] = useState(MOCK_CART);

  const handleCheckout = (formData) => {
    console.log("Checkout Data:", formData);
    alert("Order Placed Successfully!");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col md:flex-row gap-6">
      <CheckoutForm onSubmit={handleCheckout} />
      <CartSummary cartItems={cartItems} />
    </div>
  );
}
