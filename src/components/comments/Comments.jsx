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
    text: "I’ve been going to Mammoth Fitness in Grovelands Park for a few months now and it’s really a fantastic local class. It’s a challenging class but still accessible and adaptable for all levels. It’s a very nice community seeing the same faces each week. Okan is a great instructor and the exercises change each week so it keeps it fun and varied! I’m happy to have found something like this locally as have to travel into the city for this level of exercise class.",
  },
  {
    id: 2,
    name: "Cait B",
    img: "/img/comment_2.jpg",
    text: "Neighbourhood Fitness at its Best! I recently moved to the neighbourhood and discovered Mammoth Fitness while out walking my dog. (Great music and positive energy radiating from the church gym!) Okan (the owner) was super welcoming and I got to try my first session for free! It was fantastic and I’ve been a regular for the past 2 months. It is a wonderful supportive group, most of whom live nearby, so it’s been great to meet my neighbours, of all fitness levels! We all work out together in stations and there are options for beginners and advanced. Therefore, you will get the exact workout you require for the stage of fitness you are at in your life. I especially love the outdoor sessions that are on Saturday’s at Grovelands park! Highly recommend this Bootcamp, and specifically Okan!",
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
  return (
    <div className={styles.container}>
       <SectionTitle pageInfos={pageInfos} />
      <Swiper pagination={true} modules={[Pagination, Navigation]} navigation={true} className="mySwiper">
        {
          allComments.map((comment) => <SwiperSlide><Comment comment={comment} /></SwiperSlide>)
        }
      </Swiper>
    </div>
  );
}

export default Comments
