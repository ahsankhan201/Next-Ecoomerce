import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.title}>LET US HELP YOU</div>
        <div>Real Customer Reviews</div>
        <div>Exchange Policy</div>
        <div>Shipping Policy</div>
        <div>FAQs</div>
      </div>
      <div className={styles.subContainer}>
        <div className={styles.title}>ABOUT SOLOTO</div>
        <div>Who we are</div>
        <div>Contact Us</div>
        <div>Privacy Policy</div>
        <div>Terms &amp; Conditions</div>
      </div>
      <div className={styles.subContainer}>
        <div className={styles.title}>STAY CONNECTED</div>
        <div>SIGN UP FOR UPDATES</div>
      </div>
    </div>
    </>
  )
}

export default Footer