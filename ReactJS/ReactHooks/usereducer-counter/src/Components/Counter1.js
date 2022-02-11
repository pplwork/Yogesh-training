import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

const Counter1 = () => {
  // const [state, dispatch] = useReducer(reducer, initialState)
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="center">
      <h4>Count - {count}</h4>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
    </div>
  );
};

export default Counter1;
