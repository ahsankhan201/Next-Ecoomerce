import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import styles from "../../../src/styles/searchNav.module.scss";
import { BiSearch } from "react-icons/bi";
import { Badge } from "@nextui-org/react";

const SearchNav = () => {
  return (
    <>
      <div>
        <nav className={styles.navbar}>
          <div className={styles.icons}>
            <div className={styles.favoriteHeading}>
              Your Favorite Shoe Marketplace 👞 👠 👟
            </div>
          </div>
          <div className={styles.contact}>
            <Link href="#" className={styles.logo}>
              Technovez
            </Link>
          </div>
          <div className={styles.auth}>
            <div className={styles.search_container}>
              <input
                type="text"
                placeholder="Search.."
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
