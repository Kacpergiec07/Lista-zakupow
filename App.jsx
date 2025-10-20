import React, { useState } from "react";
import ShoppingItem from "./ShoppingItem";
import "./ShoppingList.css";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Mleko", quantity: 2, bought: false },
    { id: 2, name: "Chleb", quantity: 1, bought: true },
    { id: 3, name: "Jajka", quantity: 12, bought: false },
    { id: 4, name: "Masło", quantity: 1, bought: false },
  ]);

  const toggleShoppingItem = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, bought: !item.bought } : item));
  };

  const deleteShoppingItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editQuantity = (id, newQuantity) => {
    setItems(items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  return (
    <div className="container">
      <h1>Lista zakupów</h1>
      {items.map(item => (
        <ShoppingItem
          key={item.id}
          item={item}
          onToggle={toggleShoppingItem}
          onDelete={deleteShoppingItem}
          onEditQuantity={editQuantity}
        />
      ))}
      {items.length === 0 && <p>Lista jest pusta!</p>}
    </div>
  );
}

export default App;
