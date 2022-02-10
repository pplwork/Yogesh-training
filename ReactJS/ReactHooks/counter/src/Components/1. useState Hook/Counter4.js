import React, { useState } from "react";

const Counter4 = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    //   make a shallow copy, append the item and then pass to setter fn. given by hook
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div className="center">
      <button className="btn" onClick={addItem}>
        Add item
      </button>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
};

export default Counter4;
