import React from "react";
import { authentication } from "../../app/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useState } from "react";
export default function Login() {
  const [userInfo, setUserInfo] = useState("");
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((res) => {
        console.log(res.user);
        setUserInfo(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <button
        onClick={() => {
          loginWithGoogle();
        }}
      >
        Login with Google
      </button>
    </>
  );
}
