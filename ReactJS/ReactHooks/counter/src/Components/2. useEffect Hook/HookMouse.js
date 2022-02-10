import React, { useState, useEffect } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  /**Variation-3 [empty dependency array]
   * Runs only after 1st render
   * componentDidMount
   */
  //   useEffect(() => {
  //     console.log("useEffect called");
  //     window.addEventListener("mousemove", logMousePosition);
  //   }, []);

  /**Variation-4 [useEffect with cleanUp]
   * componentWillUnmount
   */
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <h5 className="center">
      Hooks X- {x} Y- {y}
    </h5>
  );
};

export default HookMouse;
