// import React, { Component } from "react";

// class Ninjas extends Component {
//   state = {};

//   render() {
//     // console.log(this.props);
//     // const { name, age, belt } = this.props;

//     // Creating List
//     const { ninjas } = this.props;
//     const ninjaList = ninjas.map((ninja) => {
//       return (
//         <div className="ninja" key={ninja.id}>
//           <div>Name: {ninja.name}</div>
//           <div>Age: {ninja.age}</div>
//           <div>Belt: {ninja.belt}</div>
//         </div>
//       );
//     });

//     return <div className="ninja-list">{ninjaList}</div>;
//   }
// }

// export default Ninjas;

// ----------------------------------------------------------------------------------------

// Ninjas.js was a UI component and doesn't need any state, so we converted class based component{Container Comp.} to function Component{UI Component}...

import React from "react";

const Ninjas = ({ ninjas, deleteNinja }) => {
  // // const { ninjas } = props;
  // const ninjaList = ninjas.map((ninja) => {

  // Conditionals using if..else
  //   if (ninja.age > 20) {
  //     return (
  //       <div className="ninja" key={ninja.id}>
  //         <div>Name: {ninja.name}</div>
  //         <div>Age: {ninja.age}</div>
  //         <div>Belt: {ninja.belt}</div>
  //       </div>
  //     );
  //   } else {
  //     return null;
  //   }

  const ninjaList = ninjas.map((ninja) => {
    // Conditionals using ternary operator
    // condition ? (true) : (false);
    return ninja.age > 20 ? (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <button
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          Delete Ninja
        </button>
      </div>
    ) : null;
  });

  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
