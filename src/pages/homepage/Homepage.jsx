import styles from "./homepage.module.css";
import React, { useState } from "react";
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
import GoToTop from "../../components/goToTop/GoToTop";

const Homepage = () => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 30) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className={`${styles.container}`}>
      {sticky && <GoToTop />}
      <section id="home">
        <HomeNav />
      </section>
      <HomeBanner />
      <section className={`section`} id="about">
        <WhoWeAre />
      </section>
      <section className={`${styles.secondSection} section`} id="classes">
        <PopularClasses />
      </section>
      <section className={`section`} id="trainers">
        <OurTrainer />
      </section>
      <section className={`${styles.fourthSection} section`} id="pricing">
        <OurPricing />
      </section>
      <section>
        <Statistic className={`${styles.fifthSection} section`} />
      </section>
      <section className={`${styles.sixthSection} section`} id="contact">
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
