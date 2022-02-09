import React from "react";
import { connect } from "react-redux";

const Timer = (props) => {
  return (
    <>
      <h3 className="center heading">Stopwatch</h3>
      <div className="stopwatch center">
        <h3>
          {("0" + Math.floor(props.time / 3600000)).slice(-2)}:
          {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
          {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:
          {("0" + ((props.time / 10) % 100)).slice(-2)}
        </h3>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    time: state.time,
  };
};

export default connect(mapStateToProps)(Timer);
