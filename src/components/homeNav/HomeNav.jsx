import styles from "./homeNav.module.css";
import React, { useState } from "react";
import { Link } from "react-scroll";
import MenuToggle from "../menuToggle/MenuToggle";
import MenuMobil from "../menuMobil/MenuMobil";

const HomeNav = () => {
  const [sticky, setSticky] = useState(false);
  const [isActive, setIsActive] = useState(false)

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
      className={`${styles.container} ${sticky ? styles.notSticky : styles.sticky
        }`}
    >
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="./img/logo5.png" alt="" />
        </div>
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
                to="comment"
                activeClass={styles.active}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <span className={styles.link}>Testimonials</span>
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                to="team"
                activeClass={styles.active}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <span className={styles.link}>Team</span>
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                to="locations"
                activeClass={styles.active}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <span className={styles.link}>Locations</span>
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
        <MenuToggle isActive={isActive} setIsActive={setIsActive} />
        {isActive ? <MenuMobil setIsActive={setIsActive} isActive={isActive} /> : ""}
      </div>
    </div>
  );
};

export default HomeNav;
