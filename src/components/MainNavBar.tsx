import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/mainNavBar.module.scss";
import Menu from "@mui/material/Menu";
import { navMenu } from "@/constants/staticData";

const MainNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  // const handleMenuClick = (event: any) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenSubMenu(null);
  };

  const handleSubMenuClick = (event: any, subMenu: any) => {
    setOpenSubMenu(openSubMenu === subMenu ? null : subMenu);
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.menuContainer}>
        {navMenu.map((menuItem: any,index:any) => (
          <div key={menuItem.id}>
            {menuItem.subMenu ? (
              <div className={styles.menuItemWithSubmenu}>
                <button
                  id={menuItem.id}
                  aria-controls={menuItem.id}
                  aria-haspopup="true"
                  aria-expanded={
                    openSubMenu === menuItem.id ? "true" : undefined
                  }
                  onClick={(event) => handleSubMenuClick(event, menuItem.id)}
                  className={styles.menuButton}
                >
                  <div className={styles.menuTitle}>{menuItem.title}</div>
                </button>
                <Menu
                  id={`${menuItem.id}-menu`}
                  anchorEl={anchorEl}
                  open={openSubMenu === menuItem.id}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    "aria-labelledby": menuItem.id,
                  }}
                  className={styles.subMenu}
                  BackdropProps={{ invisible: true }}
                >
                  {menuItem.subMenu.map((subMenuItem: any,index:any) => (
                    <Link
                    key={index}
                      href={`collection/${subMenuItem.link}`}
                      onClick={handleMenuClose}
                      className={styles.subMenuTitle}
                    >
                      {subMenuItem.title}
                    </Link>
                  ))}
                </Menu>
              </div>
            ) : (
              <button className={styles.menuButton}>{menuItem.title}</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNavBar;
