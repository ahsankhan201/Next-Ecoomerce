import React from "react";
import { SpotlightData, brandsImages } from "../../../constants/staticData";
import styles from "../../../styles/Home.module.scss";
import Card from "../Card";
const AllBrands = () => {
  return (
  <>
      <p className={styles.eachSectionHeading}>OUR BRANDS</p>
      <div className={styles.brandsContainer}>
        {brandsImages.map((item, index) => {
          return (
            <div key={index} data-testid={`brand-image-${index}`}>
              <img src={item.image} alt={item.id} />
            </div>
          );
        })}
      </div>

      <p className={styles.eachSectionHeading}>#SPOTLIGHT</p>
      <h5 className={styles.eachSectionHeading}>
        We Know What Your Closet Needs!
      </h5>
      <div className={styles.cardcontainer} data-testid={"spotlight-card"}>
        {SpotlightData.map((item: any, index: number) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </>
  );
};

export default AllBrands;
