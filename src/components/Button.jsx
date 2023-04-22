import React from "react";

const Button = ({ color, bgColor, text, borderRadius, size }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`hover:scale-105 active:scale-90 transition-all ease-in-out duration-300 text-${size} p-3 hover:drop-shadow-xl`}>
      {text}
    </button>
  );
};

export default Button;
