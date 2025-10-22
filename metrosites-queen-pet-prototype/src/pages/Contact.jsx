// src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 px-6 py-12">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center mb-6 text-pink-500"
      >
        📩 Contact Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center text-gray-700 max-w-2xl mx-auto mb-12"
      >
        Reach out to Queen Pet Products for inquiries, orders, or support. We’re always happy to help you and your beloved pets.
      </motion.p>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
      >
        <div className="card bg-white shadow-xl p-6 text-center hover:scale-105 transition-transform">
          <Mail size={40} className="text-pink-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p className="text-gray-600">support@queenpet.com</p>
        </div>

        <div className="card bg-white shadow-xl p-6 text-center hover:scale-105 transition-transform">
          <Phone size={40} className="text-pink-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Phone</h2>
          <p className="text-gray-600">+27 123 456 7890</p>
        </div>

        <div className="card bg-white shadow-xl p-6 text-center hover:scale-105 transition-transform">
          <MapPin size={40} className="text-pink-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Visit Us</h2>
          <p className="text-gray-600">123 Pet Street, Johannesburg</p>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-pink-500 mb-6 text-center">Send us a message</h2>
        <form className="bg-white shadow-lg rounded-lg p-8 flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
          <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
          <textarea placeholder="Your Message" rows={4} className="textarea textarea-bordered w-full"></textarea>
          <button className="btn bg-gradient-to-r from-pink-400 to-yellow-400 text-white border-none hover:scale-105 transition-transform">
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}
