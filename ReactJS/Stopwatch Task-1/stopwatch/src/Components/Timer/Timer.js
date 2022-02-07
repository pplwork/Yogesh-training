import React from "react";

const Timer = ({ time }) => {
  return (
    <>
      <h3 className="center heading">Stopwatch</h3>
      <div className="stopwatch center">
        <h3>
          {("0" + Math.floor(time / 3600000)).slice(-2)}:
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
          {("0" + ((time / 10) % 100)).slice(-2)}
        </h3>
      </div>
    </>
  );
};

export default Timer;
