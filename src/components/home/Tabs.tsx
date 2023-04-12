import { useState } from "react";
import styles from "./../../styles/Home.module.scss";
import { menuData } from "@/constants/staticData";
const tabs = [
  { label: "Tab 1", content: "This is the content for tab 1." },
  { label: "Tab 2", content: "This is the content for tab 2." },
  { label: "Tab 3", content: "This is the content for tab 3." },
  { label: "Tab 4", content: "This is the content for tab 4." },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className={styles.tabContainer}>
        <div className={styles.tablabels}>
          {menuData.map((tab, index) => (
            <div
              key={index}
              className={activeTab === index ? styles.active : ""}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </div>
          ))}
        </div>
      </div>
        <div className={styles.tabcontent}>{tabs[activeTab].content}</div>
    </>
  );
};

export default Tabs;
