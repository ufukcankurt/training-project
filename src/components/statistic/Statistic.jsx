import styles from "./statistic.module.css";
import React from "react";

const counts = [
  {
    title: "Centers",
    count: 12,
  },
  {
    title: "Trainers",
    count: 120,
  },
  {
    title: "Equipments",
    count: 325,
  },
  {
    title: "Members",
    count: 4502,
  },
];

const Statistic = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {counts.map((item, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.itemContent}>
              <span className={styles.count}>{item.count}</span>
            </div>
            <p className={styles.title}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistic;
