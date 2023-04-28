import React, { PropsWithChildren } from "react";
import MainBar from "../navBar/MainBar";
import SearchNav from "../navBar/SearchNav";
import MainNavBar from "../MainNavBar";
import Footer from "../footer/Footer";


const Layout = ({ children }: PropsWithChildren<any>) => {
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <MainBar />
      <SearchNav />
      <MainNavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
