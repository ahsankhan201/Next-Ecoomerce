import React, { useEffect, useState } from "react";
import TopSallersSlides from "./TopSallersSlides";
import {
  SliderImages,
  menuData,
  SliderImagesBanner,
  topSallerData,
} from "@/constants/staticData";
import styles from "./../../styles/Home.module.scss";

const TopSallers = () => {
  const [activeTab, setActiveTab] = useState<any>('MENS');
  const [slidesData, setSlidesData] = useState<any>([]);

  const filterData =  () => {
    const filteredTopSallerData =  topSallerData.filter((item) => {
      const category = item.category.toLowerCase();
      console.log("category", category,activeTab.toLowerCase())
      return category.includes(activeTab.toLowerCase());
    });
    setSlidesData(filteredTopSallerData);
  };

  useEffect(() => {
    filterData();
  }, [activeTab]);
  return (
    <>
      <h3 className={styles.eachSectionHeading}>TopSallers</h3>
      <div className={styles.tabContainer}>
        <div className={styles.tablabels}>
          {menuData.map((tab, index) => (
            <div
              key={index}
              className={activeTab === index ? styles.active : ""}
              onClick={() => setActiveTab(tab.title)}
            >
              {tab.title}
            </div>
          ))}
        </div>
      </div>
      {console.log("slidesData", slidesData)}
      {slidesData.length > 0 && <TopSallersSlides topSallerData={slidesData} activeTab={activeTab} />}
    </>
  );
};

export default TopSallers;
