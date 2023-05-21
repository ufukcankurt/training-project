import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";
import styles from "./comments.module.css";

// import required modules
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import Comment from "../comment/Comment";
import SectionTitle from "../../common/sectionTitle/SectionTitle";

const pageInfos = {
  firstTitle: "YOUR",
  secondTitle: "Testimonials",
  description:
    "",
};

const allComments = [
  {
    id: 1,
    name: "Stefanie Dalton",
    img: "/img/comment_1.jpg",
    text: "I’ve been going to Great Bear Fitness in Grovelands Park for a few months now and it’s really a fantastic local class. It’s a challenging class but still accessible and adaptable for all levels. It’s a very nice community seeing the same faces each week. Okan is a great instructor and the exercises change each week so it keeps it fun and varied! I’m happy to have found something like this locally as have to travel into the city for this level of exercise class.",
  },
  {
    id: 3,
    name: "Arden Janicek",
    img: "/img/comment_3.jpg",
    text: "I have been working with Okan for a year now and the results have been nothing short of amazing. Okan is not only knowledgeable about all aspects of fitness, but also about nutrition, which is critical to achieving my goals. Okan is always pushing me to be my best, but also making sure I don't overdo it and get injured. I would recommend Okan to anyone looking to improve their health and fitness.",
  },
  {
    id: 4,
    name: "Reginia Dullinger",
    img: "/img/comment_4.jpg",
    text: "I have been working with Okan for the past 6 months and have seen incredible results. Not only has my fitness improved, but Okan has also helped me improve my overall well-being. Okan is incredibly knowledgeable and always pushes me to be my best. I highly recommend Okan to anyone looking to improve their fitness and overall health.",
  },
  {
    id: 5,
    name: "Harrison Dowdy",
    img: "/img/comment_5.jpg",
    text: "I have been working with Okan for several months and have seen tremendous progress. Okan is incredibly knowledgeable and has helped me to not only improve my physical fitness, but also my mental well-being. Okan is a great listener and provides valuable feedback and support throughout each workout. I highly recommend Okan to anyone looking to improve their overall health and fitness.",
  },
]

const Comments = () => {
  const windowWidth = window.innerWidth;
  return (
    <div className={styles.container}>
      <SectionTitle pageInfos={pageInfos} />
      {windowWidth < 992 ?
        <Swiper pagination={false} modules={[Pagination, Navigation]} navigation={true} className="mySwiper">
          {
            allComments.map((comment) => <SwiperSlide><Comment comment={comment} /></SwiperSlide>)
          }
        </Swiper>
        : null}
      {
        windowWidth > 992 ?
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {
              allComments.map((comment) => <SwiperSlide><Comment comment={comment} /></SwiperSlide>)
            }
          </Swiper>
          : null
      }
    </div>
  );
}

export default Comments
