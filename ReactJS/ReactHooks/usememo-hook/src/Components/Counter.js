import React, { useState, useMemo } from "react";

// useCallback() hook v/s useMemo() hook
// useCallback caches the provided function instance itself while useMemo invokes the function & caches its result. 
// when you want to caches the function use [useCallback()] hook, when you want to cache the result of a function use [useMemo()] hook.

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button className="btn" onClick={incrementOne}>
          Count One - {counterOne}
        </button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button className="btn" onClick={incrementTwo}>
          Count Two - {counterTwo}
        </button>
      </div>
    </div>
  );
};

export default Counter;
