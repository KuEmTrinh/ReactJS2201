import React from 'react'
import styles from "./style.module.css";

export default function Message(props) {
  return (
    <div className={styles.message}><p className={styles.messageValue} >{props.messageValue}</p></div>
  )
}
