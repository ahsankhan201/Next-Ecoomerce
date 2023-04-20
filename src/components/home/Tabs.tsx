import { useState } from "react";
import styles from "./../../styles/Home.module.scss";

const Tabs = ({ DetailPageTabs }: any) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className={styles.tabContainer}>
        <div className={styles.tablabels}>
          {DetailPageTabs?.map(
            (tab: any, index: any) => (
              console.log(tab),
              (
                <div
                  key={index}
                  className={activeTab === index ? styles.active : ""}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </div>
              )
            )
          )}
        </div>
      </div>
      <div className={styles.tabcontent}>
        <ul>
          {DetailPageTabs[activeTab]?.content?.map((item: any) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Tabs;
