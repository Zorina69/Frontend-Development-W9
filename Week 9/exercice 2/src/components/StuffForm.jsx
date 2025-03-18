import React, { useState } from 'react';

export default function StuffForm({onAddStuff}) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAddStuff = (e) => {
    e.preventDefault();
    onAddStuff(name, parseFloat(price))
    setName("");
    setPrice("");
  };

  return (
  
    <form className="stuff-form" onSubmit={handleAddStuff}>
      <p>Stuff name</p>
      <input
        type="text"
        placeholder="Banana"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Stuff price</p>
      <input
        type="number"
        placeholder="15"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">Add Stuff</button>
    </form>
  
  );
}