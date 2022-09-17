import styles from "./homeBanner.module.css"
import React from 'react'

const HomeBanner = () => {
  return (
    <div className={`${styles.container} d-center`}>
        {/* <img className={styles.img} src="/img/banner.jpg" alt="" /> */}
        <div className={styles.subHead}>Welcome To Our Studio!</div>
        <div className={styles.head}>IT'S NICE TO MEET YOU</div>
    </div>
  )
}

export default HomeBanner