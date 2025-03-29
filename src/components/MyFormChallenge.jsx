import React, { useState } from "react";
import BoxColor from "./BoxColor";

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

function MyForm() {
  const [value, setValue] = useState('');

  const activeIndex = value.trim() !== '' 
    ? colors.findIndex(color => value.trim().toLowerCase() === color.toLowerCase())
    : -1;

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form>
        <input 
          type="text" 
          value={value}
          placeholder="Escribe un color"
          onChange={handleInputChange}
        />
      </form>

      <div className="container">
        {colors.map((color, index) => (
          <BoxColor 
            key={color}
            color={color}
            value={value}
            active={activeIndex === index}
          />
        ))}
      </div>
    </div>
  );
}

export default MyForm;
