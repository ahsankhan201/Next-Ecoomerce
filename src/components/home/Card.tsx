import React, { useState } from "react";
import styles from "./../../styles/Home.module.scss";

interface Props {
  item: any;
}

const Card = ({ item }: Props) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <div
        className={styles.card}
        style={{ backgroundImage: `url(${item.image})` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-testid="card"
      >
        {item.spotlight ? null : (
          <div
            className={`${styles.cardContent} ${hovered ? styles.active : ""}`}
          >
            <h2 className={styles.cardBnenrHeading}>{item.title}</h2>
          </div>
        )}
        <div>
        {item?.spotlight ? (
          <div className={styles.spotlight}>
            <p>{item.category}</p>
            <p>{item.titleBottom}</p>
          </div>
        ) : (
          ""
        )}

        </div>
      </div>

    </>
  );
};

export default Card;
