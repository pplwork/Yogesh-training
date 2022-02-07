import React, { Component } from "react";
import Timer from "./Timer/Timer";
import LapBtn from "./Buttons/LapBtn";
import ResetBtn from "./Buttons/ResetBtn";
import StartBtn from "./Buttons/StartBtn";
import StopBtn from "./Buttons/StopBtn";
import Laps from "./Laps/Laps";

let interval = null;
class Home extends Component {
  state = {
    isPaused: true,
    time: 0,
    laps: [],
  };

  handleStart = () => {
    this.setState({
      isPaused: false,
    });

    if (this.state.isPaused === true) {
      interval = setInterval(() => {
        this.setState({
          time: this.state.time + 10,
        });
      }, 10);
    }
  };

  handleStop = () => {
    this.setState({
      isPaused: true,
    });
    clearInterval(interval);
  };

  handleReset = () => {
    if (this.state.isPaused === true) {
      this.setState({
        isPaused: true,
        time: 0,
        laps: [],
      });
      clearInterval(interval);
    } else {
      return;
    }
  };

  handleLap = () => {
    let lap = {
      time: this.state.time,
    };

    let arr = [...this.state.laps];
    arr.push(lap);
    this.setState({
      laps: arr,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Timer time={this.state.time} />

        <div className="center buttons">
          <StartBtn handleStart={this.handleStart} />
          <LapBtn handleLap={this.handleLap} />
          <ResetBtn handleReset={this.handleReset} />
          <StopBtn handleStop={this.handleStop} />
        </div>

        <Laps laps={this.state.laps} />
      </React.Fragment>
    );
  }
}

export default Home;
