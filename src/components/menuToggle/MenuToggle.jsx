import styles from './menuToggle.module.css'

const MenuToggle = ({isActive, setIsActive}) => {



  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div onClick={handleClick} className={`${styles.container} ${ isActive ? styles.change : ""}`}>
      <div className={styles.bar1}></div>
      <div className={styles.bar2}></div>
      <div className={styles.bar3}></div>
    </div>
  )
}

export default MenuToggle
