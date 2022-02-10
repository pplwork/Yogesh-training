import React, { useState } from "react";

// using prevState in useState() hook
const Counter2 = () => {
  const [Count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const handleDecrement = () => {
    if (Count > 0) {
      setCount((prevCount) => {
        return prevCount - 1;
      });
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="center">
      <h2>Counter</h2>
      <h4>{Count}</h4>

      <div className="buttons">
        <button onClick={handleIncrement} className="btn blue">
          Increment
        </button>
        <button onClick={handleReset} className="btn green">
          Reset
        </button>
        <button onClick={handleDecrement} className="btn red">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter2;
