// src/Button.js
import React from 'react';

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        bg-blue-500 text-white px-4 py-2 rounded-lg
        hover:bg-blue-600
        active:bg-blue-700
        transition-colors duration-200
        font-semibold
      "
    >
      {children}
    </button>
  );
}

export default Button;
