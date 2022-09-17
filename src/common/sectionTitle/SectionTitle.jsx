import styles from "./sectionTitle.module.css";
import React from "react";

const SectionTitle = ({pageInfos}) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContent}>
        <div className={styles.colorful}>{pageInfos.firstTitle}</div>
        <div className={styles.normal}>{pageInfos.secondTitle}</div>
      </div>
      <div className={styles.desc}>
       {pageInfos.description}
      </div>
    </div>
  );
};

export default SectionTitle;
