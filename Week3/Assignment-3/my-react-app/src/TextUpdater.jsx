import React, { useState } from 'react';

const TextUpdater = () => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Text Updater</h2>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
        placeholder="Type something..."
      />
      <div className="mt-4 p-3 bg-gray-100 rounded-md">
        <p className="font-semibold">Output:</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextUpdater;