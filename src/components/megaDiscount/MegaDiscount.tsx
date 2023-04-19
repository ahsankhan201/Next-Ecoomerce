import React from "react";
import Card from "../home/Card";
import { MegaDiscountDela } from "../../constants/staticData";
import { SliderInterface } from "../../interface/Interfaces";
import styles from "../../styles/Home.module.scss";

const MegaDiscount = () => {
  return (
    <>
      <p className={styles.eachSectionHeading}>Mega Discount</p>

      <div className={styles.cardcontainer}>
        {MegaDiscountDela.map((item: SliderInterface, index: number) => {
          return <Card key={index} item={item} />;
        })}
      </div>
     
    </>
  );
};

export default MegaDiscount;
