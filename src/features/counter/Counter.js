import React, {useEffect} from "react";
import {Button} from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux";
import {
  doStep,
  newGame,
  saveToReg,
  regAnd,
  regOr,
  regXor,
  bitFlip,
  setLevel
} from "./counterSlice";
import {spendTokens,earnTokens} from "../tokens/tokensSlice"
import styles from "./Counter.module.css";

export function Counter() {
  const {value, pair, register} = useSelector(state => state.counter);
  const showGoal = useSelector(state => state.display.showGoal)
  const dispatch = useDispatch();

  useEffect(() => dispatch(newGame()), []);

  const byteFromNumber = (number) => {
    let result = [];
    for (let i = 0; i < 8; i++) {
      result.unshift(!!(number & (1 << i)));
    }
    return result;
  };

  const byte = byteFromNumber(value).map((bit, index) => {
    return (
      <Button className={"m-1 border"} variant={bit ? "dark" : "light"} onClick={() => dispatch(bitFlip(7-index))}>
        {7 - index}
      </Button>
    );
  });

  const goal = byteFromNumber(pair[1]).map((bit, index) => {
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
        onClick={() => {
          dispatch(doStep(token))
          dispatch(spendTokens(1))
        }}
      >
        {token}
      </button>
    );
  })

  return (
    <div>
      <div className="flex-column">
        <h4>
          <span>{register ? reg : ""}</span>
        </h4>
        <h4>
          <span>{showGoal ? goal : byte}</span>
        </h4>
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
