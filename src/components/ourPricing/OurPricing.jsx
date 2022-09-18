import styles from "./ourPricing.module.css";
import React from "react";
import SectionTitle from "../../common/sectionTitle/SectionTitle";

const pageInfos = {
  firstTitle: "OUR",
  secondTitle: "PRICING",
  description:
    "We’re not like other gyms. We won’t tie you into a contract. Or charge you a fortune every month. So make yourself at home and take a look around.",
};

const prices = [
  {
    title: "Beginner",
    price: "$30",
    month: "1 month",
    body: ["GYM", "FITNESS", "SAUNA", "MASSAGE", "X", "X"],
  },
  {
    title: "Standart",
    price: "$60",
    month: "1 month",
    body: ["GYM", "FITNESS", "SAUNA", "MASSAGE", "TRAINER", "X"],
  },
  {
    title: "Pro",
    price: "$90",
    month: "1 month",
    body: ["GYM", "FITNESS", "SAUNA", "MASSAGE", "TRAINER", "DRINK"],
  },
];

const OurPricing = () => {
  return (
    <div className={styles.container}>
      <SectionTitle pageInfos={pageInfos} />
      <div className={styles.content}>
        {prices.map((price, i) => (
          <div key={i} className={styles.item}>
            <p className={styles.title}>{price.title}</p>
            <div className={styles.priceContent}>
              <span className={styles.price}>{price.price}</span>
              <p className={styles.month}>{price.month}</p>
            </div>
            <div className={styles.body}>
              <ul>
                {price.body.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPricing;
