import styles from "./homepage.module.css";
import React from "react";
import HomeBanner from "../../components/homeBanner/HomeBanner";
import HomeNav from "../../components/homeNav/HomeNav";

import WhoWeAre from "../../components/whoWeAre/WhoWeAre";
import PopularClasses from "../../components/popularClasses/PopularClasses";
import OurTrainer from "../../components/ourTrainer/OurTrainer";
import OurPricing from "../../components/ourPricing/OurPricing";
import Statistic from "../../components/statistic/Statistic";
import Contact from "../../components/contact/Contact";

const Homepage = () => {
  return (
    <div className={`${styles.container}`}>
      <HomeNav />
      <HomeBanner />
      <section className={`section`}>
        <WhoWeAre />
      </section>
      <section className={`${styles.secondSection} section`}>
        <PopularClasses />
      </section>
      <section className={`section`}>
        <OurTrainer />
      </section>
      <section className={`${styles.fourthSection} section`}>
        <OurPricing />
      </section>
      <section>
        <Statistic className={`${styles.fifthSection} section`} />
      </section>
      <section className={`${styles.sixthSection} section`}>
        <Contact />
      </section>
    </div>
  );
};

export default Homepage;
