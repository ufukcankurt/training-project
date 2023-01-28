import React from 'react'
import styles from "./location.module.css";

const Location = ({location}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{location.title}</h2>
      <div className={styles.locationInfo}>
        <img className={styles.svgLocation} src="./img/location5.svg" alt="" />
        <p className={styles.date}>{location.location}</p>
      </div>
      <div className={styles.locationInfo}>
        <img className={styles.svg} src="./img/time.svg" alt="" />
        <p className={styles.date}>{location.date}</p>
      </div>
      <div className={styles.map}>
        <iframe id="gmap_canvas" src={location.src} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
    </div>
  )
}

export default Location
