import React from "react";

const Bubble = ({ size, delay, duration, color }) => {
  return (
    <div
      className="absolute rounded-full opacity-30"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        animation: `float ${duration}s ease-in-out ${delay}s infinite`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );
};

export default Bubble;
