import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./features/about/About"
import Home from "./features/home/Home"
import Contact from "./features/contact/Contact"
import Login from "./features/login/Login";
import Nav from "./features/nav/Nav";
import "./App.css";

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </>
  );
}

export default App;
