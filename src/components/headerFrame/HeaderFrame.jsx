import React from 'react'
import styles from "./headerFrame.module.css"

const HeaderFrame = () => {
  return (
    <div className={styles.container}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/W8tfmVgtR3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default HeaderFrame
