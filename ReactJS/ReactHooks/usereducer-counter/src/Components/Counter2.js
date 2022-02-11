import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment1":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "Decrement1":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "Reset":
      return initialState;
    case "Increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "Decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    default:
      return state;
  }
};

const Counter2 = () => {
  // const [state, dispatch] = useReducer(reducer, initialState)
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="center">
      <h4>First Count - {count.firstCounter}</h4>
      <h4>Second Count - {count.secondCounter}</h4>
      <button
        className="btn"
        onClick={() => dispatch({ type: "Increment1", value: 1 })}
      >
        Increment
      </button>
      <button className="btn red" onClick={() => dispatch({ type: "Reset" })}>
        Reset
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "Decrement1", value: 1 })}
      >
        Decrement
      </button>
      <div>
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: "Increment2", value: 5 });
          }}
        >
          Increment 5
        </button>
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: "Decrement2", value: 5 });
          }}
        >
          Decrement 5
        </button>
      </div>
    </div>
  );
};

export default Counter2;
