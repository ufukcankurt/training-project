import styles from "./whoWeAre.module.css";
import React from "react";
import SectionTitle from "../../common/sectionTitle/SectionTitle";

const pageInfos = {
  firstTitle: "WHO",
  secondTitle: "WE ARE",
  description:
    "We’re not like other gyms. We won’t tie you into a contract. Or charge you a fortune every month. So make yourself at home and take a look around.",
};

const whoWeAre = [
  {
    id: "01",
    title: "be patient",
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting",
  },
  {
    id: "02",
    title: "training hard",
    description:
      "It was popularised in the 1960s with the release of Letraset sheets containing",
  },
  {
    id: "03",
    title: "be strong",
    description:
      "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    id: "04",
    title: "be different",
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting",
  },
];

const WhoWeAre = () => {
  return (
    <div className={styles.container}>
      <SectionTitle pageInfos={pageInfos} />
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
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
