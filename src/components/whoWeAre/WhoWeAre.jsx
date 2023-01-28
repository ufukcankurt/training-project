import styles from "./whoWeAre.module.css";
import React from "react";
import SectionTitle from "../../common/sectionTitle/SectionTitle";

const pageInfos = {
  firstTitle: "WHO",
  secondTitle: "WE ARE",
  description:
    `A fitness family that challenges and helps each other--the best part is we have great fun doing it!`,
};

const whoWeAre = [
  {
    id: "01",
    title: "be patient",
    description:
      "Almost every workout incorporates dumbbells, medicine balls, battle ropes, bands, sandbags, parachutes, pull-up bars, ladders and other equipment in varied and dynamic ways to hit all muscle groups and push cardiovascular fitness.",
  },
  {
    id: "02",
    title: "training hard",
    description:
      "Whether you are looking to lose weight, build strength & tone muscle, or simply improve your overall health, our focus is to help you thrive and have fun working out!",
  },
  {
    id: "03",
    title: "be strong",
    description:
      "Our highly qualified trainers use the latest in sports science to make the classes productive, purposeful and fun!",
  },
  // {
  //   id: "04",
  //   title: "be different",
  //   description:
  //     "It has survived not only five centuries, but also the leap into electronic typesetting",
  // },
];

const WhoWeAre = () => {
  return (
    <div className={styles.container}>
      <SectionTitle pageInfos={pageInfos} />
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <p>
            Okan Caylak Fitness professional and Physical education teacher founded Mammoth Fitness UK in 2019 to fuse key aspects of training: circuit training, weight-lifting, HIIT, functional movement, etc.! His vision was to create a community in Palmers Green/Winchmore/Southgate of great people coming together for dynamic, challenging and engaging classes (people who would workout together and grab coffee or drinks afterwards). Encouraged by the rapid growth of Mammoth Fitness UK and the growing demand of its community, Okan has partnered with friends/trainers to expand the community throughout Enfield!
          </p>
          <div className={styles.infos}>
            <ul>
              {whoWeAre.map((item) => (
                <li key={item.id}>
                  <span className={styles.number}>{item.id}</span>
                  <div className={styles.infosItem}>
                    <span className={styles.infosTitle}>{item.title}</span>
                    <br />
                    <span className={styles.infosDesc}>{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.rightSide}>
          <img src="./img/whoweare3.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
