import React, { useState } from "react";
import ShoppingItem from "./ShoppingItem";

function ShoppingList() {
  // Stan z listą produktów
  const [items, setItems] = useState([
    { id: 1, name: "Mleko", quantity: 2, bought: false },
    { id: 2, name: "Chleb", quantity: 1, bought: true },
    { id: 3, name: "Jajka", quantity: 12, bought: false },
    { id: 4, name: "Masło", quantity: 1, bought: false },
  ]);

  // Zmiana statusu kupiony/nie kupiony
  const toggleShoppingItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, bought: !item.bought } : item
    ));
  };

  // Usuwanie produktu
  const deleteShoppingItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Zmiana ilości
  const editQuantity = (id, newQuantity) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}>
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

export default ShoppingList;
