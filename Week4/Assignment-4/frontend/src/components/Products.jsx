import React from 'react';
import { useNavigate } from 'react-router-dom';

const sampleProducts = [
  { id: 1, name: 'Laptop', price: '$999', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Phone', price: '$499', image: 'https://via.placeholder.com/150' },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 grid md:grid-cols-2 gap-6">
      {sampleProducts.map(product => (
        <div key={product.id} className="border rounded-lg p-4 text-center">
          <img src={product.image} alt={product.name} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-gray-700">{product.price}</p>
          <button
            onClick={() => navigate(`/product/${product.id}`)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
