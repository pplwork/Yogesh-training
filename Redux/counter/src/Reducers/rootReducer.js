// 2nd Step
const initState = {
  value: 0,
};

const rootReducer = (state = initState, action) => {
  if (action.type === "INCREMENT_COUNTER") {
    return {
      ...state,
      value: state.value + 1,
    };
  }

  if (action.type === "DECREMENT_COUNTER") {
    if (state.value > 0) {
      return {
        ...state,
        value: state.value - 1,
      };
    }
  }
  return state;
};

export default rootReducer;
