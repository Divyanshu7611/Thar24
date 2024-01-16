import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import EventCard from "./EventCard";

export default function EventSlider() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      rewind={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper !pb-12"
    >
      <SwiperSlide>
        <EventCard eventBGUrl={"gokart"} key={"gokart"} eventName={"Go Kart"} />
      </SwiperSlide>
      <SwiperSlide>
        <EventCard
          eventBGUrl={"mun"}
          key={"mun"}
          eventName={"Model United Nations"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <EventCard
          eventBGUrl={"rcnitro"}
          key={"rcnitro"}
          eventName={"RC Nitro"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <EventCard
          eventBGUrl={"robowar"}
          key={"robowar"}
          eventName={"Robo War"}
        />
      </SwiperSlide>
    </Swiper>
  );
}
