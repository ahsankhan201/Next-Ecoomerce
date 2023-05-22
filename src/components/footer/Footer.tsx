import Link from "next/link";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div className={styles.title}>LET US HELP YOU</div>
          <div className="text-black text-base">
            <Link href="/pages/real-customer-reviews">Real Customer Reviews</Link>
          </div>
          <div className="text-black text-base">
            <Link href="/pages/exchange-policy">Exchange Policy</Link>
          </div>
          <div className="text-black text-base">
            <Link href="/pages/shipping-policy">Shipping Policy</Link>
          </div>
          <div className="text-black text-base">
            <Link href="/pages/faqs">FAQs</Link>
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.title}>ABOUT SOLOTO</div>
          <div className="text-black text-base">
            <Link href="/pages/who-we-are">Who we are</Link>
          </div>
          <div className="text-black text-base">
            <Link href="/pages/contact-us">Contact Us</Link>
          </div>
          <div className="text-black text-base">
            <Link href="/pages/privacy-policy">Privacy Policy</Link>
          </div>
          <div className="text-black text-base">
            <Link href="/pages/terms-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.title}>STAY CONNECTED</div>
          <div className="text-black text-base">
            <Link href="/pages/sign-up-for-updates">SIGN UP FOR UPDATES</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
