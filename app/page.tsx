import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <Link href="./swiper-slideshow">
          <button className={styles.button}>Swiper Slideshow </button>
        </Link>
        <Link href="./swiper-vegas">
          <button className={styles.button}>Swiper Vegas </button>
        </Link>
        <Link href="./slideshow-vegas">
          <button className={styles.button}>Slideshow Vegas </button>
        </Link>
      </div>
    </div>
  );
}
