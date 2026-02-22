import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

import image1 from "../assets/swiperofferpng/Group 10.png";
import image2 from "../assets/swiperofferpng/Group 11.png";
import image3 from "../assets/swiperofferpng/Group 12.png";

const images = [
  { id: 1, src: image1, alt: "offer1" },
  { id: 2, src: image2, alt: "offer2" },
  { id: 3, src: image3, alt: "offer3" },
];

export default function Swiperoffer() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      centeredSlides={true}
      spaceBetween={10}

      // Responsive breakpoints
      breakpoints={{
        0: {
          slidesPerView: 1.1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1.2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1.8,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2.2,
          spaceBetween: 25,
        },
        1280: {
          slidesPerView: 2.5,
          spaceBetween: 30,
        },
      }}

      style={{
        paddingTop: "200px",
        paddingBottom: "40px",
      }}
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <img
            src={image.src}
            alt={image.alt}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "260px",
              borderRadius: "16px",
              objectFit: "cover",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
