import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import styles from "../../../src/styles/searchNav.module.scss";
import { BiSearch } from "react-icons/bi";
import { Badge } from "@nextui-org/react";

const SearchNav = ({ textColor, title, fontSize, searchText ,setSearch,search}: any) => {

 
  console.log("textColor", textColor);
  return (
    <>
      <div>
        <nav className={styles.navbar}>
          <div className={styles.icons}>
            <div
              className={styles.favoriteHeading}
              style={{ color: textColor }}
            >
              Your Favorite Shoe Marketplace 👞 👠 👟
            </div>
          </div>
          <div
            className={styles.contact}
            style={{ color: textColor, fontSize: fontSize }}
          >
            <Link
              href="#"
              className={styles.logo}
              style={{ color: textColor, fontSize: fontSize }}
            >
              {title} Shoe Market
            </Link>
          </div>
          <div className={styles.auth}>
            <div className={styles.search_container}>
              <input
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
                type="text"
                placeholder={searchText}
                name="search"
                className={styles.search}
              />
              <div className={styles.shoppingCart}>
                <BiSearch className={styles.search_icon} />
                <Link href="#" className={styles.shoopingCart}>
                  <FaShoppingCart size={30} />
                </Link>
              </div>

              <Badge
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "black",
                  position: "absolute",
                  left: "-9px",
                  top: "-26px",
                }}
                size="sm"
              >
                10
              </Badge>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SearchNav;
