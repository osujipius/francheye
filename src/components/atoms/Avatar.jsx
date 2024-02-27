import React from "react";

export default function Avatar({ src, className }) {
  return (
    <div className={`rounded-full cursor-pointer h-16 w-16 ${className}`}>
      <img src={src} className="w-full h-full" />
    </div>
  );
}
