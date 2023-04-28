import React from "react";
import styles from "../../../src/styles/navBar.module.scss";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const MainBar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.icons}>
          <Link href="#">
            <FaFacebook />
          </Link>
          <Link href="#">
            <FaInstagram />
          </Link>
        </div>
        <div className={styles.contact}></div>
        <div className={styles.auth}>
          <span className={styles.phone}>+92 3001223322</span>
          <Link href="/user/login" className={styles.customlink}>
            Log In
          </Link>
          <Link href="/user/register" className={styles.customlink}>
            Register
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MainBar;
