import React, { useState } from "react";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

// ✅ Static image imports
import catfood from "../assets/catfood.webp";
import cattoy from "../assets/cattoy.webp";
import combforpet from "../assets/combforpet.webp";

const MOCK_CART = [
  {
    id: 1,
    name: "Premium Cat Food",
    price: 25.99,
    quantity: 2,
    image: catfood,
  },
  {
    id: 2,
    name: "Cat Toy",
    price: 9.99,
    quantity: 1,
    image: cattoy,
  },
  {
    id: 3,
    name: "Pet Comb",
    price: 15.5,
    quantity: 1,
    image: combforpet,
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(MOCK_CART);

  const removeItem = (id) => setCartItems(cartItems.filter((item) => item.id !== id));

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-yellow-50 to-pink-50 flex flex-col items-center p-6">
      {/* 🛍️ Header */}
      <header className="w-full text-center mt-8 mb-10">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 drop-shadow-md animate-fadeIn">
          🛍️ Your Shopping Cart
        </h1>
        <p className="text-gray-600 mt-2 text-lg">Review your items before checkout</p>
      </header>

      {/* 🧺 Cart Content */}
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeItem}
                onQuantityChange={updateQuantity}
              />
            ))
          ) : (
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <p className="text-gray-500 text-lg">Your cart is empty. Start shopping now!</p>
            </div>
          )}
        </div>

        {/* 🧾 Summary */}
        <CartSummary cartItems={cartItems} />
      </div>
    </div>
  );
}
