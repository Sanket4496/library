import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(1);

  useEffect(() => {
    setTimeout(() => setState1(1), 1000);
    setTimeout(() => setState2(2), 2000);
  }, []);

  useEffect(() => {
    console.log("State1 changed: " + state1 + "state2: " + state2);
  }, [state1]);

  useEffect(() => {
    console.log("State2 changed: " + state2 + "state1: " + state1);
  }, [state2]);
  return <div>MyComponent</div>;
};

export default MyComponent;
