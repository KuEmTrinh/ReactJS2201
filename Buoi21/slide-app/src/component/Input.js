import React, { useEffect } from "react";
import styles from "./style.module.css";
import { useState } from "react";
export default function Input() {
  const [nameImage, setNameImage] = useState("");
  const [sourceImage, setSourceImage] = useState("");
  const [imageArray, setImageArray] = useState([]);
  useEffect(() => {
    console.log(imageArray);
  }, [imageArray]);
  const changeNameImage = (e) => {
    setNameImage(e.target.value);
  };
  const changeSourceImage = (e) => {
    setSourceImage(e.target.value);
  };
  const createImage = () => {
    let newImage = {};
    newImage.name = nameImage;
    newImage.source = sourceImage;
    setImageArray([...imageArray, newImage]);
    setNameImage("");
    setSourceImage("");
  };

  return (
    <div className={styles.flex}>
      <div className={[styles.center].join(" ")}>
        <div>
          <label>Name</label>
          <input type="text" value={nameImage} onChange={changeNameImage} />
        </div>
        <div>
          <label>Image source</label>
          <input type="text" value={sourceImage} onChange={changeSourceImage} />
        </div>
        <div className={styles.flex}>
          <div className={[styles.center].join(" ")}>
            <button className={styles.button} onClick={createImage}>
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
