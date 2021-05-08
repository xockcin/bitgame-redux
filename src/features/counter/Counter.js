import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  doStep,
  selectCount,
  selectLevel,
  selectPair,
  newGame,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const level = useSelector(selectLevel);
  const dispatch = useDispatch();

  const byteFromNumber = (number) => {
    let result = [];
    for (let i = 0; i < 8; i++) {
      result.unshift(!!(number & (1 << i)));
    }
    return result;
  };

  const byte = byteFromNumber(count).map((bit) => {
    return +bit;
  });

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>{count}</span>
        <span className={styles.value}>{count.toString(16)}</span>
        <span className={styles.value}>{level}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.value}>{byte}</span>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(doStep("+"))}
        >
          +
        </button>
        <button
          className={styles.button}
          aria-label="Left shift value"
          onClick={() => dispatch(doStep("<"))}
        >
          {"<"}
        </button>
        <button
          className={styles.button}
          aria-label="Complement value"
          onClick={() => dispatch(doStep("~"))}
        >
          ~
        </button>
        <button
          className={styles.button}
          aria-label="Right shift value"
          onClick={() => dispatch(doStep(">"))}
        >
          {">"}
        </button>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(doStep("-"))}
        >
          -
        </button>
      </div>
      <div>
        <button
          className={styles.button}
          onClick={() => dispatch(newGame())}
        >
          reset
        </button>
      </div>
    </div>
  );
}
