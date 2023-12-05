import React, { useContext } from "react";
import Context from "./Context";

const Counter = () => {
  const value = useContext(Context);
  return <div>Counter: {value}</div>;
};

export default Counter;
