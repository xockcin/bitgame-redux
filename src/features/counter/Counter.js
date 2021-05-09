import React from "react";
import {Button} from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux";
import {
  doStep,
  newGame,
  saveToReg,
  regAnd,
  regOr,
  regXor
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const {value, pair, register} = useSelector(state => state.counter);
  const showGoal = useSelector(state => state.display.showGoal)
  const dispatch = useDispatch();

  const byteFromNumber = (number) => {
    let result = [];
    for (let i = 0; i < 8; i++) {
      result.unshift(!!(number & (1 << i)));
    }
    return result;
  };

  const byte = byteFromNumber(value).map((bit, index) => {
    return (
      <Button className={"m-1 border"} variant={bit ? "dark" : "light"}>
        {7 - index}
      </Button>
    );
  });

  const reg = byteFromNumber(register).map((bit, index) => {
    return (
      <Button className={"m-1 border"} variant={bit ? "dark" : "light"}>
        {7 - index}
      </Button>
    );
  });

  const tokenArray = ["+", "<", "~", ">", "-"]

  const buttons = tokenArray.map(token => {
    return (
      <button
        className={styles.button}
        onClick={() => dispatch(doStep(token))}
      >
        {token}
      </button>
    );
  })

  return (
    <div>
      <div className="flex-column">
        <h1>
          <span className={styles.value}>{reg}</span>
        </h1>
        <h1>
          <span className={styles.value}>{byte}</span>
        </h1>
      </div>
      <div className={styles.row}>{buttons}</div>
      <div className={styles.row}>
        <button className={styles.button} onClick={() => dispatch(saveToReg())}>
          =
        </button>
        <button className={styles.button} onClick={() => dispatch(regAnd())}>
          &
        </button>
        <button className={styles.button} onClick={() => dispatch(regOr())}>
          |
        </button>
        <button className={styles.button} onClick={() => dispatch(regXor())}>
          ^
        </button>
      </div>
      <div>
        <button className={styles.button} onClick={() => dispatch(newGame())}>
          reset
        </button>
      </div>
    </div>
  );
}
