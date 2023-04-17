import React, { useEffect, useState } from "react";
import TopSallersSlides from "./TopSallersSlides";
import { CircularProgress } from "@mui/material";
import { menuData, topSallerData } from "../../constants/staticData";
import styles from "./../../styles/Home.module.scss";

const TopSallers = () => {
  const [activeTab, setActiveTab] = useState<any>("MENS");
  const [slidesData, setSlidesData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const filterData = () => {
    const filteredTopSallerData = topSallerData.filter((item) => {
      const category = item.category.toLowerCase();
      return category.includes(activeTab.toLowerCase());
    });
    setSlidesData(filteredTopSallerData);
  };

  useEffect(() => {
    filterData();
  }, [activeTab]);
  return (
    <>
      {loading && (
        <div className={styles.loader}>
          <CircularProgress />
        </div>
      )}
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
      {slidesData.length > 0 && (
        <TopSallersSlides topSallerData={slidesData} activeTab={activeTab} />
      )}
    </>
  );
};

export default TopSallers;
