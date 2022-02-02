import React, { Component } from "react";
import Ninjas from "./Components/Ninjas";
import AddNinja from "./Components/AddNinja";
import "./Ninjas.css";

class App extends Component {
  state = {
    ninjas: [
      { id: 1, name: "Satoshi", age: 27, belt: "black" },
      { id: 2, name: "Ryan", age: 17, belt: "white" },
      { id: 3, name: "Crystal", age: 23, belt: "pink" },
    ],
  };

  addNinja = (ninja) => {
    ninja.id = Math.random();

    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas,
    });
  };

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    });

    this.setState({
      ninjas: ninjas,
    });
  };

  componentDidMount(){
    console.log('Component gets mounted');
  }

  componentDidUpdate(prevProps,prevState) {
    console.log('Component gets updated');
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <p>Welcome:)</p>

        {/* passing data from Parent Component to Child Component using props */}
        {/* <Ninjas name="Satoshi" age="23" belt="black" /> */}

        {/* Outputting Lists */}
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />

        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
