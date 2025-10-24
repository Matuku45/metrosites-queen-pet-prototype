import React from "react";
import { motion } from "framer-motion";
import { Users, Heart, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 px-6 py-12">
      {/* Page Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center mb-6 text-pink-500"
      >
        About Queen Pet Products
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center text-gray-700 max-w-3xl mx-auto mb-12"
      >
        Queen Pet Products & Accessories is dedicated to providing premium quality pet products for your beloved companions. We focus on style, safety, and comfort, ensuring that pets receive only the best products from toys to grooming essentials.
      </motion.p>

      {/* Info Cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        <div className="card bg-white shadow-xl p-6 text-center rounded-xl hover:scale-105 transition-transform">
          <Users size={50} className="text-pink-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Our Community</h2>
          <p className="text-gray-600">We celebrate pets and pet owners by providing a premium shopping experience and fostering a supportive community.</p>
        </div>

        <div className="card bg-white shadow-xl p-6 text-center rounded-xl hover:scale-105 transition-transform">
          <Heart size={50} className="text-pink-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">To provide high-quality products that enrich the lives of pets and make every pet owner proud of their purchase.</p>
        </div>

        <div className="card bg-white shadow-xl p-6 text-center rounded-xl hover:scale-105 transition-transform">
          <Award size={50} className="text-pink-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Our Quality</h2>
          <p className="text-gray-600">All our products are carefully curated for quality, durability, and safety, ensuring pets get the best of the best.</p>
        </div>
      </motion.div>
    </div>
  );
}
