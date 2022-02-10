import React from "react";
import Counter1 from "./Components/1. useState Hook/Counter1";
import Counter2 from "./Components/1. useState Hook/Counter2";
import Counter3 from "./Components/1. useState Hook/Counter3";
import Counter4 from "./Components/1. useState Hook/Counter4";
import ClassCounter1 from "./Components/2. useEffect Hook/ClassCounter1";
import ClassMouse from "./Components/2. useEffect Hook/ClassMouse";
import DataFetching from "./Components/2. useEffect Hook/DataFetching";
import HookMouse from "./Components/2. useEffect Hook/HookMouse";
import IntervalClassCounter from "./Components/2. useEffect Hook/IntervalClassCounter";
import IntervalHookCounter from "./Components/2. useEffect Hook/IntervalHookCounter";
import MouseContainer from "./Components/2. useEffect Hook/MouseContainer";
import UseEffectCounter1 from "./Components/2. useEffect Hook/UseEffectCounter1";

function App() {
  return (
    // 1.useState Hook...
    // <Counter1/>
    // <Counter2 />
    // <Counter3 />
    // <Counter4 />

    // 2. useEffect hook
    // <ClassCounter1 />
    // <UseEffectCounter1 />
    // <ClassMouse />
    // <HookMouse />
    // <MouseContainer />
    <>
      {/* <IntervalClassCounter />
      <IntervalHookCounter /> */}
      <DataFetching />
    </>
  );
}

export default App;
