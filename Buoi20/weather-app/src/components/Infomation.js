import React from "react";
import styles from "./style.module.css";
export default function Infomation(props) {
  return (
    <div className={styles.infomation}>
      <div>
        <p>Tên thành phố: {props.weatherData.name}</p>
        <p>Nhiệt độ cảm nhận: {props.weatherData.main.feels_like}</p>
        <p>Độ ẩm: {props.weatherData.main.humidity}</p>
        <p>Áp suất: {props.weatherData.main.pressure}</p>
        <p>Nhiệt độ bên ngoài: {props.weatherData.main.temp}</p>
        <p>Nhiệt độ cao nhất: {props.weatherData.main.temp_max}</p>
        <p>Nhiệt độ thấp nhất: {props.weatherData.main.temp_min}</p>
      </div>
    </div>
  );
}
