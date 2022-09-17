/* eslint-disable jsx-a11y/heading-has-content */
import styles from "./popularClasses.module.css";
import React from "react";
import SectionTitle from "../../common/sectionTitle/SectionTitle";

const pageInfos = {
  firstTitle: "POPULAR",
  secondTitle: "CLASSES",
  description:
    "We’re not like other gyms. We won’t tie you into a contract. Or charge you a fortune every month. So make yourself at home and take a look around.",
};

const items = [
  {
    image: "./img/courses-1.jpg",
    title: "crosfit",
    description:
      "Curabitur fermentum odio ac enim interdum consequat. Sed vel faucibus leo. Ut turpis ipsum, fringilla eget tortor ...",
    price: "Free",
  },
  {
    image: "./img/courses-2.jpg",
    title: "AEROBIC",
    description:
      "Curabitur fermentum odio ac enim interdum consequat. Sed vel faucibus leo. Ut turpis ipsum, fringilla eget tortor ...",
    price: "Free",
  },
  {
    image: "./img/courses-3.jpg",
    title: "GYM AND FITNESS",
    description:
      "Curabitur fermentum odio ac enim interdum consequat. Sed vel faucibus leo. Ut turpis ipsum, fringilla eget tortor ...",
    price: "Free",
  },
  {
    image: "./img/courses-4.jpg",
    title: "BOXING WORKOUT",
    description:
      "Curabitur fermentum odio ac enim interdum consequat. Sed vel faucibus leo. Ut turpis ipsum, fringilla eget tortor ...",
    price: "$20",
  },
  {
    image: "./img/courses-5.jpg",
    title: "ZUMBA",
    description:
      "Curabitur fermentum odio ac enim interdum consequat. Sed vel faucibus leo. Ut turpis ipsum, fringilla eget tortor ...",
    price: "$30",
  },
  {
    image: "./img/courses-6.jpg",
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
        {items.map((item, i) => (
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={item.image} alt="" />
            </div>
            <div className={styles.inner}>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
