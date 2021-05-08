import React from "react";
import {Button} from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux";
import {
  doStep,
  newGame,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const {value, pair} = useSelector(state => state.counter);
  const showGoal = useSelector(state => state.display.showGoal)
  const dispatch = useDispatch();

  const byteFromNumber = (number) => {
    let result = [];
    for (let i = 0; i < 8; i++) {
      result.unshift(!!(number & (1 << i)));
    }
    return result;
  };

  const byteData = showGoal ? byteFromNumber(pair[1]) : byteFromNumber(value)
  const byte = byteData.map((bit, index) => {
    return (
      <Button
        className={"m-1 border"}
        variant={bit ? "dark" : "light"}
      >
        {7 - index}
      </Button>
    )
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
      <div className={styles.row}>
        <span className={styles.value}>{byte}</span>
      </div>
      <div className={styles.row}>{buttons}</div>
      <div>
        <button className={styles.button} onClick={() => dispatch(newGame())}>
          reset
        </button>
      </div>
    </div>
  );
}
