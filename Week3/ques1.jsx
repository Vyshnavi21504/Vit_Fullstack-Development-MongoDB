import { useState } from "react";

function TextUpdater() {
  const [text, setText] = useState("");

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full"
      />
      <p className="mt-4 text-lg font-semibold">You typed: {text}</p>
    </div>
  );
}