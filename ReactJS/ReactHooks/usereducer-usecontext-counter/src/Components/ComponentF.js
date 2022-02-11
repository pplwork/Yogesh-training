import React, { useContext } from "react";
import { CountContext } from "../App";

const ComponentF = () => {
  const countContext = useContext(CountContext);

  return (
    <div className="center">
      ComponentF: {countContext.countState}
      <button
        className="btn"
        onClick={() => countContext.countDispatch("Increment")}
      >
        Increment
      </button>
      <button
        className="btn red"
        onClick={() => countContext.countDispatch("Reset")}
      >
        Reset
      </button>
      <button
        className="btn "
        onClick={() => countContext.countDispatch("Decrement")}
      >
        Decrement
      </button>
    </div>
  );
};

export default ComponentF;
