import React, { useState } from "react";
import { User, Mail, MapPin, CreditCard } from "lucide-react";

export default function CheckoutForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 p-6 bg-white border rounded-lg shadow-lg space-y-4 animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="flex flex-col space-y-3">
        <div className="input-group">
          <User /> 
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="input input-bordered w-full" />
        </div>
        <div className="input-group">
          <Mail />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input input-bordered w-full" />
        </div>
        <div className="input-group">
          <MapPin />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="input input-bordered w-full" />
        </div>
        <div className="flex gap-3">
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="input input-bordered w-full" />
          <input type="text" name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} className="input input-bordered w-1/3" />
        </div>
        <div className="input-group">
          <CreditCard />
          <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} className="input input-bordered w-full" />
        </div>
      </div>
      <button type="submit" className="btn btn-success w-full mt-4">Place Order</button>
    </form>
  );
}
