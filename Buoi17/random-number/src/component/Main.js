import React from "react";
import { useState, useEffect } from "react";
import Number from "./Number";
import Message from "./Message";
import InputArray from "./InputArray";
import Input from "./Input";

export default function Main() {
  //Khai bao bien
  const [randomNumber, setRandomNumber] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [message, setMessage] = useState("");
  const [inputArray, setInputArray] = useState([]);
  const [correct, setCorrect] = useState(false);
  const [numberOfGuesing, setNumberOfGuesing] = useState(0);
  const [overGame, setOverGame] = useState(false);
  //Life cycle
  useEffect(() => {
    mounting();
  }, []);

  useEffect(() => {
    if (numberOfGuesing > 7) {
      setMessage("Bạn thua rồi");
      setOverGame(true);
      setTimeout(() => {
        newGame();
      }, 2000);
    }
  }, [numberOfGuesing]);

  const mounting = () => {
    createRandomNumber();
  };

  //Ham xu ly
  const createRandomNumber = () => {
    let randNumber = Math.floor(Math.random() * 100 + 1);
    setRandomNumber(randNumber);
  };

  const onChangeValue = (e) => {
    setInputValue(parseInt(e.target.value));
  };

  const clearMessage = () => {
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const guess = () => {
    setNumberOfGuesing(numberOfGuesing + 1);
    if (inputValue === randomNumber) {
      setCorrect(true);
      setMessage("Bạn đoán đúng rồi");
      clearMessage();
      setInputArray([]);
    } else {
      if (inputValue > randomNumber) {
        setMessage("Số bạn đoán lớn quá");
        clearMessage();
      }
      if (inputValue < randomNumber) {
        setMessage("Số bạn đoán nhỏ quá");
        clearMessage();
      }
      setInputArray([...inputArray, inputValue]);
      setCorrect(false);
    }
  };

  const newGame = () => {
    mounting();
    setCorrect(false);
    setInputArray([]);
    setMessage("");
    setNumberOfGuesing(0);
    setOverGame(false);
  };

  return (
    <div>
      {message ? <Message messageValue={message} /> : null}
      <Number
        randomNumber={randomNumber}
        correct={correct}
        overGame={overGame}
      />
      <InputArray inputArray={inputArray} numberOfGuesing={numberOfGuesing} />
      <Input
        inputValue={inputValue}
        onChangeValue={onChangeValue}
        guess={guess}
      />
    </div>
  );
}
