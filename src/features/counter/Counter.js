import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  leftShift,
  rightShift,
  complement,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
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
      </div>
      <div className={styles.row}>
        <span className={styles.value}>{byte}</span>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className={styles.button}
          aria-label="Left shift value"
          onClick={() => dispatch(leftShift())}
        >
          {"<"}
        </button>
        <button
          className={styles.button}
          aria-label="Complement value"
          onClick={() => dispatch(complement())}
        >
          ~
        </button>
        <button
          className={styles.button}
          aria-label="Right shift value"
          onClick={() => dispatch(rightShift())}
        >
          {">"}
        </button>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
}
