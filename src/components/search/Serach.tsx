import { topSallerData } from "@/constants/staticData";
import React, { useMemo } from "react";
import styles from "./Search.module.scss";
const Serach = ({ search }: any) => {
    
  const searchResult = useMemo(() => {
    return topSallerData.filter((item: any) => {
      return item.category.toLowerCase().includes(search.toLowerCase());
    });
  }, [search]);

  return (
    <div>
      <h2>YOUR SEARCH FOR "{search}*" REVEALED THE FOLLOWING:</h2>
      <div className={styles.searchContainer}>
        {searchResult.map((slides: any, index: number) => {
          return (
            <div key={index}>
              <img
                src={slides.image}
                alt="image"
                className={styles.TabsliderImg}
              />
              <div>
                <p>{slides.brand}</p>
                <p>{slides.description}</p>
                <p>Rs.{slides.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Serach;
