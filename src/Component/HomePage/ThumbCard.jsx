import React from "react";
import thumbimage from "/thumbimage.webp";
import styles from "./styles.module.css";

export const ThumbCard = () => {
  return (
    <div className={styles.thumbContainer}>
      {/* Card 1 */}
      <div className={styles.thumbCard}>
        <img className={styles.thumbImage} src={thumbimage} alt="Grocery" />
        <h4 className={styles.thumbTitle}>Grocery</h4>
      </div>
      {/* Card 2 */}
      <div className={styles.thumbCard}>
        <img
          className={styles.thumbImage}
          src={thumbimage}
          alt="Mobile Phone"
        />
        <h4 className={styles.thumbTitle}>Mobile Phone</h4>
      </div>
      {/* Card 3 */}
      <div className={styles.thumbCard}>
        <img className={styles.thumbImage} src={thumbimage} alt="Electronics" />
        <h4 className={styles.thumbTitle}>Electronics</h4>
      </div>
      {/* Card 4 */}
      <div className={styles.thumbCard}>
        <img className={styles.thumbImage} src={thumbimage} alt="Accessories" />
        <h4 className={styles.thumbTitle}>Accessories</h4>
      </div>
      {/* Card 5 */}
      <div className={styles.thumbCard}>
        <img className={styles.thumbImage} src={thumbimage} alt="Computers" />
        <h4 className={styles.thumbTitle}>Computers</h4>
      </div>
      {/* Card 6 */}
      <div className={styles.thumbCard}>
        <img className={styles.thumbImage} src={thumbimage} alt="Dress" />
        <h4 className={styles.thumbTitle}>Dress</h4>
      </div>
    </div>
  );
};
