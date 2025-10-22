// src/components/ProductCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function ProductCard({ product, children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow"
    >
      {/* Product Image / Icon */}
      <div className="flex flex-col items-center mb-4">
        <div className="w-32 h-32 mb-4 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-full flex items-center justify-center">
          <ShoppingCart size={40} className="text-pink-400" />
        </div>
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
        <span className="text-gray-600">{product.category}</span>
      </div>

      {/* Price */}
      <div className="text-xl font-semibold text-gray-800 mb-4 text-center">
        ${product.price.toFixed(2)}
      </div>

      {/* Actions / Children */}
      <div className="flex justify-center gap-2">
        <button className="btn btn-primary flex items-center gap-2">
          <ShoppingCart size={18} /> Add to Cart
        </button>
        {children}
      </div>
    </motion.div>
  );
}
