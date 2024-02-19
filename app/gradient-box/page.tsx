"use client";

import styles from "./page.module.css";

const GradientBox = () => {
  return (
    <div className={styles.container}>
      <article>
        <h1>Hey look, this is only CSS!</h1>
        <p>
          I didn’t know you could do gradient borders like this. Hover over this
          element to see the gradient animate!
        </p>
      </article>
    </div>
  );
};

export default GradientBox;
