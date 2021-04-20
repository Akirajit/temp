import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import "./ItemListContainer.css";
import ItemCount from "../components/ItemCount/ItemCount";

export default function ItemListContainer({ greeting }) {
  const [number, setNumber] = useState(0);

  const onAdd = (counter) => {
    alert(`${counter} items have been added to the cart.`);
  };

  return (
    <div>
      <h3 className="title">{greeting}</h3>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </div>
  );
}
