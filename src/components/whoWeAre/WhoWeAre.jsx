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
    title: "Dynamic workouts",
    description:
      "Almost every workout incorporates dumbbells, medicine balls, battle ropes, bands, sandbags, parachutes, pull-up bars, ladders and other equipment in varied and dynamic ways to hit all muscle groups and push cardiovascular fitness.",
  },
  {
    id: "02",
    title: "personalized results",
    description:
      "Whether you are looking to lose weight, build strength & tone muscle, or simply improve your overall health, our focus is to help you thrive and have fun working out!",
  },
  {
    id: "03",
    title: "Research-Driven Training",
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

const items = [
  {
    image: "./img/join-2.jpg",
  },
  {
    image: "./img/join-3.jpg",
  },
  {
    image: "./img/join-1.jpg",
  },
];

const WhoWeAre = () => {
  return (
    <div className={styles.container}>
      <SectionTitle pageInfos={pageInfos} />
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <p>
            Okan Caylak Fitness professional and Physical education teacher founded Great Bear Fitness UK in 2019 to fuse key aspects of training: circuit training, weight-lifting, HIIT, functional movement, etc.! His vision was to create a community in Palmers Green/Winchmore/Southgate of great people coming together for dynamic, challenging and engaging classes (people who would workout together and grab coffee or drinks afterwards). With such strong support and growth in the Palmers Green location, Great Bear Fitness is proud to expand to Enfield Town Park!
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
        {items.map((item, i) => (
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={item.image} alt="" />
            </div>
            <div className={styles.inner}>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
