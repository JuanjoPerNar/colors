import React, { useEffect, useRef, useState } from 'react';

const BoxColor = ({ color, inputValue }) => {
  const boxRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(inputValue === color);
  }, [inputValue, color]);

  const renderText = () => {
    if (!inputValue) return '';
    return active
      ? `¡Soy el color ${color}!`
      : `No soy el color ${inputValue}`;
  };

  return (
    <div
      ref={boxRef}
      className={`box ${active ? color : ''}`}
      style={{
        border: `3px solid ${color}`,
        color: active ? 'black' : color,
      }}
    >
      <p>{renderText()}</p>
    </div>
  );
};

export default BoxColor;
