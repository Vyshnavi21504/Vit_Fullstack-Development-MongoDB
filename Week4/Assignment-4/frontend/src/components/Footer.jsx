import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2025 MyStore. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#" className="hover:text-blue-300">Facebook</a>
        <a href="#" className="hover:text-blue-300">Twitter</a>
        <a href="#" className="hover:text-blue-300">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
