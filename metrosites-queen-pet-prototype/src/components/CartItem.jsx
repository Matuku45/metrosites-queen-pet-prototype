import React from "react";
import { Trash2 } from "lucide-react";

export default function CartItem({ item, onRemove, onQuantityChange }) {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 animate-fadeIn">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
      <div className="flex-1 ml-4">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-gray-500">${item.price}</p>
      </div>
      <input
        type="number"
        value={item.quantity}
        min="1"
        onChange={(e) => onQuantityChange(item.id, e.target.value)}
        className="w-16 text-center border rounded p-1"
      />
      <button
        onClick={() => onRemove(item.id)}
        className="ml-4 text-red-500 hover:text-red-700 transition-colors"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}
