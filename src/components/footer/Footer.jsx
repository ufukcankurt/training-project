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
            We’re not like other gyms. We won’t tie you into a contract. Or
            charge you a fortune every month. So make yourself at home and take
            a look around.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
