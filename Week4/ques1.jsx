import React from "react";

const products = [
  { id: 1, name: "Eco Bottle", price: "$15", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Bamboo Brush", price: "$5", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Reusable Bag", price: "$10", image: "https://via.placeholder.com/150" },
];

export default function HomePage() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">EcoStore</h1>
        <ul className="flex gap-6">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#" className="hover:text-blue-600">Products</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="text-center py-16 bg-green-50">
        <h2 className="text-4xl font-bold mb-4">Sustainable Living Starts Here</h2>
        <p className="text-lg text-gray-600">Shop eco-friendly products at affordable prices.</p>
      </section>

      {/* Product Section */}
      <section className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded p-4 text-center shadow hover:shadow-md transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-green-600 mt-2">{product.price}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={() => alert(`More info about ${product.name}`)}>View Details</button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2025 EcoStore. All rights reserved.</p>
        <div className="flex justify-center mt-2 gap-4">
          <a href="#" className="hover:text-blue-300">Facebook</a>
          <a href="#" className="hover:text-blue-300">Instagram</a>
          <a href="#" className="hover:text-blue-300">Twitter</a>
        </div>
      </footer>
    </div>
  );
}