import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { firebase } from "../../app/firebase";
import styles from "./Nav.module.css";
import Logout from "../logout/Logout";
import { getUserInfomation } from "./navSlice";
export default function Nav() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      dispatch(getUserInfomation(user));
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        return setIsUserSignedIn(true);
      }
      return setIsUserSignedIn(false);
    });
  });

  return (
    <div>
      <div className={[styles.flex, styles.jctsb].join(" ")}>
        <div>
          <ul className={styles.navLink}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contacts</Link>
            </li>
          </ul>
        </div>
        {isUserSignedIn ? (
          <Logout />
        ) : (
          <li className={styles.loginButton}>
            <Link to="/login">Login</Link>
          </li>
        )}
      </div>
    </div>
  );
}
