// using useContext hook..

import React, { useContext } from "react";
// import ComponentF from "./ComponentF";
import { UserContext, ChannelContext } from "../App";

const ComponentE = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div className="center">
      User {user} - Channel {channel}
      {/* <ComponentF /> */}
    </div>
  );
};

export default ComponentE;
