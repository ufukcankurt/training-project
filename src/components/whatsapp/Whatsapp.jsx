import React from 'react'
import styles from './whatsapp.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

const Whatsapp = () => {
  return (
    <div className={styles.container}>
      <a href="https://wa.me/message/LLYCPWMPWGFFN1" target="_blank" rel="noreferrer">
        <div className={`${styles.item} ${styles.whatsapp}`}>
          <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
        </div>
      </a>

    </div>
  )
}

export default Whatsapp
