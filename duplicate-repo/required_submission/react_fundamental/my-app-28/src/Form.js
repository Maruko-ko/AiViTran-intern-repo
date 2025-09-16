// src/Form.js
import React, { useState } from 'react';

function Form() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (inputValue.trim() === '') return; // prevent empty items
    setItems([...items, inputValue]);
    setInputValue(''); // clear input
  };

  return (
    <div>
      <h2>Simple Form with List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> // dynamic rendering
        ))}
      </ul>
    </div>
  );
}

export default Form;
