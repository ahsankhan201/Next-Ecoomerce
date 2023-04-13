import React from "react";
import { SpotlightData, brandsImages } from "@/constants/staticData";
import styles from "@/styles/Home.module.scss";
import Card from "../Card";
const AllBrands = () => {
  return (
    <>
      <h3 className={styles.eachSectionHeading}>OUR BRANDS</h3>

      <div className={styles.brandsContainer}>
        {brandsImages.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.image} alt={item.id} />
            </div>
          );
        })}
      </div>

      <h3 className={styles.eachSectionHeading}>#SPOTLIGHT</h3>
      <h5 className={styles.eachSectionHeading}>
        We Know What Your Closet Needs!
      </h5>
      <div className={styles.cardcontainer}>
        {SpotlightData.map((item: any, index: number) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </>
  );
};

export default AllBrands;
