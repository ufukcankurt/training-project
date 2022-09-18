import styles from "./footerBottom.module.css";
import React from "react";

const FooterBottom = () => {
  return (
    <div className={`${styles.container} d-center`}>
      <p> Copyright © {new Date().getFullYear()} All rights reserved.</p>{" "}
    </div>
  );
};

export default FooterBottom;
