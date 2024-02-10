"use client";

import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperClass } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./page.module.css";

// import required modules
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper/modules";
import Image from "next/image";

const SwiperSlideshow = () => {
  const swiperRef = useRef(null);
  const progressCircle: React.MutableRefObject<SVGSVGElement | null> =
    useRef(null);
  const progressContent: React.MutableRefObject<HTMLDivElement | null> =
    useRef(null);

  const images = [
    { image: "ben-wicks-Dtm9FK50sIU-unsplash.jpg" },
    { image: "david-becker-eGzx9xud4QQ-unsplash.jpg" },
    { image: "fabien-bellanger-Qs1ql9tMIp0-unsplash.jpg" },
    { image: "michelle-mcewen-xbsDD5zkWY4-unsplash.jpg" },
    { image: "neom-El92hmAt91o-unsplash.jpg" },
    { image: "neom-I5j46lqAo-o-unsplash.jpg" },
    { image: "ryan-klaus-IncXhM8rKSc-unsplash.jpg" },
    { image: "simon-wilkes-S297j2CsdlM-unsplash.jpg" },
  ];

  const onAutoplayTimeLeft = (
    swiper: SwiperClass,
    timeLeft: number,
    percentage: number
  ) => {
    if (progressCircle !== null || progressContent !== null) {
      if (progressCircle.current !== null) {
        progressCircle.current.style.setProperty(
          "--progress",
          String(1 - percentage)
        );
      }
      if (progressContent.current !== null) {
        progressContent.current.textContent = `${Math.ceil(timeLeft / 1000)}`;
      }
    }
  };
  return (
    <>
      <Swiper
        ref={swiperRef}
        centeredSlides={true}
        spaceBetween={50}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -200],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        speed={1900}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          waitForTransition: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, EffectCreative, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className={styles.swiper}
      >
        {images.map((slide) => (
          <SwiperSlide key={slide.image} className={styles.swiperSlide}>
            <Image
              className={styles.swiperImage}
              alt="Artist Image"
              height={10000}
              priority
              quality={100}
              src={`/slideshow-images/${slide.image}`}
              width={10000}
            />
          </SwiperSlide>
        ))}

        <div className={styles.autoplayProgress} slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default SwiperSlideshow;
