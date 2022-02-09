const initState = {
  isStarted: false,
  time: 0,
  laps: [],
  interval: {},
};

const rootReducer = (state = initState, action) => {
  if (action.type === "START_TIMER") {
    state.isStarted = true;
    if (state.isStarted === true) {
      return {
        ...state,
        time: state.time + 10,
        isStarted: true,
        interval: action.interval,
      };
    }
  }

  if (action.type === "STOP_TIMER") {
    clearInterval(state.interval);
    return {
      ...state,
      isStarted: false,
      interval: {},
    };
  }

  if (action.type === "RESET_TIMER") {
    if (state.isStarted === false) {
      return {
        ...state,
        time: 0,
        laps: [],
      };
    }
  }

  if (action.type === "SET_LAP") {
    if (state.time !== 0) {
      let lap = {
        time: state.time,
      };

      const arr = [...state.laps, lap];
      return {
        ...state,
        laps: arr,
      };
    }
  }

  return state;
};

export default rootReducer;
