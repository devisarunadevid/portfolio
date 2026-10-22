import React from "react";

const Bubble = ({
  size,
  delay,
  duration,
  color,
  opacity = 0.3,
  left,
  top,
}) => {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        opacity,
        animation: `float ${duration}s ease-in-out ${delay}s infinite`,
        left,
        top,
      }}
    />
  );
};

export default Bubble;
