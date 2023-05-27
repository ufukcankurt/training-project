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
  firstTitle: "MEET ",
  secondTitle: "THE TEAM",
  description:
    "",
};

const trainers = [
  {
    name: "Okan Caylak",
    position: "Personal Trainer",
    description:
      "With over a decade of individual and group training experience, Okan founded Great Bear Fitness UK and leads much of the instruction. He possesses a Bachelor degree in Sports Science and a level 3 personal training diploma. Having worked as a Physical Education Teacher at St John's RC Special Needs School, Okan has developed an approach to instruction where he is intune with and meets all class participants’ needs. He is incredibly passionate about helping people improve their health, performance and wellbeing.",
    qualifications: ["Bachelor degree in Sports Science", "REP level 3 Personal Trainer", "Level 2 GYM instructor", "Award in Circuit Instruction", "Award in teaching Personal Training Outdoors", "Award in Indoor Cycling", "Award in GP & Exercises Referral", "Level 2 Mental health awarenesses"],
    specialization: ["Weight training", "Outdoor Training", "Weight loss", "Client motivation", "Postural training", "Muscle building", "Sport specific training"],
    image: "./img/okancaylak.png",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
  },
  {
    name: "TONY RIDDLE",
    position: "Personal Trainer",
    description:
      "The training sufficiently covered cloud fundamentals. Good outline with crisp real life examples.",
    qualifications: ["Bachelor degree in Sports Science", "REP level 3 Personal Trainer", "Level 2 GYM instructor", "Award in Circuit Instruction", "Award in teaching Personal Training Outdoors", "Award in Indoor Cycling", "Award in GP & Exercises Referral", "Level 2 Mental health awarenesses"],
    specialization: ["Weight training", "Outdoor Training", "Weight loss", "Client motivation", "Postural training", "Muscle building", "Sport specific training"],
    image: "./img/okancaylak.png",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
  },
  {
    name: "ANDREA",
    position: "Personal Trainer",
    description:
      "I am Andrea, an experienced and versatile sportsman passionate about helping individuals of all ages and backgrounds achieve their fitness goals. With a sports fitness and coaching degree, I have applied my skills as a swimming coach, personal trainer, boxing coach and weightlifting coach. My experience spans from children to adults, amateurs to competitive athletes, and all those in-between! Alongside my coaching and training services, I am here to provide ongoing support and motivation: a positive and empowering environment drives long-term success. Together, we can build a strong foundation of fitness and overall well-being!",
    qualifications: ["Degree in Sport Fitness and coaching", "Swimming instructor qualification ", "Swimming coach qualification ", "Football coach qualification"],
    specialization: ["Weight training", "Boxing", "Swimming", "Muscle building", "Weight loss", "Power lifting"],
    image: "./img/okancaylak.png",
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
            <div className={styles.trainerGeneral}>
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
            <div className={styles.trainerSpecific}>
              <div className={styles.qualifications}>
                <h2 className={styles.trainerSpecificTitle}>Qualifications</h2>
                {trainer.qualifications.map((qualification, i) =>
                  <p key={i} className={styles.trainerSpecificDesc}> <span className={styles.dot}>•</span> {qualification}</p>
                )}
              </div>
              <div className={styles.specialization}>
                <h2 className={styles.trainerSpecificTitle}>Specialization</h2>
                {trainer.specialization.map((specialization, i) =>
                  <p key={i} className={styles.trainerSpecificDesc}> <span className={styles.dot}>•</span> {specialization}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTrainer;
