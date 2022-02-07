import React from "react";

const ResetBtn = ({handleReset}) => {
  return (
    <button onClick={handleReset} className="waves-effect red btn">
      Reset
    </button>
  );
};

export default ResetBtn;
