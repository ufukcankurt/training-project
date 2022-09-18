import styles from "./contact.module.css";
import React from "react";
import SectionTitle from "../../common/sectionTitle/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faAddressBook,
  faPhoneSquare,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";

const pageInfos = {
  firstTitle: "CONTACT",
  secondTitle: "US",
  description:
    "We’re not like other gyms. We won’t tie you into a contract. Or charge you a fortune every month. So make yourself at home and take a look around.",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <SectionTitle pageInfos={pageInfos} />
      <div className={styles.content}>
        <div className={styles.formSide}>
          <p className={styles.title}>Get in touch</p>
          <form className={styles.form} action="">
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                placeholder="Fullname"
              />
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                placeholder="E-mail"
              />
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                placeholder="Adress"
              />
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faAddressBook} />
              </span>
            </div>
            <div className={styles.inputContainer}>
              <input className={styles.input} type="text" placeholder="Phone" />
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faPhoneSquare} />
              </span>
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                placeholder="Subject"
              />
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faIdCard} />
              </span>
            </div>
            <div className={styles.inputContainer}>
              <textarea
                className={styles.textarea}
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
          </form>
          <button className={styles.button}>Send Message</button>
        </div>
        <div className={styles.infoSide}>
          <p className={styles.title}>Contact Information</p>
          <div className={styles.infos}>
            <p className={styles.info}>492 Caledonian Road N7 9RP</p>
            <a href="w." className={styles.info}>0752458457</a>
            <a href="w." className={styles.info}>info@example.com</a>
            <a href="w." className={styles.info}>www.example.com</a>

            <p className={`${styles.mainInfo} ${styles.info}`}>We’re not like other gyms. We won’t tie you into a contract. Or charge you a fortune every month. So make yourself at home and take a look around.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
