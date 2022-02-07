import React from "react";

const StopBtn = ({ handleStop }) => {
  return (
    <button onClick={handleStop} className="waves-effect waves-light btn">
      Stop
    </button>
  );
};

export default StopBtn;
