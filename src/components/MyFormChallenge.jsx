import React, { useRef, useState } from 'react';
import BoxColor from './BoxColor';

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

const MyForm = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  const handleChange = () => {
    const value = inputRef.current.value.toLowerCase().trim();
    setInputValue(value);
  };

  return (
    <div>
      <h1>Cajas de Color</h1>
      <input
        type="text"
        ref={inputRef}
        placeholder="Escribe un color"
        onChange={handleChange}
      />
      <div className="container">
        {colors.map((color) => (
          <BoxColor key={color} color={color} inputValue={inputValue} />
        ))}
      </div>
    </div>
  );
};

export default MyForm;
