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

const Counter3 = () => {
  // const [state, dispatch] = useReducer(reducer, initialState)
  // using multiple useReducers
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatch2] = useReducer(reducer, initialState);

  return (
    <div className="center">
      <h4>Count - {count}</h4>
      <button className="btn" onClick={() => dispatch("Increment")}>
        Increment
      </button>
      <button className="btn red" onClick={() => dispatch("Reset")}>
        Reset
      </button>
      <button className="btn" onClick={() => dispatch("Decrement")}>
        Decrement
      </button>
      <h4>Count Two - {countTwo}</h4>
      <button className="btn" onClick={() => dispatch2("Increment")}>
        Increment
      </button>
      <button className="btn red" onClick={() => dispatch2("Reset")}>
        Reset
      </button>
      <button className="btn" onClick={() => dispatch2("Decrement")}>
        Decrement
      </button>
    </div>
  );
};

export default Counter3;
