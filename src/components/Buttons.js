import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { doStep, newGame, saveToReg, doRegStep } from "../state/counterSlice";
import styles from "./Counter.module.css";

export const Buttons = () => {
  const { register } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const tokenArray = ["+", "<", "~", ">", "-"]

  const buttons = tokenArray.map((token) => {
    return (
      <button
        className={styles.button}
        onClick={() => {
          dispatch(doStep(token));
        }}
      >
        {token}
      </button>
    );
  });

  const regTokenArray = ["&", "|", "^"];

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
};
