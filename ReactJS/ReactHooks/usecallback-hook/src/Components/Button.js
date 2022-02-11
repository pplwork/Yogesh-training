import React from "react";

const Button = ({ handleClick, children }) => {
  console.log("Rendering btn - ", children);

  return (
    <button className="btn" onClick={handleClick}>
      {children}
    </button>
  );
};

export default React.memo(Button);
