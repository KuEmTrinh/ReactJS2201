import React from "react";
import styles from "./style.module.css";
export default function InputArray(props) {
  return (
    <div>
      <p className={styles.valueList}>Danh sách các số đã nhập <span>{props.numberOfGuesing}</span></p>
      
      <div className={styles.flex}>
        <div className={styles.center}>
          <div className={styles.flex}>
            {props.inputArray.map((element) => {
              return <div className={styles.listItem}>{element}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
