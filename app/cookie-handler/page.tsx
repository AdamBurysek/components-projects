"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { CookieImage } from "./cookieImage";

const CookieHandler = () => {
  const [openCookieMenu, setOpenCookieMenu] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <button
        className={styles.cookieButton}
        onClick={() => setOpenCookieMenu(!openCookieMenu)}
      >
        <CookieImage />
      </button>
      <div
        className={`${styles.cookieContainer} ${
          openCookieMenu ? styles.open : ""
        }`}
      >
        <div className={styles.contentContainer}>
          <div className={styles.topCookieContainer}>
            <CookieImage />
            <button
              className={styles.closeButton}
              onClick={() => setOpenCookieMenu(!openCookieMenu)}
            ></button>
          </div>
          <div className={styles.textCookieContainer}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nisi
            amet illo adipisci necessitatibus distinctio atque deleniti tempore?
            Dolor hic nemo unde itaque deserunt necessitatibus ratione, qui fuga
            omnis exercitationem.
          </div>
          <div className={styles.preferencesContainer}>
            <p className={styles.preferencesTitle}>
              Manage Consent Preferences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieHandler;
