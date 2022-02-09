import React from "react";
import { connect } from "react-redux";
import { clickStopBtn } from "../../Actions/clickStopBtn";

const StopBtn = (props) => {
  const handleStop = () => {
    if (props.isStarted === true) {
      props.stop();
    }
  };

  return (
    <button onClick={handleStop} className="waves-effect waves-light btn">
      Stop
    </button>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    stop: () => {
      dispatch(clickStopBtn());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StopBtn);
