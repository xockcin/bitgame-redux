import React, {useEffect} from "react";
import {Button} from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux";
import {
  doStep,
  newGame,
  saveToReg,
  doRegStep
} from "./counterSlice";
import {spendTokens,earnTokens} from "../tokens/tokensSlice"
import styles from "./Counter.module.css";

export const Counter = () => {
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
  }

  const byteButtons = (byte) => byteFromNumber(byte).map((bit, index) => {
    return (
      <Button className={"m-1 border"} variant={bit ? "dark" : "light"}>
        {7 - index}
      </Button>
    );
  });

  const num = byteButtons(value)
  const goal = byteButtons(pair[1])
  const reg = byteButtons(register)

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

  const regTokenArray = ["&","|","^"]

  const regButtons = regTokenArray.map((token) => {
    return (
      <button
        className={styles.button}
        onClick={() => {
          dispatch(doRegStep(token));
        }}
      >
        {token}
      </button>
    );
  });

  return (
    <div>
      <div className="flex-column">
        <h4>
          <span>{register ? reg : ""}</span>
        </h4>
        <h4>
          <span>{showGoal ? goal : num}</span>
        </h4>
      </div>
      <div className={styles.row}>{buttons}</div>
      <div className={styles.row}>
        <button className={styles.button} onClick={() => dispatch(saveToReg())}>
          =
        </button>
        {register ? regButtons : ""}
      </div>
      <div>
        <button className={styles.button} onClick={() => dispatch(newGame())}>
          reset
        </button>
      </div>
    </div>
  );
}
