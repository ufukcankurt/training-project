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
import Footer from "../../components/footer/Footer";
import FooterBottom from "../../components/footerBottom/FooterBottom";

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
      <footer className={`${styles.footer} section`}>
        <Footer />
      </footer>
      <section className={`${styles.footerBottom} d-center`}>
        <FooterBottom />
      </section>
    </div>
  );
};

export default Homepage;
