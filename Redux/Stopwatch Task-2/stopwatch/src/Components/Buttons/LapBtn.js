import React from "react";
import { connect } from "react-redux";
import { clickLapBtn } from "../../Actions/clickLapBtn";

const LapBtn = (props) => {
  const handleLap = () => {
    props.startLap();
  };

  return (
    <button onClick={handleLap} className="waves-effect blue btn">
      Lap
    </button>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLap: () => {
      dispatch(clickLapBtn());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LapBtn);
