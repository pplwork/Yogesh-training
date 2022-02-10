import React, { Component } from "react";

class ClassMouse extends Component {
  state = {
    x: 0,
    y: 0,
  };

  logMousePosition = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.logMousePosition);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.logMousePosition);
  }

  render() {
    return (
      <h5 className="center bold">
        X- {this.state.x} Y- {this.state.y}
      </h5>
    );
  }
}

export default ClassMouse;
