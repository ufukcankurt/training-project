import styles from "./ourTrainer.module.css";
import React from "react";
import SectionTitle from "../../common/sectionTitle/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const pageInfos = {
  firstTitle: "OUR",
  secondTitle: "TRAINNER",
  description:
    "We’re not like other gyms. We won’t tie you into a contract. Or charge you a fortune every month. So make yourself at home and take a look around.",
};

const trainers = [
  {
    name: "Charlie Perez",
    position: "Personal Trainer",
    description:
      "The training sufficiently covered cloud fundamentals. Good outline with crisp real life examples. The course ...",
    image: "./img/trainer-1.png",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
  },
  {
    name: "Gabriella Morales",
    position: "Personal Trainer",
    description:
      "The training sufficiently covered cloud fundamentals. Good outline with crisp real life examples. The course ...",
    image: "./img/trainer-2.png",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
  },
  {
    name: "Tommy Romero",
    position: "Personal Trainer",
    description:
      "The training sufficiently covered cloud fundamentals. Good outline with crisp real life examples. The course ...",
    image: "./img/trainer-3.png",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
  },
  {
    name: "Lauren Bailey",
    position: "Personal Trainer",
    description:
      "The training sufficiently covered cloud fundamentals. Good outline with crisp real life examples. The course ...",
    image: "./img/trainer-4.png",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
  },
];

const OurTrainer = () => {
  return (
    <div className={styles.container}>
      <SectionTitle pageInfos={pageInfos} />
      <div className={styles.content}>
        {trainers.map((trainer, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.trainerImg}>
              <img src={trainer.image} alt="" />
            </div>
            <div className={styles.trainerInfos}>
              <div className={styles.trainerTitles}>
                <p className={styles.name}>{trainer.name}</p>
                <p className={styles.position}>{trainer.position}</p>
              </div>
              <div className={styles.trainerDesc}>{trainer.description}</div>
              <div className={styles.trainerSocials}>
                <a className={styles.facebook} href={trainer.facebook}>
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
                <a className={styles.twitter} href={trainer.twitter}>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className={styles.instagram} href={trainer.instagram}>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTrainer;
