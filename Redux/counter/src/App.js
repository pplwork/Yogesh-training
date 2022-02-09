import { connect } from "react-redux";
import { decrementCounter } from "./Actions/decrementAction";
import { incrementCounter } from "./Actions/incrementAction";

function App(props) {
  const handleIncrement = () => {
    props.increment();
  };

  const handleDecrement = () => {
    props.decrement();
  };

  return (
    <div className="App">
      <h2 className="center">Counter</h2>
      <h5 className="center">{props.value}</h5>

      <div className="btn-container center">
        <button onClick={handleIncrement} className="btn blue">
          +
        </button>
        <button onClick={handleDecrement} className="btn red">
          -
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(incrementCounter());
    },
    decrement: () => {
      dispatch(decrementCounter());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
