import React from "react";
import LapBtn from "./Buttons/LapBtn";
import ResetBtn from "./Buttons/ResetBtn";
import StartBtn from "./Buttons/StartBtn";
import StopBtn from "./Buttons/StopBtn";

const Buttons = () => {
  return (
    <div className="buttons">
      <StartBtn />
      <StopBtn />
      <ResetBtn />
      <LapBtn />
    </div>
  );
};

export default React.memo(Buttons);
