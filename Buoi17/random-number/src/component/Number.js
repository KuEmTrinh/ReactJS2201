import React from "react";
import styles from "./style.module.css";
export default function Number(props) {
  return (
    <div>
      <div
        className={[
          styles.number,
          styles.flex,
          styles.flexColumn,
          props.correct ? styles.successBackground : "",
          props.overGame ? styles.failBackground : "",
        ].join(" ")}
      >
        <p className={styles.numberText}>Game dự đoán từ số 1 đến 100</p>
        {props.overGame ? (
          <div className={styles.answerNumber}>Đáp án là : {props.randomNumber}</div>
        ) : (
          <div className={styles.answerNumber}>?</div>
        )}
      </div>
    </div>
  );
}
