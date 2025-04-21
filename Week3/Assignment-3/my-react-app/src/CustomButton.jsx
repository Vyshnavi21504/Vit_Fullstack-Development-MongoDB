import React from 'react';

const CustomButton = ({ children, onClick }) => {
  const handleClick = () => {
    console.log("Button clicked!");
    if (onClick) onClick();
  };

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200"
      onClick={handleClick}
    >
      {children || "Click Me"}
    </button>
  );
};

export default CustomButton;