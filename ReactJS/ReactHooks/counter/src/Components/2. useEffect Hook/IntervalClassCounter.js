import React, { Component } from "react";

class IntervalClassCounter extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return <h4 className="center">{this.state.count}</h4>;
  }
}

export default IntervalClassCounter;
