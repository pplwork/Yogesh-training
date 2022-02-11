import React, { useContext } from "react";
import { ButtonsContext } from "../Home";

const LapBtn = () => {
  const buttonsContext = useContext(ButtonsContext);
  return (
    <button onClick={buttonsContext.lapState} className="waves-effect blue btn">
      Lap
    </button>
  );
};

export default React.memo(LapBtn);
