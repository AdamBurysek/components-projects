"use client";

import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import type { SwiperClass } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import styles from "./page.module.css";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";

const SwiperVegas = () => {
  const swiperRef = useRef(null);
  const progressLine: React.MutableRefObject<HTMLSpanElement | null> =
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
    if (progressLine !== null) {
      if (progressLine.current !== null) {
        progressLine.current.style.setProperty(
          "--progress",
          String(1 - percentage)
        );
      }
    }
  };
  return (
    <>
      <Swiper
        ref={swiperRef}
        centeredSlides={true}
        spaceBetween={50}
        effect={"fade"}
        speed={1900}
        allowTouchMove={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          waitForTransition: false,
        }}
        loop={true}
        modules={[Autoplay, EffectFade]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className={styles.swiper}
      >
        {images.map((slide) => (
          <SwiperSlide key={slide.image} className={styles.swiperSlide}>
            <span className={styles.swiperOverlay}></span>
            <motion.div
              animate={{ scale: 1, x: 0 }}
              initial={{ scale: 1.1, x: 20 }}
              transition={{ duration: 5, repeat: Infinity }}
              className={styles.swiperSlideContainer}
            >
              <Image
                className={styles.swiperImage}
                alt="Image"
                height={10000}
                priority
                quality={10}
                src={`/slideshow-images/${slide.image}`}
                width={10000}
              />
            </motion.div>
          </SwiperSlide>
        ))}

        <div className={styles.autoplayProgress}>
          <span className={styles.autoplayLine} ref={progressLine}></span>
        </div>
      </Swiper>
    </>
  );
};

export default SwiperVegas;
