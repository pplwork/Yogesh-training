import React, { useState } from "react";
import HookMouse from "./HookMouse";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div className="center">
      <button
        className="btn"
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Toggle Display
      </button>
      {display && <HookMouse />}
    </div>
  );
};

export default MouseContainer;
