import React from "react";

export default function Button({ className, title }) {
  return (
    <button
      className={`w-36 h-11 bg-[#111111] text-white rounded-xl ${className}`}
    >
      {title}
    </button>
  );
}
