import React, { useEffect, useState, useCallback } from "react";
import Buttons from "./Buttons";
import Laps from "./Laps/Laps";
import Timer from "./Timer/Timer";

export const ButtonsContext = React.createContext();

const Home = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, time]);

  const handleStart = useCallback(() => {
    setIsRunning(true);
  }, [setIsRunning]);

  const handleStop = useCallback(() => {
    setIsRunning(false);
  }, [setIsRunning]);

  const handleReset = useCallback(() => {
    if (isRunning === false) {
      setIsRunning(false);
      setTime(0);
      setLaps([]);
    }
  }, [isRunning, setIsRunning, setTime, setLaps]);

  const handleLap = useCallback(() => {
    if (time > 0) {
      const lap = {
        time: time,
      };
      const newArr = [...laps, lap];
      setLaps(newArr);
    }
  }, [time, laps]);

  return (
    <div className="home">
      <Timer time={time} />
      <ButtonsContext.Provider
        value={{
          startState: handleStart,
          stopState: handleStop,
          resetState: handleReset,
          lapState: handleLap,
        }}
      >
        <Buttons />
      </ButtonsContext.Provider>
      <Laps laps={laps} />
    </div>
  );
};

export default Home;
