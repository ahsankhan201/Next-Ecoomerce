import React, { useState } from "react";
import styles from "./../../styles/Home.module.scss";

interface Props {
  imageUrl: string;
  title: string;
}

const Card = ({ imageUrl, title }: Props) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className={`${styles.cardContent} ${hovered ? styles.active : ""}`}>
        <h2 className={styles.cardBnenrHeading}>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
