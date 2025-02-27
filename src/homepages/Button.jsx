import React from "react";

export function Button({ onClick, children, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-semibold rounded-md shadow-md transition-all ${className}`}
    >
      {children}
    </button>
  );
}
