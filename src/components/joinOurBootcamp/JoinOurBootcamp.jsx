import styles from "./joinOurBootcamp.module.css";
import React from "react";
import SectionTitle from "../../common/sectionTitle/SectionTitle";

const pageInfos = {
  firstTitle: "Why",
  secondTitle: "Group Classes",
  description:
    `Fitness is best served with friends! Workout with and get to know your neighbours as building a local workout community is our ethos: coffee after class, picnics in the park, pub outings, Holiday Parties!`,
};

const whoWeAre = [
  {
    id: "01",
    title: "",
    description:
      "It’s always easier to workout with friends",
  },
  {
    id: "02",
    title: "",
    description:
      "All fitness levels are welcome (exercises are adapted to in both directions: more accessible and more challenging)",
  },
  {
    id: "03",
    title: "",
    description:
      "Structured workouts curated by personal trainers",
  },
  {
    id: "04",
    title: "",
    description:
      "Accountability to each other",
  },
  {
    id: "05",
    title: "",
    description:
      "It’s fun!",
  },
];


const items = [
  {
    image: "./img/joinour1.jpg",
  },
  {
    image: "./img/joinour2.jpg",
  },
  // {
  //   image: "./img/joinour3.jpg",
  // },
];

const JoinOurBootcamp = () => {
  return (
    <div className={styles.container}>
      <SectionTitle pageInfos={pageInfos} />
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <div className={styles.infos}>
            <ul>
              {whoWeAre.map((item) => (
                <li key={item.id}>
                  <span className={styles.number}>{item.id}</span>
                  <div className={styles.infosItem}>
                    {item.title !== "" && <span className={styles.infosTitle}>{item.title}</span>}
                    {item.title !== "" && <br />}
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

export default JoinOurBootcamp;
