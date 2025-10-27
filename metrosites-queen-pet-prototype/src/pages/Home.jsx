import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Tag } from "lucide-react";

// Import first three images
import catfood from "../assets/catfood.webp";
import cattoy from "../assets/cattoy.webp";
import combforpet from "../assets/combforpet.webp";

export default function Home() {
  // Product data
  const products = [
    {
      img: catfood,
      title: "Premium Cat Food",
      description: "Nutritious, high-quality cat food for healthy growth and shiny fur.",
      price: "R120.00",
    },
    {
      img: cattoy,
      title: "Interactive Cat Toy",
      description: "Fun toy designed to keep your cat active, curious, and entertained.",
      price: "R85.00",
    },
    {
      img: combforpet,
      title: "Pet Grooming Comb",
      description: "Gentle grooming comb that removes tangles and loose fur effortlessly.",
      price: "R99.00",
    },
  ];

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

      {/* Product Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-shadow"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full rounded-xl object-contain h-48 mb-4"
            />
            <h3 className="text-xl font-semibold text-[oklch(70%_0.05_50)] mb-2">
              {product.title}
            </h3>
            <p className="text-gray-600 text-center mb-3">{product.description}</p>
            <p className="text-lg font-bold text-pink-500 mb-4">{product.price}</p>
            <button className="btn bg-gradient-to-r from-pink-400 to-yellow-400 text-white border-none hover:scale-105 transition-transform">
              Add to Cart <ShoppingCart className="inline ml-2" size={18} />
            </button>
          </div>
        ))}
      </motion.div>

      {/* Limited Time Offer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="w-full max-w-6xl mb-12 p-6 bg-gradient-to-r from-pink-100 via-yellow-100 to-pink-100 rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center"
      >
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-2 text-[oklch(70%_0.05_50)]">
            Limited Time Offer!
          </h2>
          <p className="text-gray-700">
            Get 20% off on all premium pet toys and accessories!
          </p>
        </div>
        <button className="btn btn-primary bg-gradient-to-r from-pink-400 to-yellow-400 text-white border-none hover:scale-105 transition-transform">
          Grab the Deal <Tag className="inline ml-2" size={20} />
        </button>
      </motion.div>

      {/* Call-to-Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-[oklch(70%_0.05_50)]">
          Your Pet Deserves the Best!
        </h2>
        <button className="btn bg-gradient-to-r from-pink-400 to-yellow-400 text-white border-none hover:scale-105 transition-transform">
          Explore All Products <ShoppingCart className="inline ml-2" size={20} />
        </button>
      </motion.div>
    </div>
  );
}
