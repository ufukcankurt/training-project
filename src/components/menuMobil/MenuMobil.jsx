/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import styles from './menuMobil.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faWhatsapp,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

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
          <a className={styles.facebook} href="https://www.facebook.com/greatbearfitnessuk" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a className={styles.instagram} href="https://instagram.com/greatbearfitnessuk/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className={styles.youtube} href="https://www.youtube.com/@GreatBearFitnessUK" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a className={styles.whatsapp} href="https://wa.me/message/LLYCPWMPWGFFN1" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default MenuMobil
