import styles from "./goToTop.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltUp, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const GoToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container} onClick={scrollToTop}>
      <FontAwesomeIcon icon={faLongArrowAltUp} className={styles.icon} />
    </div>
  );
};

export default GoToTop;
