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
    name: "Tayler Pell",
    img: "/img/comment_2.jpg",
    text: "Great Bear Fitness has allowed me to grow my confidence and lose weight all while having fun and feeling part of a team. Okan is a great trainer and really thinks about how to get the most out of us in an hour. The feeling after a workout is so addictive that we can’t stop going rain or shine!",
  },
  {
    id: 3,
    name: "Cait B",
    img: "/img/comment_3.jpg",
    text: "Neighbourhood Fitness at its Best! I recently moved to the neighbourhood and discovered Great Bear Fitness while out walking my dog. (Great music and positive energy radiating from the church gym!)Okan (the owner) was super welcoming and I got to try my first session for free! It was fantastic and I’ve been a regular for the past 8 months. It is a wonderful supportive group, most of whom live nearby, so it’s been great to meet my neighbours, of all fitness levels! We all work out together in stations and there are options for beginners and advanced. Therefore, you will get the exact workout you require for the stage of fitness you are at in your life. I especially love the outdoor sessions that are on Saturday’s at Grovelands park! Highly recommend this Bootcamp, and specifically Okan!",
  },
  {
    id: 4,
    name: "Helen",
    img: "/img/comment_4.jpg",
    text: "Bootcamp with Okan at Great Bear Fitness is fantastic! What seems at first like a tough hour ahead is turned into an hour of fun due to Okan’s abilities to motivate and equally challenge us all. A mix of circuits and cardio which Okan changes up means we never get bored and always feel uplifted when we finish!! I have got fitter and met some great new people - we often go for coffee afterwards to chat and cool down. Thank you team Great Bear",
  },
  {
    id: 5,
    name: "Mike",
    img: "/img/comment_5.jpg",
    text: "I have been enjoying Mammoth Fitness classes since Aug 2022. Okan is great, he has excellent communication, he is very attentive and offers different varieties of workout. I like the flexibility of only charging for classes attended which for me is a great value for money. Okan has built a lovely community of people who are friendly and supporting.",
  },
  {
    id: 6,
    name: "Stephanie Lissowski",
    img: "/img/comment_6.jpg",
    text: "Great Bear fitness has really got me back to enjoying exercise again after having 2 children! Okan is so encouraging and pushes you but in a kind way that makes you want to push yourself! The classes are all mixed ability so it never feels daunting. I particularly enjoy the Friday HIIT sessions as it sets me up in a good mood for the day! 💪🏼",
  },
  {
    id: 7,
    name: "Eva Zeeb",
    img: "/img/comment_7.jpg",
    text: "Can't recommend these fitness sessions highly enough! They are perfect for any fitness level, and are guaranteed to challenge you and leave you in a great mood every time. After several years of exercising at home on my own it's been so motivating to exercise with people again, and to have someone (very kindly) push you that little bit more every time. I don't even hate burpees anymore! Thanks Okan.",
  },
  {
    id: 8,
    name: "Evelina Butkuke",
    img: "/img/comment_8.jpg",
    text: "Best boot camp style classes. Okan is just wonderful. Despite having a big class he still manages to provide customised service and encourages everyone to do their best. I get more out of his classes than my PT.",
  },
  {
    id: 9,
    name: "Klaudia Jones",
    img: "/img/comment_9.jpg",
    text: "I am so pleased to have found Great Bear Fitness and seeing my fitness improve. Okan is amazing, making everyone feel so welcome and always encouraging you to keep going! The sessions are addictive and the exercises are always different with a fun element too!",
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
