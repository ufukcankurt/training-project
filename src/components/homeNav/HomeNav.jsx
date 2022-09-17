import styles from "./homeNav.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
              <Link to="/">
                <span className={styles.link}>Home</span>
              </Link>
            </li>
            <li className={styles.li}>
              <Link to="/">
                <span className={styles.link}>Home</span>
              </Link>
            </li>
            <li className={styles.li}>
              <Link to="/">
                <span className={styles.link}>Home</span>
              </Link>
            </li>
            <li className={styles.li}>
              <Link to="/">
                <span className={styles.link}>Home</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
