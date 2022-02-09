import { connect } from "react-redux";
import { clickStartBtn } from "../../Actions/clickStartBtn";
let i;

const StartBtn = (props) => {
  const handleStart = () => {
    if (props.isStarted === false) {
      i = setInterval(() => {
        props.start();
      }, 10);
    }
  };

  return (
    <button
      onClick={handleStart}
      className="waves-effect waves-light btn green"
    >
      Start
    </button>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    start: () => {
      dispatch(clickStartBtn(i));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartBtn);
