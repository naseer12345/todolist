import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState('');

  const addItem = () => {
    if (inputText) {
      setItems(prevItems => [...prevItems, inputText]);
      setInputText(''); 
    }
  };

  const deleteItem = (indexToDelete) => {
    setItems(prevItems => prevItems.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="App">
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
