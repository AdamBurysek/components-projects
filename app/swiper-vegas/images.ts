export type Images = {
  image: string;
  initialScale?: number;
  targetScale?: number;
  initialX?: number | string;
  targetX?: number | string;
  initialY?: number | string;
  targetY?: number | string;
  freezeTime?: number;
};

export const images: Images[] = [
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
