import React from "react";

const StartBtn = ({ handleStart }) => {
  return (
    <button
      onClick={handleStart}
      className="waves-effect waves-light btn green"
    >
      Start
    </button>
  );
};

export default StartBtn;
