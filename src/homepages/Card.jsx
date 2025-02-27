import React from "react";

export function Card({ children }) {
  return (
    <div className="min-w-[250px] shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl bg-white">
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}
