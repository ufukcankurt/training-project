import styles from "./socials.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.item} ${styles.facebook}`}>
        <FontAwesomeIcon icon={faFacebookSquare} className={styles.icon} />
      </div>
      <div className={`${styles.item} ${styles.twitter}`}>
        <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
      </div>
      <div className={`${styles.item} ${styles.instagram}`}>
        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
      </div>

      <div className={`${styles.item} ${styles.linkedin}`}>
        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
      </div>
      <div className={`${styles.item} ${styles.youtube}`}>
        <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
      </div>
    </div>
  );
};

export default Socials;
