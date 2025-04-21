import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Product Details - ID: {id}</h2>
      <p className="mt-2">More information about product {id} goes here.</p>
    </div>
  );
};

export default Details;
