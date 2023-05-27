/* eslint-disable jsx-a11y/heading-has-content */
import styles from "./popularClasses.module.css";
import React from "react";
import SectionTitle from "../../common/sectionTitle/SectionTitle";

const pageInfos = {
  firstTitle: "Join",
  secondTitle: "Our Family",
  description:
    "Join our fitness community of motivated and supportive individuals as we train together: our family ranges from those new to circuits and weight-training to athletes who seek challenging workouts to all those in-between! Whatever your level, you will get the workout, support and community you’ve come for!",
};

const items = [
  {
    image: "./img/first1.jpg",
    title: "crosfit",
    description:
      "Curabitur fermentum odio ac enim interdum consequat. Sed vel faucibus leo. Ut turpis ipsum, fringilla eget tortor ...",
    price: "Free",
  },
  {
    image: "./img/first2.jpg",
    title: "AEROBIC",
    description:
      "Curabitur fermentum odio ac enim interdum consequat. Sed vel faucibus leo. Ut turpis ipsum, fringilla eget tortor ...",
    price: "Free",
  },
  {
    image: "./img/first3.jpg",
    title: "GYM AND FITNESS",
    description:
      "Curabitur fermentum odio ac enim interdum consequat. Sed vel faucibus leo. Ut turpis ipsum, fringilla eget tortor ...",
    price: "Free",
  },
  {
    image: "./img/join-4.jpg",
    title: "BOXING WORKOUT",
    description:
      "Curabitur fermentum odio ac enim interdum consequat. Sed vel faucibus leo. Ut turpis ipsum, fringilla eget tortor ...",
    price: "$20",
  },
  {
    image: "./img/first4.jpg",
    title: "ZUMBA",
    description:
      "Curabitur fermentum odio ac enim interdum consequat. Sed vel faucibus leo. Ut turpis ipsum, fringilla eget tortor ...",
    price: "$30",
  },
  {
    image: "./img/join-23.jpg",
    title: "YOGA FITNESS",
    description:
      "Curabitur fermentum odio ac enim interdum consequat. Sed vel faucibus leo. Ut turpis ipsum, fringilla eget tortor ...",
    price: "$40",
  },
];

const PopularClasses = () => {
  return (
    <div className={styles.container}>
      <SectionTitle pageInfos={pageInfos} />
      <div className={styles.content}>
        {/* <img src="./img/join.jpg" alt="" /> */}
        {items.map((item, i) => (
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={item.image} alt="" />
            </div>
            {/* <div className={styles.inner}>
              <div className={styles.header}>
                <h4 className={styles.h4}>
                  <p className={styles.title}>{item.title}</p>
                </h4>
              </div>
              <div className={styles.hovered}>
                <h4 className={styles.insideh4}>
                  <p className={styles.title}>{item.title}</p>
                </h4>
                <div className={styles.desc}>{item.description}</div>
                <div className={styles.price}>
                  <span>{item.price}</span>
                </div>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
