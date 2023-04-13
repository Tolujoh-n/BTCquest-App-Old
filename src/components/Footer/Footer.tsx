import React from "react";
import styles from "./footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-row"]}>
          <div className={styles["footer-column"]}>
            <h4>About</h4>
            <ul>
              <li>
                <a href="/">Company</a>
              </li>
              <li>
                <a href="/">Service</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles["footer-column"]}>
            <h4>Application</h4>
            <ul>
              <li>
                <a href="/">At home</a>
              </li>
              <li>
                <a href="/">At school</a>
              </li>
              <li>
                <a href="/">At work</a>
              </li>
            </ul>
          </div>
          <div className={styles["footer-column"]}>
            <h4>Terms and conditions</h4>
            <ul>
              <li>
                <a href="/">Terms and conditions</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className={styles["footer-column"]}>
            <h4>Follow us</h4>
            <div className={styles["footer-social-links"]}>
              <a href="/">
                <FaFacebook />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
