import React, { useState } from "react";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

// Mock Data
const MOCK_CART = [
  {
    id: 1,
    name: "Premium Dog Food",
    price: 25.99,
    quantity: 2,
    image: "https://via.placeholder.com/80?text=Dog+Food",
  },
  {
    id: 2,
    name: "Cat Toy",
    price: 9.99,
    quantity: 1,
    image: "https://via.placeholder.com/80?text=Cat+Toy",
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(MOCK_CART);

  const removeItem = (id) => setCartItems(cartItems.filter(item => item.id !== id));
  const updateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: Number(quantity) } : item));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 animate-fadeIn">Your Cart</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={removeItem}
              onQuantityChange={updateQuantity}
            />
          ))}
        </div>
        <CartSummary cartItems={cartItems} />
      </div>
    </div>
  );
}
