import React from "react";

const Laps = ({ laps }) => {
  let lapsList = laps.map((lap, i) => {
    return (
      <p className="center laps" key={i}>
        {("0" + Math.floor(lap.time / 3600000)).slice(-2)}:
        {("0" + Math.floor((lap.time / 60000) % 60)).slice(-2)}:
        {("0" + Math.floor((lap.time / 1000) % 60)).slice(-2)}:
        {("0" + ((lap.time / 10) % 100)).slice(-2)}
      </p>
    );
  });

  return <>{lapsList}</>;
};

export default Laps;
