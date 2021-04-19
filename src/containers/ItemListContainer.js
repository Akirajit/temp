import React, { useState } from "react";
import "./ItemListContainer.css";
import ItemCount from "../components/ItemCount/ItemCount";

export default function ItemListContainer({ greeting }) {
  const [number, setNumber] = useState(0);

  const decrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const increment = () => {
    setNumber(number + 1);
  };

  const onAdd = () => {
    alert("testing");
  };

  return (
    <div>
      <h3 className="title">{greeting}</h3>
      <ItemCount
        initial={4}
        stock={5}
        decrement={decrement}
        increment={increment}
        number={number}
        onAdd={onAdd}
      />
    </div>
  );
}
