import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/mainNavBar.module.scss";

import {
  EidCollection2023,
  menuData,
  Accessories,
  ShopByBrand,
} from "@/constants/staticData";
const MainNavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.navbar__list}>
          <li
            className={styles.navbar__item}
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/">Sale</Link>
            {showMenu && (
              <ul className={styles.submenu}>
                {menuData.map((item: any, index) => {
                  return (
                    <li className={styles.submenu__item} key={index}>
                      <Link href="/collection/SummerCollection">
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
          <li
            className={styles.navbar__item}
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/">Eid Collection 2023</Link>
            {showMenu && (
              <ul className={styles.submenu}>
                {EidCollection2023.map((item: any, index) => {
                  return (
                    <li className={styles.submenu__item} key={index}>
                      <Link href="/">{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
          <li
            className={styles.navbar__item}
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/">MEN</Link>
            {showMenu && (
              <ul className={styles.submenu}>
                <div className={styles.flexContainerOfNavBar}>
                  <div>
                    <li className={styles.submenu__item}>
                      <Link href="/">Shirts</Link>
                    </li>
                    <li className={styles.submenu__item}>
                      <Link href="/">Pants</Link>
                    </li>
                    <li className={styles.submenu__item}>
                      <Link href="/">Shoes</Link>
                    </li>
                  </div>
                  <div>
                    <li className={styles.submenu__item}>
                      <Link href="/">Accessories</Link>
                    </li>
                    <li className={styles.submenu__item}>
                      <Link href="/">Bluetooth</Link>
                    </li>
                    <li className={styles.submenu__item}>
                      <Link href="/">Handfree</Link>
                    </li>
                  </div>
                </div>
              </ul>
            )}
          </li>
          <li
            className={styles.navbar__item}
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/">Women</Link>
            {showMenu && (
              <ul className={styles.submenu}>
                <div className={styles.flexContainerOfNavBar}>
                  <div>
                    <li className={styles.submenu__item}>
                      <Link href="/">Shirts12</Link>
                    </li>
                    <li className={styles.submenu__item}>
                      <Link href="/">Pants</Link>
                    </li>
                    <li className={styles.submenu__item}>
                      <Link href="/">Shoes</Link>
                    </li>
                  </div>
                  <div>
                    <li className={styles.submenu__item}>
                      <Link href="/">Accessories</Link>
                    </li>
                    <li className={styles.submenu__item}>
                      <Link href="/">Bluetooth</Link>
                    </li>
                    <li className={styles.submenu__item}>
                      <Link href="/">Handfree</Link>
                    </li>
                  </div>
                </div>
              </ul>
            )}
          </li>
          <li className={styles.navbar__item}>
            <Link
              href="/"
              className={styles.navbar__item}
              onMouseOver={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              KIDS
            </Link>
            {showMenu && (
              <ul className={styles.submenu}>
                {EidCollection2023.slice(2).map((item: any, index) => {
                  return (
                    <li className={styles.submenu__item} key={index}>
                      <Link href="/">{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
          <li className={styles.navbar__item}>
            <Link
              href="/"
              className={styles.navbar__item}
              onMouseOver={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              ACCESSORIES
            </Link>
            {showMenu && (
              <ul className={styles.submenu}>
                {Accessories.map((item: any, index) => {
                  return (
                    <li className={styles.submenu__item} key={index}>
                      <Link href="/">{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
          <li className={styles.navbar__item}>
            <Link
              href="/"
              className={styles.navbar__item}
              onMouseOver={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              SHOP BY BRAND
            </Link>
            {showMenu && (
              <ul className={styles.submenu}>
                {ShopByBrand.map((item: any, index) => {
                  return (
                    <li className={styles.submenu__item} key={index}>
                      <Link href="/">{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            )}
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
