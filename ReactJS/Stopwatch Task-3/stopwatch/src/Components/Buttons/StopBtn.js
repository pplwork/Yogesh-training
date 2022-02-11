import React, { useContext } from "react";
import { ButtonsContext } from "../Home";

const StopBtn = () => {
  const buttonsContext = useContext(ButtonsContext);
  return (
    <button onClick={buttonsContext.stopState} className="waves-effect waves-light btn">
      Stop
    </button>
  );
};

export default React.memo(StopBtn);
