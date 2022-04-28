import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../app/firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
export default function Home() {
  const userId = useSelector((state) => state.nav.userId);
  useEffect(() => {
    getTodos();
  }, []);
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState("");
  const inputValueChange = (e) => {
    setInputValue(e.target.value);
  };
  const createTodo = () => {
    db.collection("todos").add({
      uid: userId,
      status: false,
      time: firebase.firestore.FieldValue.serverTimestamp(),
      text: inputValue,
    });
    setInputValue("");
  };
  const getTodos = () => {
    db.collection("todos")
      .where("uid", "==", userId)
      .onSnapshot(function (querySnapshot) {
        setTodos(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            text: doc.data().text,
            status: doc.data().status,
          }))
        );
      });
  };
  return (
    <>
      <TextField
        id="outlined-basic"
        label="InputBox"
        variant="outlined"
        onChange={inputValueChange}
        value={inputValue}
      />
      <Button
        variant="outlined"
        onClick={() => {
          createTodo();
        }}
      >
        Add
      </Button>
      {todos.length > 0 ? (
        <>
          {todos.map((element) => {
            return (
              <div key={element.id}>
                <p>id: {element.id}</p>
                <p>text: {element.text}</p>
                <p>status: {element.status ? "True" : "False"}</p>
              </div>
            );
          })}
        </>
      ) : (
        "loading"
      )}
    </>
  );
}
