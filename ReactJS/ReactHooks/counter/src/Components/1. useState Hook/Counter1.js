import React, { useState } from "react";

const Counter1 = () => {
  const [count, setcount] = useState(0);

  const handleIncrement = () => {
    setcount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };

  return (
    <div className="center">
      <h2>Counter</h2>
      <h4>{count}</h4>

      <div className="buttons">
        <button onClick={handleIncrement} className="btn blue">
          +
        </button>
        <button onClick={handleDecrement} className="btn red">
          -
        </button>
      </div>
    </div>
  );
};

export default Counter1;
