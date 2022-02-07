import React from "react";

const LapBtn = ({ handleLap }) => {
  return (
    <button onClick={handleLap} className="waves-effect blue btn">
      Lap
    </button>
  );
};

export default LapBtn;
