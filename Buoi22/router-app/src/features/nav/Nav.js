import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
export default function Nav() {
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

        <li className={styles.loginButton}>
            <Link to="/login" >Login</Link>
        </li>
      </div>
    </div>
  );
}
