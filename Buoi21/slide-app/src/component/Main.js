import React from "react";
import styles from "./style.module.css";
import { useState } from "react";
import Input from "./Input";
import Image from "./Image";
export default function Main() {
  return (
    <div>
      <p className={styles.title}>SLIDE APP</p>
      <Input/>
      <Image />
    </div>
  );
}
