// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-[oklch(54.6%_0.245_262.881)] text-white pt-12 pb-6 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Contact Info */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <div className="flex items-center space-x-2">
            <Mail size={20} className="text-pink-400" />
            <span>support@queenpet.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone size={20} className="text-pink-400" />
            <span>+27 123 456 7890</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={20} className="text-pink-400" />
            <span>123 Pet Street, Johannesburg</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col space-y-4 items-center">
          <h3 className="text-xl font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.2, color: "#FACC15" }}
              href="#"
            >
              <Facebook size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#FACC15" }}
              href="#"
            >
              <Instagram size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#FACC15" }}
              href="#"
            >
              <Twitter size={24} />
            </motion.a>
          </div>
        </div>

        {/* Newsletter / CTA */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold mb-2">Subscribe</h3>
          <p>Get updates on the latest pet products and promotions!</p>
          <form className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full md:w-auto flex-1"
            />
            <button className="btn bg-gradient-to-r from-pink-400 to-yellow-400 text-white border-none hover:scale-105 transition-transform">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-8 text-center text-gray-300"
      >
        &copy; {new Date().getFullYear()} Queen Pet Products & Accessories. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
