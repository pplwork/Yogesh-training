const Redux = require("redux");
const { createStore } = Redux; // Creates the Redux central data store

let initState = {
  todos: [],
  posts: [],
};

// myreducer(state, action) {}
function myreducer(state = initState, action) {
  //   console.log(action, state);

  if (action.type === "ADD_TODO") {
    return {
      ...state,
      todos: [...state.todos, action.todo],
    };
  }

  if (action.type === "ADD_POST") {
    return {
      ...state,
      posts: [...state.posts, action.post],
    };
  }
}

const store = createStore(myreducer);

// fires everytime the state is updated
store.subscribe(() => {
  console.log("State Updated");

  //   to get state inside subscribe()
  console.log(store.getState());
});

let addAction = (action) => {
  store.dispatch(action);
};

addAction({ type: "ADD_TODO", todo: "buy milk" });
addAction({ type: "ADD_TODO", todo: "sleep some more" });
addAction({ type: "ADD_POST", post: "Going for shopping" });

// dispatch actions from component to Reducer
// store.dispatch(todoAction);
