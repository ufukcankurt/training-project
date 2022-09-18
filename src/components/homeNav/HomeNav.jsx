import styles from "./homeNav.module.css";
import React, { useState } from "react";

const HomeNav = () => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 30) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div
      className={`${styles.container} ${
        sticky ? styles.notSticky : styles.sticky
      }`}
    >
      <div className={styles.content}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.links}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a href="#home">
                <span className={styles.link}>Home</span>
              </a>
            </li>
            <li className={styles.li}>
              <a href="#about">
                <span className={styles.link}>About</span>
              </a>
            </li>
            <li className={styles.li}>
              <a href="#classes">
                <span className={styles.link}>Classes</span>
              </a>
            </li>
            <li className={styles.li}>
              <a href="#trainers">
                <span className={styles.link}>Trainers</span>
              </a>
            </li>
            <li className={styles.li}>
              <a href="#pricing">
                <span className={styles.link}>Pricing</span>
              </a>
            </li>
            <li className={styles.li}>
              <a href="#contact">
                <span className={styles.link}>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
