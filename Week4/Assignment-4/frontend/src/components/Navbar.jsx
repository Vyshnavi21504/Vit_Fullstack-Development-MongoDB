import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">MyStore</h1>
      <ul className="flex gap-6">
        <li><a href="/" className="text-gray-600 hover:text-blue-600">Home</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
