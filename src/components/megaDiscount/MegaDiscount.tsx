import React from "react";
import Card from "../home/Card";
import { MegaDiscountDela } from "../../constants/staticData";
import { SliderInterface } from "../../interface/Interfaces";
import styles from "../../styles/Home.module.scss";

const MegaDiscount = () => {
  return (
    <>
      <h3 className={styles.eachSectionHeading}>Mega Discount</h3>

      <div className={styles.cardcontainer}>
        {MegaDiscountDela.map((item: SliderInterface, index: number) => {
          return <Card key={index} item={item} />;
        })}
      </div>
     
    </>
  );
};

export default MegaDiscount;
