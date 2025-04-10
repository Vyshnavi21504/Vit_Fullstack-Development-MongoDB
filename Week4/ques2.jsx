import React, { useState } from "react";

export default function ProductDetailsPage() {
  const [product] = useState({
    name: "Eco Bottle",
    price: "$15",
    image: "https://via.placeholder.com/300",
    description: "A durable, reusable eco-friendly bottle made of bamboo and glass."
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-10">
      <img src={product.image} alt={product.name} className="w-full rounded mb-4" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-green-600 font-semibold my-2">{product.price}</p>
      <p className="text-gray-700">{product.description}</p>
    </div>
  );
}