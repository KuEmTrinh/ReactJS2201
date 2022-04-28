import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { authentication } from "../../app/firebase";
import { firebase } from "../../app/firebase";
import "./Logout.css";
export default function Logout() {
  const [userInfo, setUserInfo] = useState("");
  firebase.auth().onAuthStateChanged((user) => {
    setUserInfo(user);
  });
  const logOut = () => {
    signOut(authentication)
      .then(() => {
        console.log("da dang xuat");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <p>{userInfo.displayName}</p>
      <img src={userInfo.photoURL} className="logoutImage"/>
      <button
        onClick={() => {
          logOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );
}
