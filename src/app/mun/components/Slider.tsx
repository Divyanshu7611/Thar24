'use client'
import React from 'react'
import bgimage from '../assets/CommitteBg.png'
import Image from 'next/image'
import { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import mun1 from '../assets/sl1.png'
import mun2 from '../assets/sl2.png'
import mun3 from '../assets/sl3.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/zoom'
import 'swiper/css/navigation'

// import required modules
import { Zoom, Autoplay, Pagination, Navigation } from 'swiper/modules'

export default function Slider() {
  return (
    <div className="bg-white text-black" id="committe">
      <div className="relative">
        <Image alt="" src={bgimage} fill />
        <div className="flex flex-col mx-auto p-5 max-w-4xl">
          <div className="flex items-center">
            <div className="bg-[#7A7171] h-1 w-16"></div>
            <p className="text-[#7A7171]">We’ve got a committee for everyone</p>
          </div>
          <div className="">
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
                <div className="flex flex-col p-16 items-center">
                  <Image alt="" src={mun3} />
                  <h4 className="font-semibold text-sm">United Nations General Assembly</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col p-12 items-center">
                  <Image alt="" src={mun2} />
                  <h4 className="font-semibold text-sm">All India Political Party Meet</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col p-16 items-center">
                  <Image alt="" src={mun1} />
                  <h4 className="font-semibold text-sm">IMF-International Monetary Fund</h4>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}
