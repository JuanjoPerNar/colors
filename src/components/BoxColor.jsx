/* import React from "react";

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
 */

import React, { useEffect, useRef, useState } from 'react';

const BoxColor = ({ color, inputValue }) => {
  const boxRef = useRef(null);
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    setIsMatch(inputValue === color);
  }, [inputValue, color]);

  const renderText = () => {
    if (!inputValue) return ''; // Si el input está vacío, no mostramos nada
    return isMatch
      ? `¡Soy el color ${color}!`
      : `No soy el color ${inputValue}`;
  };

  return (
    <div
      ref={boxRef}
      className={`box ${isMatch ? color : ''}`}
      style={{
        border: `3px solid ${color}`,
        color: isMatch ? 'black' : color,
      }}
    >
      <p>{renderText()}</p>
    </div>
  );
};

export default BoxColor;
