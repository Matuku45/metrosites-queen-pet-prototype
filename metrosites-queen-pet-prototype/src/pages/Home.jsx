// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Tag, Star } from "lucide-react";
import ProductCard from "../components/ProductCard";

// Featured products with numeric prices
const featuredProducts = [
  { name: "Premium Dog Food", price: 25.99, category: "Food", rating: 5 },
  { name: "Luxury Cat Bed", price: 49.99, category: "Accessories", rating: 4 },
  { name: "Interactive Pet Toy", price: 19.99, category: "Toys", rating: 5 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-yellow-50 px-6 py-12 flex flex-col items-center">

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[oklch(70%_0.05_50)]">
          🐾 Welcome to Queen Pet Products
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Discover premium products for your beloved pets – from toys to accessories, food, and more!
        </p>
        <button className="btn bg-gradient-to-r from-pink-400 to-yellow-400 text-white border-none hover:scale-105 transition-transform">
          Shop Now <ShoppingCart className="inline ml-2" size={20} />
        </button>
      </motion.div>

      {/* Promotional Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="w-full max-w-6xl mb-12 p-6 bg-gradient-to-r from-pink-100 via-yellow-100 to-pink-100 rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center"
      >
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-2 text-[oklch(70%_0.05_50)]">Limited Time Offer!</h2>
          <p className="text-gray-700">Get 20% off on all premium pet toys and accessories!</p>
        </div>
        <button className="btn btn-primary bg-gradient-to-r from-pink-400 to-yellow-400 text-white border-none hover:scale-105 transition-transform">
          Grab the Deal <Tag className="inline ml-2" size={20} />
        </button>
      </motion.div>

      {/* Featured Products Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {featuredProducts.map((product, index) => (
          <ProductCard key={index} product={product}>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-700 font-semibold">${product.price.toFixed(2)}</span>
              <div className="flex items-center">
                {Array.from({ length: product.rating }).map((_, i) => (
                  <Star key={i} className="text-yellow-400 mr-1" size={16} />
                ))}
              </div>
            </div>
          </ProductCard>
        ))}
      </motion.div>

      {/* Call-to-Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-[oklch(70%_0.05_50)]">Your Pet Deserves the Best!</h2>
        <button className="btn bg-gradient-to-r from-pink-400 to-yellow-400 text-white border-none hover:scale-105 transition-transform">
          Explore All Products <ShoppingCart className="inline ml-2" size={20} />
        </button>
      </motion.div>

    </div>
  );
}
