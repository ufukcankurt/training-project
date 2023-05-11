import styles from "./socials.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faYoutube,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div className={styles.container}>
      <a href="https://www.facebook.com/greatbearfitnessuk" target="_blank" rel="noreferrer">
        <div className={`${styles.item} ${styles.facebook}`}>
          <FontAwesomeIcon icon={faFacebookSquare} className={styles.icon} />
        </div>
      </a>
      <a href="https://instagram.com/greatbearfitnessuk/" target="_blank" rel="noreferrer">
        <div className={`${styles.item} ${styles.instagram}`}>
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        </div>
      </a>
      <a href="https://www.youtube.com/@GreatBearFitnessUK" target="_blank" rel="noreferrer">
        <div className={`${styles.item} ${styles.youtube}`}>
          <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
        </div>
      </a>
      <a href="https://wa.me/message/LLYCPWMPWGFFN1"target="_blank" rel="noreferrer">
        <div className={`${styles.item} ${styles.whatsapp}`}>
          <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
        </div>
      </a>
    </div>
  );
};

export default Socials;
