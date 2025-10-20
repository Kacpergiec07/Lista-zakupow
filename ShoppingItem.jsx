import React, { useEffect, useState } from "react";
import "./ShoppingList.css";

function ShoppingItem({ item, onToggle, onDelete, onEditQuantity }) {
  const { id, name, quantity, bought } = item;

  // Stan lokalny do animacji
  const [visible, setVisible] = useState(false);

  // Efekt włączający animację przy mount
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`item ${visible ? "fade-in" : ""}`}
    >
      <input
        type="checkbox"
        checked={bought}
        onChange={() => onToggle(id)}
      />
      <span className={bought ? "bought" : ""}>
        {name} - {quantity}
      </span>
      <button className="quantity" onClick={() => onEditQuantity(id, Math.max(1, quantity - 1))}>-</button>
      <button className="quantity" onClick={() => onEditQuantity(id, quantity + 1)}>+</button>
      <button className="remove" onClick={() => onDelete(id)}>Usuń</button>
    </div>
  );
}

export default ShoppingItem;
