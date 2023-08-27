import React from "react";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loaderWrapperButton}>
        <div className={styles.loader}>
          <div className={`${styles.loader} ${styles.loaderInner}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
