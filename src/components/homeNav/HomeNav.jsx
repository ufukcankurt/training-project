import styles from "./homeNav.module.css";
import React, { useState } from "react";
import { Link } from "react-scroll";

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
              <Link
                to="home"
                activeClass={styles.active}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <span className={styles.link}>Home</span>
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                to="about"
                activeClass={styles.active}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <span className={styles.link}>About</span>
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                to="classes"
                activeClass={styles.active}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <span className={styles.link}>Classes</span>
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                to="trainers"
                activeClass={styles.active}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <span className={styles.link}>Trainers</span>
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                to="pricing"
                activeClass={styles.active}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <span className={styles.link}>Pricing</span>
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                to="contact"
                activeClass={styles.active}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <span className={styles.link}>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
