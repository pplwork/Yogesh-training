import React from "react";

// Higher Order Component
const Rainbow = (WrappedComponent) => {
  const colours = [
    "voilet",
    "indigo",
    "blue",
    "green",
    "yellow",
    "orange",
    "red",
  ];
  const randomColour = colours[Math.floor(Math.random() * 5)];
  const className = randomColour + "-text";

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
