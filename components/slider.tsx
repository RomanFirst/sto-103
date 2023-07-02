"use client";

import useTranslation from "next-translate/useTranslation";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
  const { t, lang } = useTranslation("");
  const date = [
    {
      content: t("home:freediagnostic"),
      backgroundImage: "/img/slider/free.webp",
    },
    {
      content: t("home:carwash"),
      backgroundImage: "/img/slider/wash.webp",
    },
  ];

  const sliders = date.map(({ content, backgroundImage }, index) => {
    return (
      <SwiperSlide key={index}>
        <div
          className="slider"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <h2 className="slider__text">
            <span>{content}</span>
          </h2>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
    >
      {sliders}
    </Swiper>
  );
}
