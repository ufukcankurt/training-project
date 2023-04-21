/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import styles from './menuMobil.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

const socials = [
  {
    name: "facebook",
    link: "https://www.facebook.com/",
    icon: faFacebookSquare,
  },
]

const MenuMobil = ({ setIsActive, isActive }) => {

  const closeMenu = () => {
    if (isActive) {
      setIsActive(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <ul className={styles.ul}>
          <li className={styles.li} >
            <Link
              to="home"
              activeClass={styles.active}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              onClick={closeMenu}
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
              offset={-60}
              duration={500}
              onClick={closeMenu}
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
              offset={-60}
              duration={500}
              onClick={closeMenu}
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
              offset={-60}
              duration={500}
              onClick={closeMenu}
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
              offset={-60}
              duration={500}
              onClick={closeMenu}
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
              offset={-60}
              duration={500}
              onClick={closeMenu}
            >
              <span className={styles.link}>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        {/* <p>Follow Us</p> */}
        <div className={styles.socials}>
          <a className={styles.facebook} href={socials}>
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a className={styles.twitter} href={socials}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className={styles.instagram} href={socials}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default MenuMobil
