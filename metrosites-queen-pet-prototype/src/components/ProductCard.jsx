// src/components/ProductCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function ProductCard({ product, children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="card bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between"
    >
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 mb-4 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-full flex items-center justify-center">
          <ShoppingCart size={40} className="text-pink-400" />
        </div>
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
        <span className="text-gray-600">{product.category}</span>
      </div>
      {children}
    </motion.div>
  );
}
