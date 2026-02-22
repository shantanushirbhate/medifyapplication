import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

import image1 from "../assets/medicalspecilist/div.med-doctor-style-three (1).png";
import image2 from "../assets/medicalspecilist/div.med-doctor-style-three (3).png";
import image3 from "../assets/medicalspecilist/div.med-doctor-style-three (3).png";
import image4 from "../assets/medicalspecilist/div.med-doctor-style-three.png";
import { Typography } from "@mui/material";

const images = [
  { id: 1, src: image1, alt: "offer1" },
  { id: 2, src: image2, alt: "offer2" },
  { id: 3, src: image3, alt: "offer3" },
  { id: 4, src: image4, alt: "offer3" },
];

export default function Swiperoffer() {
    return (
        <>
            <Typography style={{textAlign:"center"}}  variant="h4" >Our Medical Specilist</Typography>
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
          slidesPerView: 3.5,
          spaceBetween: 10,
        },
      }}

          style={{
              height: "26rem",
        paddingTop: "20px",
       
      }}
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <img
            src={image.src}
            alt={image.alt}
            style={{
              maxHeight: "360px",
              borderRadius: "16px",
              objectFit: "cover",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          />
        </SwiperSlide>
      ))}
            </Swiper>
            </>
  );
}
