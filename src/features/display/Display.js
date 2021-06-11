import React from "react";
import {Dropdown} from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux";
import {setLevel} from '../counter/counterSlice'
import { showGoal, hideGoal } from "./displaySlice";

export const Display = () => {
  const { steps, pair, level, value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const stepDisplay = steps.map(step => {
    return (
      <span className={"m-2 border p-2 rounded-pill"}>
        {step.token}
        {' '}
        {step.number}
      </span>
    );
  })

  const levels = [...Array(11).keys()].splice(1)
  const levelItems = levels.map(level => {
    return <Dropdown.Item onSelect={() => dispatch(setLevel(level))}>{level}</Dropdown.Item>
  })
  const levelSelect = (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        level {level}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {levelItems}
      </Dropdown.Menu>
    </Dropdown>
  )

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
      <span className="border bg-success rounded p-1">
        <h1>{pair[0]}</h1>
      </span>
      {stepDisplay}
      <span
        className="border bg-danger rounded p-1"
        onMouseEnter={() => dispatch(showGoal())}
        onMouseLeave={() => dispatch(hideGoal())}
      >
        <h1>{pair[1]}</h1>
      </span>
      <span>
        {levelSelect}
      </span>
    </div>
  );
}

export default Display;
