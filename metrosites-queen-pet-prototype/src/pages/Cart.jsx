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
    <div className="p-6 bg-gradient-to-b from-pink-50 to-yellow-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-[oklch(70%_0.05_50)] text-center">
        🛍️ Your Shopping Cart
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
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
            <p className="text-gray-600 text-center text-lg">
              Your cart is empty. Start shopping now!
            </p>
          )}
        </div>

        <CartSummary cartItems={cartItems} />
      </div>
    </div>
  );
}
