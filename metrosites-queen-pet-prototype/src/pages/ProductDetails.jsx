import React from "react";
import { useParams } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

// Mock data (for demo, in real app you'd fetch by ID)
const MOCK_PRODUCTS = [
  { id: 1, name: "Premium Dog Food", price: 25.99, description: "Healthy and nutritious dog food for all breeds.", image: "https://via.placeholder.com/400?text=Dog+Food" },
  { id: 2, name: "Cat Toy", price: 9.99, description: "Fun toy to keep your cat active and happy.", image: "https://via.placeholder.com/400?text=Cat+Toy" },
  { id: 3, name: "Pet Shampoo", price: 15.49, description: "Gentle shampoo suitable for all pets.", image: "https://via.placeholder.com/400?text=Shampoo" },
  { id: 4, name: "Bird Cage", price: 120.0, description: "Spacious and comfortable cage for birds.", image: "https://via.placeholder.com/400?text=Bird+Cage" },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = MOCK_PRODUCTS.find(p => p.id === parseInt(id));

  if (!product) {
    return <p className="p-6">Product not found!</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center animate-fadeIn">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-4" />
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>
        <button className="btn btn-primary flex items-center gap-2">
          <ShoppingCart size={18} /> Add to Cart
        </button>
      </div>
    </div>
  );
}
