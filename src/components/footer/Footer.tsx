import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div className={styles.title}>LET US HELP YOU</div>
          <div className="text-white text-base">Real Customer Reviews</div>
          <div className="text-white text-base">Exchange Policy</div>
          <div className="text-white text-base">Shipping Policy</div>
          <div className="text-white text-base">FAQs</div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.title}>ABOUT SOLOTO</div>
          <div className="text-white text-base">Who we are</div>
          <div className="text-white text-base">Contact Us</div>
          <div className="text-white text-base">Privacy Policy</div>
          <div className="text-white text-base">Terms &amp; Conditions</div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.title}>STAY CONNECTED</div>
          <div className="text-white text-base">SIGN UP FOR UPDATES</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
