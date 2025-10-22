import React from "react";
import ProductCard from "../components/ProductCard";

// Mock products data
const MOCK_PRODUCTS = [
  { id: 1, name: "Premium Dog Food", price: 25.99, image: "https://via.placeholder.com/200?text=Dog+Food" },
  { id: 2, name: "Cat Toy", price: 9.99, image: "https://via.placeholder.com/200?text=Cat+Toy" },
  { id: 3, name: "Pet Shampoo", price: 15.49, image: "https://via.placeholder.com/200?text=Shampoo" },
  { id: 4, name: "Bird Cage", price: 120.0, image: "https://via.placeholder.com/200?text=Bird+Cage" },
];

export default function Products() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 animate-fadeIn">Our Products</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {MOCK_PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
