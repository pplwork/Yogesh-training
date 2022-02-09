import React from "react";
import { connect } from "react-redux";
import { clickResetBtn } from "../../Actions/clickResetBtn";

const ResetBtn = (props) => {
  const handleReset = () => {
    props.reset();
  };

  return (
    <button onClick={handleReset} className="waves-effect red btn">
      Reset
    </button>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => {
      dispatch(clickResetBtn());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetBtn);
