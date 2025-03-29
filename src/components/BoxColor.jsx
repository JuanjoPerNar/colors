import React from "react";

const BoxColor = ({ color, value, active }) => {
  const textStyle = active ? { color: 'black' } : { color: color }

  const textContent = active 
    ? `Soy el color ${value}` 
    : value.trim() !== '' 
      ? `No soy el color ${value}` 
      : 'No soy el color'

  return (
    <div 
      className={`box ${color}`}
      style={{ backgroundColor: active ? color : '', border: `2px solid ${color}` }}
    >
      <p style={textStyle}>{textContent}</p>
    </div>
  )
}

export default BoxColor;
