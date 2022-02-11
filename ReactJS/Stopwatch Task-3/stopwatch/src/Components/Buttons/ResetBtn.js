import React, { useContext } from "react";
import { ButtonsContext } from "../Home";

const ResetBtn = ({ handleReset }) => {
  const buttonsContext = useContext(ButtonsContext);
  return (
    <button
      onClick={buttonsContext.resetState}
      className="waves-effect red btn"
    >
      Reset
    </button>
  );
};

export default React.memo(ResetBtn);
