import React from 'react'
import styles from "./headerFrame.module.css"

const HeaderFrame = () => {
  return (
    <div className={styles.container}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/CFiCdpnn-jo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default HeaderFrame
