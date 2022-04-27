import React from "react";
import { authentication } from "../../app/firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
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
  const logOut = () => {
    signOut(authentication)
      .then(() => {
        console.log("da dang xuat");
        setUserInfo("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {userInfo ? (
        <div>
          Name:{userInfo.displayName} Email:{userInfo.email}
        </div>
      ) : (
        ""
      )}
      {userInfo ? (
        <button
          onClick={() => {
            logOut();
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            loginWithGoogle();
          }}
        >
          Login with Google
        </button>
      )}
    </div>
  );
}
