import styles from "./homepage.module.css";
import React, { useState } from "react";
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
import HeaderFrame from "../../components/headerFrame/HeaderFrame";
import JoinOurBootcamp from './../../components/joinOurBootcamp/JoinOurBootcamp';
import Comments from "../../components/comments/Comments";
import Locations from "../../components/locations/Locations";
import Whatsapp from "../../components/whatsapp/Whatsapp";

const Homepage = () => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 180) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className={`${styles.container}`}>
      {sticky && <GoToTop />}
      {sticky && <Whatsapp />}

      <section id="home">
        <HomeNav />
      </section>
      {/* <HomeBanner /> */}
      <HeaderFrame />
      <section className={`section`} id="about">
        <PopularClasses />
      </section>
      <section className={`${styles.secondSection} section`} id="about">
        <WhoWeAre />
      </section>
      <section className={`section`}>
        <JoinOurBootcamp />
      </section>
      <section className={`${styles.fourthSection} section`} id="comment">
        <Comments />
      </section>
      <section className={`section`} id="team">
        <OurTrainer />
      </section>
      <section className={`${styles.sixthSection} section`} id="about">
        <OurPricing />
      </section>
      <section className={`section`} id="locations">
        <Locations />
      </section>
      <section className={`${styles.eigthSection} section`} id="contact">
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
