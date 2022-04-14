import React from "react";
import { useState, useEffect } from "react";
import Infomation from "./Infomation";
import axios from "axios";
import styles from "./style.module.css";
export default function Main() {
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const apiKey = "9928caea4da264cbfeb825af3b0fab57";
  const onChangeValue = (e) => {
    setInputValue(e.target.value);
  };
  const getData = async () => {
    try {
      let result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&APPID=${apiKey}&lang=vi`
      );
      console.log(result.data);
      setWeatherData(result.data);
    } catch (error) {
      alert("loi api");
    }
  };
  return (
    <div>
      {/* {weatherData.name} */}
      <Infomation weatherData={weatherData} />
      <div className={styles.inputBox}>
        <div className={[styles.center, styles.flexColumn].join(" ")}>
          <input
            className={styles.inputItem}
            value={inputValue}
            type="text"
            onChange={onChangeValue}
          />
          <button className={[styles.marginTop1, styles.button].join(" ")} onClick={getData}>Lấy dữ liệu</button>
        </div>
      </div>
    </div>
  );
}
