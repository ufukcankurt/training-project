import styles from "./contact.module.css";
import React, { useState } from "react";
import SectionTitle from "../../common/sectionTitle/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faAddressBook,
  faPhoneSquare,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import Alert from "../alert/Alert";



const pageInfos = {
  firstTitle: "CONTACT",
  secondTitle: "US",
  description:
    "Secure your complimentary trial session and start enhancing your skills! To book your free trial session right away, simply fill out the form below, and we will get back to you as soon as possible!",
};

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      "fullname": name,
      "email": email,
      "adress": adress,
      "phone": phone,
      "subject": subject,
      "message": message,
    };

    try {
      const res = await axios.post("https://mailsender-amp5.onrender.com/mail", data);

      if (res.status === 200) {
        setShow(true);

        setName("");
        setEmail("");
        setAdress("");
        setPhone("");
        setSubject("");
        setMessage("");

        setTimeout(() => {
          setShow(false);
        }, 1000);
      }
    } catch (error) {
      setStatus("fail");
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 1000);

      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <SectionTitle pageInfos={pageInfos} />
      {show ? <Alert status={status} /> : ""}
      <div className={styles.content}>
        <div className={styles.formSide}>
          <p className={styles.title}>Get in touch</p>
          <form className={styles.form} action="">
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                value={name}
                placeholder="Fullname"
                onChange={(e) => setName(e.target.value)}
              />
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                value={email}
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                value={adress}
                placeholder="Adress"
                onChange={(e) => setAdress(e.target.value)}
              />
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faAddressBook} />
              </span>
            </div>
            <div className={styles.inputContainer}>
              <input className={styles.input} type="number" placeholder="Phone" value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faPhoneSquare} />
              </span>
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                value={subject}
                placeholder="Subject"
                onChange={(e) => setSubject(e.target.value)}
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
                value={message}
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </form>
          <button onClick={handleSubmit} className={styles.button}>Send Message</button>
        </div>
        <div className={styles.infoSide}>
          <p className={styles.title}>Contact Information</p>
          <div className={styles.infos}>
            <div className={styles.trainerSocials}>
              <a className={styles.facebook} href="https://www.facebook.com/greatbearfitness" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
              <a className={styles.instagram} href="https://instagram.com/greatbearfitness" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className={styles.youtube} href="https://www.youtube.com/@GreatBearFitnessUK" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
            <a href="tel:+07883692262" className={styles.info}>07883692262</a>
            <a href="mailto:info@greatbearfitness.co.uk" className={styles.info}>info@greatbearfitness.co.uk</a>

            <p className={`${styles.mainInfo} ${styles.info}`}>We’re not like other gyms. We won’t tie you into a contract. Or charge you a fortune every month. So make yourself at home and take a look around.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
