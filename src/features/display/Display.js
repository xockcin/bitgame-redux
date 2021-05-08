import React from "react";
import { useSelector } from "react-redux";
import { selectCount, selectSteps, selectPair } from "../counter/counterSlice";

export const Display = () => {
  const count = useSelector(selectCount);
  const steps = useSelector(selectSteps)
  const pair = useSelector(selectPair)
  console.log("steps: " + steps)
  const stepDisplay = steps.map(step => {
    console.log("step: " + step)
    return (
      <span className={"m-2 border"}>
        <h1>{step.token}</h1>
        <h1>{step.number}</h1>
      </span>
    );
  })
  return (
    <div className={"d-flex justify-content-center p-3"}>
      <span>{pair[0]}</span>
      <div className={"d-flex justify-content-center p-3"}>
        <span>{stepDisplay}</span>
      </div>
      <span>{pair[1]}</span>
    </div>
  );
}

export default Display;
