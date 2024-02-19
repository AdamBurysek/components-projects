"use client";

import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import type { SwiperClass } from "swiper/react";
import type { SwiperRef } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import styles from "./page.module.css";

import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

type Images = {
  image: string;
  initialScale?: number;
  targetScale?: number;
  initialX?: number | string;
  targetX?: number | string;
  initialY?: number | string;
  targetY?: number | string;
  freezeTime?: number;
};

const SwiperVegas = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [refresh, setRefresh] = useState<boolean>(false);
  const swiperRef = useRef<SwiperRef>(null);
  const progressLine: React.MutableRefObject<HTMLSpanElement | null> =
    useRef(null);

  const time: number = 5;

  const images: Images[] = [
    {
      image: "ben-wicks-Dtm9FK50sIU-unsplash.jpg",
      targetScale: 1.5,
    },
    {
      image: "sylvain-mauroux-8DObAiJVkrc-unsplash.jpg",
      targetScale: 1.3,
      targetX: "-10%",
      targetY: "10%",
    },
    {
      image: "fabien-bellanger-Qs1ql9tMIp0-unsplash.jpg",
      targetScale: 1.5,
    },
    {
      image: "michelle-mcewen-xbsDD5zkWY4-unsplash.jpg",
      targetScale: 1.5,
    },
    {
      image: "neom-El92hmAt91o-unsplash.jpg",
      targetScale: 1.5,
    },
    {
      image: "neom-I5j46lqAo-o-unsplash.jpg",
      targetScale: 1.5,
    },
    {
      image: "ryan-klaus-IncXhM8rKSc-unsplash.jpg",
      targetScale: 1.5,
    },
    {
      image: "simon-wilkes-S297j2CsdlM-unsplash.jpg",
      targetScale: 1.5,
    },
  ];

  useEffect(() => {
    const getActiveIndex = () => {
      if (activeIndex >= images.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    };
    getActiveIndex();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

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
          delay: time * 1000,
          disableOnInteraction: false,
          waitForTransition: false,
        }}
        loop={true}
        modules={[Autoplay, EffectFade]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className={styles.swiper}
        onSlideChange={() => setRefresh(!refresh)}
      >
        {images.map((slide: Images, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <span className={styles.swiperOverlay}></span>
            <motion.div
              animate={activeIndex === index ? "initial" : "animate"}
              transition={{
                duration: time - (slide.freezeTime || 0),
              }}
              variants={{
                initial: {
                  scale: slide.initialScale || 1,
                  x: slide.initialX || 0,
                  y: slide.initialY || 0,
                },
                animate: {
                  scale: slide.targetScale || 1,
                  x: slide.targetX || 0,
                  y: slide.targetY || 0,
                },
              }}
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

      <div style={{ width: "100%", height: 5000 }}></div>
    </>
  );
};

export default SwiperVegas;
