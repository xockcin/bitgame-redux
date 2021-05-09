import React from "react";
import {Button} from "react-bootstrap"
import { useSelector } from "react-redux";
import { showGoal, hideGoal } from "./displaySlice";

export const Display = () => {
  const { steps, pair, level, value } = useSelector((state) => state.counter);
  const stepDisplay = steps.map(step => {
    return (
      <span className={"m-2 border p-2 rounded-pill"}>
        {step.token}
        {' '}
        {step.number}
      </span>
    );
  })

  if (steps.length === level) {
    if (value === pair[1]) {
      return <h1>you win!</h1>
    }
    else {
      return <h1>you lose!</h1>
    }
  }

  return (
    <div className={"d-flex justify-content-evenly p-3"}>
      <span>
        <h1>{pair[0]}</h1>
      </span>
      {stepDisplay}
      <span
        className="border"
        onMouseEnter={() => showGoal()}
        onMouseLeave={() => hideGoal()}
      >
        <h1>{pair[1]}</h1>
      </span>
      <span>
        <h3>steps: {level - steps.length}</h3>
      </span>
    </div>
  );
}

export default Display;
