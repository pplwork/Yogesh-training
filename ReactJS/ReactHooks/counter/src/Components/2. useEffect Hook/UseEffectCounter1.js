import React, { useEffect, useState } from "react";

const UseEffectCounter1 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  /**Variation-1 [No optional dependency array is passed]
   * componentDidMount + componentDidUpdate.
   * runs both after 1st render and after every update.
   * Avoid changing state.
   */
  //   useEffect(() => {
  //     document.title = `You clicked ${count} times`;
  //   });

  /**Variation-2 [non-empty dependency array]
   * Runs only after those renders that are caused due to state change of the passed value
   */
  useEffect(() => {
    console.log("useEffect - Updating document title");
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div className="center">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)} className="btn ">
        Click {count} times
      </button>
    </div>
  );
};

export default UseEffectCounter1;
