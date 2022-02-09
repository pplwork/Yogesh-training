import React from "react";
import StartBtn from "./Buttons/StartBtn";
import LapBtn from "./Buttons/LapBtn";
import ResetBtn from "./Buttons/ResetBtn";
import StopBtn from "./Buttons/StopBtn";
import Timer from "./Timer/Timer";
import Lap from "./Laps/Laps";

const Home = (props) => {
  return (
    <React.Fragment>
      <Timer />

      <div className="center buttons">
        <StartBtn />
        <LapBtn />
        <ResetBtn />
        <StopBtn />
      </div>

      <Lap />
    </React.Fragment>
  );
};

export default Home;
