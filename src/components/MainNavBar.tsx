import Link from "next/link";
import React from "react";
import styles from "../styles/mainNavBar.module.scss";
import { Dropdown, TriggerTypes } from "@nextui-org/react";
import { menuData, shooping } from "@/constants/staticData";
const MainNavBar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.navbar__list}>
          <li className={styles.navbar__item}>
            {/* <Link href="/">SALE</Link> */}
            <div>
              <Dropdown>
                <Dropdown.Button flat color="secondary">
                  SALE
                </Dropdown.Button>
                <Dropdown.Menu color="secondary" aria-label="Actions">
                  {menuData.map((item: any) => (
                    <Dropdown.Item key={item.id}>{item.title}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              ;
            </div>
          </li>
          <li className={styles.navbar__item}>
            <div>
              <Dropdown>
                <Dropdown.Button flat color="secondary">
                  EID COLLECTION 2023
                </Dropdown.Button>
                <Dropdown.Menu color="secondary" aria-label="Actions">
                  {shooping.map((item: any) => (
                    <Dropdown.Item key={item.id}>{item.title}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li>
          <li className={styles.navbar__item}>
            <Link href="/">MEN</Link>
          </li>
          <li className={styles.navbar__item}>
            <Link href="/">WOMEN</Link>
          </li>
          <li className={styles.navbar__item}>
            <Link href="/">KIDS</Link>
          </li>
          <li className={styles.navbar__item}>
            <Link href="/">ACCESSORIES</Link>
          </li>
          <li className={styles.navbar__item}>
            <Link href="/">SHOP BY BRAND</Link>
          </li>
          <li className={styles.navbar__item}>
            <Link href="/">CUSTOMER REVIEWS</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavBar;
