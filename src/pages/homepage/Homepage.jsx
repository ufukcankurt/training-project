import styles from "./homepage.module.css";
import React from "react";
import HomeBanner from "../../components/homeBanner/HomeBanner";
import HomeNav from "../../components/homeNav/HomeNav";

import WhoWeAre from "../../components/whoWeAre/WhoWeAre";
import PopularClasses from "../../components/popularClasses/PopularClasses";

const Homepage = () => {
  return (
    <div className={`${styles.container}`}>
      <HomeNav />
      <HomeBanner />
      <section className={`${styles.firstSection} section`}>
        <WhoWeAre />
      </section>
      <section className={`${styles.secondSection} section`}>
        <PopularClasses/>
      </section>
    </div>
  );
};

export default Homepage;
