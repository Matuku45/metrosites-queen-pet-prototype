import React from "react";
import ProductCard from "../components/ProductCard";

// Import local images from assets
import catfood from "../assets/catfood.webp";
import cattoy from "../assets/cattoy.webp";
import combforpet from "../assets/combforpet.webp";
import dogshapoo from "../assets/dogshapoo.webp";
import pet from "../assets/pet.webp";
import pet2 from "../assets/pet2.webp";

// Mock products data
const MOCK_PRODUCTS = [
  { id: 1, name: "Premium Pets Shampoo", price: 299, image: dogshapoo, category: "Dog Food" },
  { id: 2, name: "Cat Toy", price: 99, image: cattoy, category: "Cat Toy" },
  { id: 3, name: "Pet Shampoo", price: 149, image: dogshapoo, category: "Shampoo" },
  { id: 4, name: "Cat Food", price: 1200, image: pet, category: "Cage" },
  { id: 5, name: "Pet Comb", price: 79, image: combforpet, category: "Grooming" },
  { id: 6, name: "Pet Bedding", price: 499, image: pet2, category: "Accessories" },
];

export default function Products() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-pink-500">
        Our Products
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
