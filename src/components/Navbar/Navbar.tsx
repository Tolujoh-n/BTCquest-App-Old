import React from "react";
//import logo from "./logo.svg";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles["nav__list"]}>
        <li className={styles["nav__list-logo"]}>
         
        </li>
        <li className={styles["nav__list-item"]}>
          Home
        </li>
        <li className={styles["nav__list-item"]}>
          About
          <ul className={styles["nav__list-item-drop"]}>
            <li>
              <a href="#">Mission</a>
            </li>
            <li>
              <a href="#">History</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
          </ul>
        </li>
        <li className={styles["nav__list-item"]}>
          Services
          <ul className={styles["nav__list-item-drop"]}>
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Mobile Development</a>
            </li>
            <li>
              <a href="#">Design</a>
            </li>
          </ul>
        </li>
        <li className={styles["nav__list-item"]}>
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
