import React from "react";
import styles from "./style.module.css";

export default function Input(props) {
  return (
    <div className={styles.inputBox}>
      <div
        className={[styles.center, styles.flexColumn, styles.flex].join(" ")}
      >
        <input
          value={props.inputValue}
          type="number"
          onChange={props.onChangeValue}
          className={styles.inputValue}
        />
        <button
          onClick={props.guess}
          className={[styles.guessButton, styles.mt1].join(" ")}
        >
          Đoán
        </button>
      </div>
    </div>
  );
}
