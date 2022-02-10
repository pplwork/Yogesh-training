import React, { useState } from "react";

// useState() with Object...
const Counter3 = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => {
          setName({ ...name, firstName: e.target.value }); // We have to manually pass the shallow copy & then update the object [just like in Redux]
        }}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => {
          setName({ ...name, lastName: e.target.value }); // We have to manually pass the shallow copy & then update the object [just like in Redux]
        }}
      />

      <h4>Your first name: {name.firstName}</h4>
      <h4>Your last name: {name.lastName}</h4>
      <h4>{JSON.stringify(name)}</h4>
    </form>
  );
};

export default Counter3;
