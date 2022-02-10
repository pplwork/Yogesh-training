import React, { Component } from "react";

class ClassCounter1 extends Component {
  state = {
    count: 0,
    name: "",
  };

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Updating document title");
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div className="center">
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
          className="btn "
        >
          Click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounter1;
