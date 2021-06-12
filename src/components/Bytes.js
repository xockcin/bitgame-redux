import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { newGame } from "../state/counterSlice";

export const Bytes = () => {
  const { value, pair, register } = useSelector((state) => state.counter);
  const showGoal = useSelector((state) => state.display.showGoal);
  const dispatch = useDispatch();

  useEffect(() => dispatch(newGame()), []);

  const byteFromNumber = (number) => {
    let result = [];
    for (let i = 0; i < 8; i++) {
      result.unshift(!!(number & (1 << i)));
    }
    return result;
  };

  const byteButtons = (byte) =>
    byteFromNumber(byte).map((bit, index) => {
      return (
        <Button className={"m-1 border"} variant={bit ? "dark" : "light"}>
          {7 - index}
        </Button>
      );
    });

  const num = byteButtons(value);
  const goal = byteButtons(pair[1]);
  const reg = byteButtons(register);

  return (
    <div className="flex-column">
      <h4>
        <span>{register ? reg : ""}</span>
      </h4>
      <h4>
        <span>{showGoal ? goal : num}</span>
      </h4>
    </div>
  );
};
