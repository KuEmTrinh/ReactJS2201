import React from "react";
import "antd/dist/antd.css";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import styles from "./style.module.css";
export default function Loading() {
  const antIcon = <LoadingOutlined style={{ fontSize: 78 }} spin />;

  return (
    <div className={styles.maxSize}>
      <div className={styles.centerDisplay}>
        <Spin indicator={antIcon} />
      </div>
    </div>
  );
}
