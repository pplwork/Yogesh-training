import React, { useContext } from "react";
import { ButtonsContext } from "../Home";

const StartBtn = () => {
  const buttonsContext = useContext(ButtonsContext);
  return (
    <button
      onClick={buttonsContext.startState}
      className="waves-effect waves-light btn green"
    >
      Start
    </button>
  );
};

export default React.memo(StartBtn);
