import styles from "./footer.module.css";
import React from "react";
import Socials from "../socials/Socials";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.item}>
          <p className={styles.title}>Opening Hours</p>
          <p className={styles.text}>Monday & Friday : 8'am - 11'pm</p>
          <p className={styles.text}>​​Saturday & Sunday : 10'am - 8'pm</p>
          <p className={styles.title}>Adress</p>
          <p className={styles.text}>Grovelands Park, UK</p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>Contact</p>
          <p className={styles.text}>info@greatbearfitness.co.uk</p>
          <p className={styles.text}>07883692262</p>
          <p className={styles.title}>Socials</p>
          <div>
            <Socials />
          </div>
        </div>
        <div className={`${styles.item} ${styles.aboutus}`}>
          <p className={styles.title}>About Us</p>
          <p className={`${styles.text} ${styles.about}`}>
            A fitness family that challenges and helps each other. The best part is we have great fun doing it!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
